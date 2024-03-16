import MCQOption from "../MCQOption";
import React from "react";

const MCQAnswer = () => {
  const [questions, setQuestions] = React.useState([]);

  return (
    <div>
      {questions.map((question) => {
        return (
            <MCQOption question={question}></MCQOption>
        );
      })}

      <button
        className="flex flex-row items-center shadow-md rounded-xl py-4 px-8 mt-4"
        onClick={() => setQuestions([...questions, "Enter Your Question"])}>
        <i className="bx bx-plus text-xl"></i>
        <p className=" px-2 font-bold"> Add Option</p>
      </button>
    </div>
  );
};

export default MCQAnswer;
