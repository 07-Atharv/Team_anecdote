import React from "react";
import UploadWidget from "../ImageAnswer/UploadWidget";
import TextAnswer from "../textAnswer";
import CodeAnswer from "../codeAnswer";
import StudentMCQAnswer from "../StudentMCQAnswer/StudentMCQAnswer";
import StudentCheckAnswer from "../StudentCheckAnswer/StudentCheckAnswer";

const StudentImageQuestion = (props) => {
  let options = [];
  const {handleAnswerChange} = props

  if (props.question.anstype == "mcq" ||props.question.anstype === "check") {
    options = props.question.options;
    console.log(options);
  }

  console.log( props.question.qimg );

  const {index,answers } = props
  
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
            <TextAnswer disabled={false}   answers={answers}handleAnswerChange={handleAnswerChange}  index={index}/>
          ) : (
            ""
          )}

          {props.question.anstype == "code" ? <CodeAnswer  answers={answers} handleAnswerChange={handleAnswerChange} index={index}  /> : ""}
          {props.question.anstype == "check" ? <StudentCheckAnswer answers={answers} handleAnswerChange={handleAnswerChange}  index={index} options={options} /> : ""}

          {props.question.anstype == "mcq" ? (
            <StudentMCQAnswer index={index} handleAnswerChange={handleAnswerChange}  answers={answers} options={options} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentImageQuestion;
