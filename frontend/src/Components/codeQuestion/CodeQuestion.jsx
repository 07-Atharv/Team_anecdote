import React, { useEffect, useRef, useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import LanguageSelector from '../LanuageSelector/LanguageSelector';
import {CODE_SNIPPETS, LANGUAGES_SUPPORTED } from '../../constants';

const languages = Object.entries(LANGUAGES_SUPPORTED);

const CodeQuestion = (props) => {

  const data = props.props
  const [language,setLanguage] = useState("javascript")
  const [question,setQuestion] = useState("")
  const editorRef = useRef(null)
  
  const onSelect = (lang)=>{
    setLanguage(lang);
    setCodeQuestion(CODE_SNIPPETS[lang])
  }
  const onMount = (editor) =>{
    editorRef.current = editor
    editor.focus()
  }

  const [codeQuestion,setCodeQuestion] =  useState("")
  return (
    <div >
       {/* <input
          type="text" placeholder='Enter Question'
          value={question}
          className="mt-4"
          onChange={(e) => setQuestion(e.target.value)}
          
        /> */}
      <LanguageSelector props={{language,onSelect}}/>
      <Editor  theme='vs-dark' height="30vh" language={language} onMount={onMount} defaultLanguage="javascript" defaultValue={CODE_SNIPPETS["javascript"]}  value={codeQuestion} onChange={(code)=>{setCodeQuestion(code)}}/>
    </div>
  )
}

export default CodeQuestion