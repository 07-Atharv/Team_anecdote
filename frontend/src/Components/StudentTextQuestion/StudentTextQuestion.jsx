"use client";

import React from "react";
import { Dropdown } from "flowbite-react";
import TextAnswer from "../textAnswer";
import ImageAnswer from "../ImageAnswer";
import MCQAnswer from "../MCQAnswer";
import CodeAnswer from "../codeAnswer/";
import StudentTextAnswer from "../StudentTextAnswer";

const StudentTextQuestion = (props) => {
  const details = props.question;
  const [selectedLabel, setSelectedLabel] =
    React.useState("Select Answer Type");
  const [editable, setEditable] = React.useState(false);
  const [questionState, setQuestionState] = React.useState(false);
  const [question, setQuestion] = React.useState(details.question);
  const [answerComponent, setAnswerComponent] = React.useState();

  return (
    <div className="shadow-md rounded-xl w-full h-fit p-8">
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl grow">Question {props.index + 1}</h1>
      </div>

      <p className="pt-4 text-xl" onClick={() => setQuestionState(true)}>
        {props.question.qtext}
      </p>

      <div className="flex flex-row justify-start gap-x-12 w-full mt-8 mx-auto">
        {props.question.qtype == "text" ? <TextAnswer disabled={false}/> : ""}
      </div>

      {answerComponent}

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

export default StudentTextQuestion;
