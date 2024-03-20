import React from "react";
import MCQOption from "../MCQOption";

const StudentMCQAnswer = (props) => {
  const options = props.options;
  const {index,answers} = props
  const {handleAnswerChange} = props
  console.log(options);

  return (
    <div>
      {options.map((option) => {
        return <MCQOption index={index} handleAnswerChange={handleAnswerChange} answers={answers} student={true}  option={option}></MCQOption>;
      })}
    </div>
  );
};

export default StudentMCQAnswer;
