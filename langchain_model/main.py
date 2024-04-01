from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Pinecone
from sentence_transformers import SentenceTransformer
from langchain.chains.question_answering import load_qa_chain
from pinecone import Pinecone, ServerlessSpec
from langchain.vectorstores import Pinecone as pcone
import os
from langchain.llms import LlamaCpp
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from huggingface_hub import hf_hub_download
from langchain.chains.question_answering import load_qa_chain
from langchain.document_loaders import PyPDFLoader, OnlinePDFLoader
import warnings
import time
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


app = FastAPI()

warnings.filterwarnings("ignore")
model_name_or_path = "TheBloke/Llama-2-13B-chat-GGUF"
model_basename = "llama-2-13b-chat.Q5_0.gguf"
PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY', '7b51ee47-cecb-4276-9a91-f225348f4f73')
PINECONE_API_ENV = os.environ.get('PINECONE_API_ENV', 'asia-southeast1-gcp-free')

os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"
os.environ["PINECONE_API_KEY"] = PINECONE_API_KEY

# initialize pinecone
pc = Pinecone(
    api_key=PINECONE_API_KEY,  # find at app.pinecone.io
    environment=PINECONE_API_ENV  # next to api key in console
)
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])     
model_path = hf_hub_download(repo_id=model_name_or_path, filename=model_basename)

# Loading model,
llm = LlamaCpp(
    model_path=model_path,
    max_tokens=256,
    n_batch=8,
    callback_manager=callback_manager,
    n_ctx=1024,
    verbose=False,
    device="cpu"
)

class Text(BaseModel):
    query: str

def infer_pdf( src ): 
    loader = PyPDFLoader(src)
    data = loader.load()

    chain=load_qa_chain(llm, chain_type="stuff")

    index_name = "langchainpinecone" # put in the name of your pinecone index here
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)
    docs=text_splitter.split_documents(data)
    embeddings=HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2')    
    docsearch= pcone.from_texts([t.page_content for t in docs], embeddings, index_name=index_name)

    query="Generate 3 MCQ questions with answers based on the content given"
    docs=docsearch.similarity_search(query)
    t = chain.run(input_documents=docs, question=query)
    print( "ans", t );

def infer_text( text):
    # Loading model,
    llm = LlamaCpp(
        model_path=model_path,
        max_tokens=256,
        n_batch=32,
        callback_manager=callback_manager,
        n_ctx=1024,
        verbose=False,
        device="cpu"
    )

    chain=load_qa_chain(llm, chain_type="stuff")

    query = "Give me a single question based on the following string " + text
    t = chain.run(input_documents=[], question=query )
    return {
        "ans" : t
    }

@app.post("/text-reframe")
async def reframe_text(item: Text):
    try:
        start = time.time() 
        infer_text(item.query)
        print( "text inference - ", time.time() - start )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post( "/generate-mcq" )
async def generate_mcq( item: Text ):
    try:
        start = time.time() 
        infer_pdf(item.query)
        print( "pdf inference - ",  time.time() - start ) 
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    