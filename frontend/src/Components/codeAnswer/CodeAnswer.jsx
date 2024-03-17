import React, { useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import LanguageSelector from "../LanuageSelector/LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";

const CodeAnswer = () => {
  const editorRef = useRef;

  const onSelect = (lang) => {
    setLanguage(lang);
    setCodeQuestion(CODE_SNIPPETS[lang]);
  };
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const [codeQuestion, setCodeQuestion] = useState("");
  const [language, setLanguage] = useState("javascript");

  return (
      <div className="flex flex-col w-full">
        <div className="mt-6">
          <LanguageSelector props={{ language, onSelect }} />
        </div>
        <Editor
          theme="vs-dark"
          height="40vh"
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
  );
};

export default CodeAnswer;
