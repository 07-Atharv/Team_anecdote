"use client";

import React from "react";
import TextAnswer from "../textAnswer";
import CodeAnswer from "../codeAnswer/";
import StudentMCQAnswer from "../StudentMCQAnswer/StudentMCQAnswer";
import StudentCheckAnswer from "../StudentCheckAnswer/StudentCheckAnswer";

const StudentTextQuestion = (props) => {
  const {index } = props
  const {handleAnswerChange,answers} = props

  let options = [];

  if( props.question.anstype === "mcq" || props.question.anstype == "check") {
    options = props.question.options;
    console.log( options );
  }

  return (
    <div className="shadow-md rounded-xl w-full h-fit p-8">
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl grow">Question {props.index + 1}</h1>
      </div>

      <p className="pt-4 text-xl">
        {props.question.qtext}
      </p>

      <div className="flex flex-row justify-start gap-x-12 w-full mt-8 mx-auto">
        { props.question.anstype == "text" ? <TextAnswer index={index} answers={answers} handleAnswerChange={handleAnswerChange} disabled={false}/> : ""}

        {props.question.anstype == "code" ? <CodeAnswer index={index} answers={answers} handleAnswerChange={handleAnswerChange} /> : "" }

        {props.question.anstype == "mcq"  ? <StudentMCQAnswer index={index} answers={answers} handleAnswerChange={handleAnswerChange} options={options} /> : "" }
        {props.question.anstype == "check"  ? <StudentCheckAnswer index={index} answers={answers} handleAnswerChange={handleAnswerChange} options={options} /> : "" }
      </div>
    </div>
  );
};

export default StudentTextQuestion;
