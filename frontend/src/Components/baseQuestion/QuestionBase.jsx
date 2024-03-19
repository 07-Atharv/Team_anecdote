"use client";

import { FloatingLabel, Dropdown, Textarea } from "flowbite-react";
import React, { useRef, useState } from "react";
import { ANS_TYPE, CODE_SNIPPETS, QUE_TYPE } from "../../constants";

import LanguageSelector from "../LanuageSelector/LanguageSelector";
import { Editor } from "@monaco-editor/react";
import UploadWidget from "../ImageAnswer/UploadWidget";

function QuestionBase(props) {
  const {
    len,
    handleDeleteOption,
    handleChangeOption,
    handleChangeRadioOption,
    question,
    idx,
    handleAddOption,
    handleRemoveQuestion,
    handleChangeQuestion,
  } = props.props;

  const editorRef = useRef(null);

  const [language, setLanguage] = useState("javascript");
  const onSelect = (lang) => {
    setLanguage(lang);
    handleChangeQuestion(idx, "qcode", CODE_SNIPPETS[lang]);
  };
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const displayLabel = {
    text: "Text",
    image: "Image",
    code: "Code",
  };
  const displayAnsLabel = {
    text: "Text",
    mcq: "MCQ",
    check: "Checkboxes",
    code: "Code",
  };
  // console.log(question)
  console.log(len);
  return (
    <div className="mt-5 p-5 border rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Question {idx + 1}</h1>
        <button
          onClick={() => {
            handleRemoveQuestion(idx);
          }}
          className="shadow-md border border-slate-100 rounded-full px-4 py-3 text-black">
          <i class="bx bxs-trash-alt text-lg"></i>
        </button>
      </div>
      <div className="w-full mt-4 flex justify-between items-center">
        <div className="w-5/6 mr-2 ">
          <FloatingLabel
            required
            name="qtext"
            value={question.qtext}
            onChange={(e) => {
              handleChangeQuestion(idx, e.target.name, e.target.value);
            }}
            variant="outlined"
            label="Enter Question"
          />
        </div>{" "}
        <div className="w-1/6 ml-6">
          <Dropdown label={displayLabel[question.qtype]} inline>
            <Dropdown.Item
              onClick={() => {
                handleChangeQuestion(idx, "qtype", QUE_TYPE.QUE_TYPE_TEXT);
              }}>
              Text
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleChangeQuestion(idx, "qtype", QUE_TYPE.QUE_TYPE_IMAGE);
              }}>
              Image
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleChangeQuestion(idx, "qtype", QUE_TYPE.QUE_TYPE_CODE);
              }}>
              Code
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div>
        {question.qtype === QUE_TYPE.QUE_TYPE_IMAGE ? (
          <div>
            <UploadWidget
              props={{ handleChangeQuestion, idx, field: "qimg" }}
            />
            <div className="flex w-full justify-center">
              <img
                className="h-[400px] border border-slate-100 rounded-md p-2"
                src={question.qimg}
                alt=""></img>
            </div>
          </div>
        ) : question.qtype === QUE_TYPE.QUE_TYPE_CODE ? (
          <div>
            <div className="flex flex-row items-center">
              <p className="pr-4 py-4 font-bold text-xl">Select Language</p>
              <LanguageSelector props={{ language, onSelect }} />
            </div>
            <Editor
              theme="vs-dark"
              height="30vh"
              language={language}
              onMount={onMount}
              defaultLanguage="javascript"
              defaultValue={CODE_SNIPPETS["javascript"]}
              value={question.qcode}
              onChange={(code) => {
                handleChangeQuestion(idx, "qcode", code);
              }}
            />
          </div>
        ) : null}
      </div>
      <div className="flex items-center mb-4 mt-5">
        <p className="font-bold text-lg  mr-5">Answer Type: </p>
        <Dropdown label={displayAnsLabel[question.anstype]} inline>
          <Dropdown.Item
            onClick={() => {
              handleChangeQuestion(idx, "anstype", ANS_TYPE.ANS_TYPE_TEXT);
            }}>
            Text
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleChangeQuestion(idx, "anstype", ANS_TYPE.ANS_TYPE_MCQ);
            }}>
            MCQ
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleChangeQuestion(idx, "anstype", ANS_TYPE.ANS_TYPE_CHECK);
            }}>
            Checkboxes
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleChangeQuestion(idx, "anstype", ANS_TYPE.ANS_TYPE_CODE);
            }}>
            Code
          </Dropdown.Item>
        </Dropdown>
      </div>
      {question.anstype === "text" && (
        <Textarea
          required
          fullWidth
          multiline
          variant="outlined"
          rows={4}
          type="text"
          placeholder="Expected Answer"
          value={question.options[0].text}
          onChange={(e) => {
            handleChangeOption(idx, 0, "text", e.target.value);
          }}
        />
      )}
      {question.anstype === "code" && (
        <Textarea
          required
          fullWidth
          multiline
          variant="outlined"
          rows={10}
          type="text"
          placeholder="Expected Output"
          value={question.options[0].text}
          onChange={(e) => {
            handleChangeOption(idx, 0, "text", e.target.value);
          }}
        />
      )}
      {question.anstype === "mcq" && (
        <>
          <div className="grid grid-cols-2 gap-4 w-[95%]">
            {question.options.map((option, optionIdx) => (
              <div key={optionIdx}>
                <div className="flex items-center mx-4">
                  <div className="flex flex-row grow items-center justify-between border border-slate-200 rounded-md px-4 border-container">
                    <FloatingLabel
                      required
                      variant="outlined"
                      className="w-full border-none"
                      type="text"
                      placeholder={`option ${optionIdx + 1}`}
                      value={option.text}
                      onChange={(e) =>
                        handleChangeOption(
                          idx,
                          optionIdx,
                          "text",
                          e.target.value
                        )
                      }></FloatingLabel>

                    <label className="mx-2">
                      Correct:
                      <input
                        required
                        className="ml-2"
                        type="radio"
                        name={`correct-option-${idx}`}
                        checked={option.isCorrect}
                        onChange={(e) => {
                          handleChangeRadioOption(
                            idx,
                            optionIdx,
                            "isCorrect",
                            e.target.checked
                          );
                        }}
                      />
                    </label>
                  </div>

                  <button
                    className="bg-[#b73838] py-3 mx-5 text-white px-8 rounded-xl"
                    type="button"
                    onClick={() => handleDeleteOption(idx, optionIdx)}>
                    Delete
                  </button>
                </div>
                <label className="flex flex-row justify-start"></label>
              </div>
            ))}
          </div>
          <div>
            <button
              className="px-4 py-3 text-white shadow-md border bg-blue-700 border-slate-200 font-bold rounded-xl mt-6"
              type="button"
              onClick={() => handleAddOption(idx)}>
              Add Option
            </button>
          </div>
        </>
      )}

      {question.anstype === "check" && (
        <>
          <div className="grid grid-cols-2 gap-4 w-[95%]">
            {question.options.map((option, optionIdx) => (
              <div key={optionIdx} className="flex flex-row mx-4">
                <label className="grow">
                  <div className="flex flex-row justify-betwen border border-slate-200 px-4 rounded-xl items-center">
                    <div className="grow">
                      <FloatingLabel
                        required
                        variant="outlined"
                        type="text"
                        className="border-none"
                        placeholder={`option ${optionIdx + 1}`}
                        value={option.text}
                        onChange={(e) => {
                          handleChangeOption(
                            idx,
                            optionIdx,
                            "text",
                            e.target.value
                          );
                        }}
                      />
                    </div>
                    <label>
                      Correct:
                      <input
                        type="checkbox"
                        className="mx-2"
                        checked={option.isCorrect}
                        onChange={(e) => {
                          handleChangeOption(
                            idx,
                            optionIdx,
                            "isCorrect",
                            e.target.checked
                          );
                        }}
                      />
                    </label>
                  </div>
                </label>
                <button
                  type="button"
                  className="bg-[#b73838] mx-5 text-white px-8 rounded-xl"
                  onClick={() => handleDeleteOption(idx, optionIdx)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button
            className="px-4 py-3 text-white shadow-md border bg-blue-700 border-slate-200 font-bold rounded-xl mt-6"
            type=" button"
            onClick={() => handleAddOption(idx)}>
            Add Option
          </button>
        </>
      )}
    </div>
  );
}

export default QuestionBase;
