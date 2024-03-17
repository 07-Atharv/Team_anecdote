import React from "react";
import UploadWidget from "../ImageAnswer/UploadWidget";
import TextAnswer from "../textAnswer";
import CodeAnswer from "../codeAnswer";
import StudentMCQAnswer from "../StudentMCQAnswer/StudentMCQAnswer";

const StudentImageQuestion = (props) => {
  let options = [];

  if (props.question.anstype == "mcq") {
    options = props.question.options;
    console.log(options);
  }

  console.log( props.question.qimg );
  
  return (
    <div>
      <div className="shadow-md rounded-xl w-full h-fit p-8">
        <div className="flex flex-row">
          <h1 className="font-bold text-2xl grow">
            Question {props.index + 1}
          </h1>
        </div>

        <p className="pt-4 text-xl">{props.question.qtext}</p>

        <img src={props.question.qimg} alt=""></img>

        <div className="flex flex-row justify-start gap-x-12 w-full mt-8 mx-auto">
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
    </div>
  );
};

export default StudentImageQuestion;
