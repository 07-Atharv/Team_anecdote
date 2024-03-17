import React from "react";
import MCQOption from "../MCQOption";

const StudentMCQAnswer = (props) => {
  const options = props.options;
  console.log(options);

  return (
    <div>
      {options.map((option) => {
        return <MCQOption student={true} option={option}></MCQOption>;
      })}
    </div>
  );
};

export default StudentMCQAnswer;
