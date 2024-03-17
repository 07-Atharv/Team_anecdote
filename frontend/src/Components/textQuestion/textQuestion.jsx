"use client";

import React from "react";
import { Dropdown } from "flowbite-react";
import TextAnswer from "../textAnswer";
import ImageAnswer from "../ImageAnswer";
import MCQAnswer from "../MCQAnswer";
import CodeAnswer from "../codeAnswer";

const TextQuestion = (props) => {
  const details = props.props;

  const [selectedLabel, setSelectedLabel] = React.useState("Select Answer Type");
  const [editable, setEditable] = React.useState(false);
  const [questionState, setQuestionState] = React.useState(false);
  const [question, setQuestion] = React.useState(details.question);
  const [answerComponent, setAnswerComponent] = React.useState();

  return (
    <div className="shadow-md rounded-xl w-full h-fit p-8">
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl grow">Question {props.index}</h1>

        {editable ? (
          <div className=""> </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setEditable(true); 
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <i class="bx bxs-edit-alt text-white"></i>
          </button>
        )}
      </div>

      {editable ? (
        <input
          type="text"
          value={question}
          className="mt-4"
          onChange={(e) => setQuestion(e.target.value)}
          onBlur={() => setQuestionState(false)}
        />
      ) : (
        <p className="pt-4 text-xl" onClick={() => setQuestionState(true)}>
          {" "}
          {question}{" "}
        </p>
      )}

      <div className="flex flex-row justify-start gap-x-12 w-full mt-8 mx-auto">
        <h1 className="font-bold text-lg">Answer Type</h1>

        {editable ? (
          <Dropdown label={selectedLabel} inline>
            <Dropdown.Item
              onClick={() => {
                setSelectedLabel("Code");

                setAnswerComponent( <CodeAnswer/>)
              }}>
              Code
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedLabel("Text");

                setAnswerComponent( <TextAnswer disabled={true} /> );
              }}>
              Text
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedLabel("Image");

                setAnswerComponent( <ImageAnswer/> )
              }}>
              Image
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedLabel("Multiple Choice Questions (MCQs)");

                setAnswerComponent( <MCQAnswer/> )
              }}>
              Multiple Choice Questions (MCQs)
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <p> {selectedLabel} </p>
        )}
        {/* <button
            type="button"
            onClick={() => setEditable(false)}
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Text Based Answer
          </button>

          <button
            type="button"
            onClick={() => setEditable(false)}
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            MCQ Based Answerer
          </button>

          <button
            type="button"
            onClick={() => setEditable(false)}
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Image Based Answer
          </button>

          <button
            type="button"
            onClick={() => setEditable(false)}
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Code Based Answer 
          </button> */}
      </div>

      { answerComponent }

      {!editable ? (
        <div className=" "></div>
      ) : (
        <div className="button-container w-full flex flex-row items-end justify-end">
          <button
            type="button"
            onClick={() => setEditable(false)}
            className="text-white  px-8 bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TextQuestion;
