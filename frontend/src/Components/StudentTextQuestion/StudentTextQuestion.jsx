"use client";

import React from "react";
import TextAnswer from "../textAnswer";
import CodeAnswer from "../codeAnswer/";
import StudentMCQAnswer from "../StudentMCQAnswer/StudentMCQAnswer";

const StudentTextQuestion = (props) => {
  let options = [];

  if( props.question.anstype == "mcq" ) {
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
        { props.question.anstype == "text" ? <TextAnswer disabled={false}/> : ""}

        {props.question.anstype == "code" ? <CodeAnswer /> : "" }

        {props.question.anstype == "mcq" || true ? <StudentMCQAnswer options={options} /> : "" }
      </div>
    </div>
  );
};

export default StudentTextQuestion;
