import React from "react";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "../LanuageSelector/LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
import TextAnswer from "../textAnswer";
import CodeAnswer from "../codeAnswer";
import StudentMCQAnswer from "../StudentMCQAnswer/StudentMCQAnswer";

const StudentCodeQuestion = (props) => {
  const [language, setLanguage] = useState("javascript");
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
  let options = [];

  if (props.question.anstype == "mcq") {
    options = props.question.options;
    console.log(options);
  }

  return (
    <>
      <div className="shadow-md rounded-xl w-full h-fit p-8">
        <div className="flex flex-row">
          <h1 className="font-bold text-2xl grow">
            Question {props.index + 1}
          </h1>
        </div>

        <p className="pt-4 text-xl">{props.question.qtext}</p>

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

        {props.question.anstype == "code" ? (
          <h1 className="font-bold text-2xl mt-8"> Write the code below </h1>
        ) : (
          ""
        )}

        <div className="flex flex-row justify-start gap-x-12 w-full mx-auto">
          {props.question.anstype == "text" ? (
            <TextAnswer disabled={false} />
          ) : (
            ""
          )}

          {props.question.anstype == "code" ? <CodeAnswer /> : ""}

          {props.question.anstype == "mcq" || true ? (
            <StudentMCQAnswer options={options} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default StudentCodeQuestion;
