import React, { useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import LanguageSelector from "../LanuageSelector/LanguageSelector";
import { CODE_SNIPPETS, LANGUAGES_SUPPORTED } from "../../constants";

const PISTON_BASE = "https://emkc.org/api/v2/piston"

const CodeAnswer = (props) => {
  const editorRef = useRef;
  const { index } = props
  const { handleAnswerChange } = props
  const onSelect = (lang) => {
    setLanguage(lang);
    setCodeQuestion(CODE_SNIPPETS[lang]);
  };
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const [language, setLanguage] = useState("javascript");
  
  const [codeQuestion, setCodeQuestion] = useState(CODE_SNIPPETS[language]);
  const [output, setOutput] = useState([]);


    const runCode = async()=>{

      console.log("Run code clicked")
        const sourceCode = codeQuestion;
        if(!sourceCode) {
          
          console.log("code not found");
          return;
        }
        try {
            let res = await fetch(PISTON_BASE+"/execute",{
              method:"POST",
              headers :{
                
              "Content-Type" :"application/json"
              },
              body :JSON.stringify({
                "language" : language,
                "version": LANGUAGES_SUPPORTED[language],
                "files" : [
                  {
                    "content" : sourceCode
                  }
                ]
              })
            });

            res = await res.json()

            console.log("Code Runner : ",res)
            setOutput(res.run.output.split("\n"))
            handleAnswerChange(index,res.run.output)  


        } catch (error) {
          console.log("Code runner : ",error)
        }
    }
  return (
    <div className="flex   w-full">
      <div className="w-1/2 mx-2">
        <div className="mt-6">
          <LanguageSelector  className="p-2 " props={{ language, onSelect }} />
        </div>
        <Editor
          theme="vs-dark"
          height="40vh" className="mt-4"
          language={language}
          onMount={onMount}
          defaultLanguage="javascript"
          defaultValue={CODE_SNIPPETS["javascript"]}
          value={codeQuestion}
          onChange={(code) => {
            setCodeQuestion(code);
          }}
        />
      </div>
      <div className="w-1/2 mx-2">
        
        <div className="mt-6">
          <button  type="button" className="bg-green-600 rounded-xl text-white p-2 " onClick={runCode}>Run Code</button>
        </div>
        <div className="bg-black text-green-400 p-3 rounded-xl w-full h-5/6 ">
          {output.map((line,i)=>{
            return <h1 className="text-green-400" key={i}>{line}</h1>
          })}
        </div>
      </div>
    </div>
  );
};

export default CodeAnswer;
