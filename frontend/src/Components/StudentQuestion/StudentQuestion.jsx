import React from "react";
import StudentTextQuestion from "../StudentTextQuestion/StudentTextQuestion";
import StudentImageQuestion from "../StudentImageQuestion";
import StudentCodeQuestion from "../StudentCodeQuestion/StudentCodeQuestion";

const StudentQuestion = (props) => {
  console.log(props.question)
  console.log(props.question.qtype);
  const {handleAnswerChange,answers } = props


  if (props.question.qtype === "text") {
    return (
      <StudentTextQuestion handleAnswerChange={handleAnswerChange} answers={answers} question={props.question} index={props.index} />
    );
  } else if (props.question.qtype == "code") {
    return (
      <StudentCodeQuestion handleAnswerChange={handleAnswerChange} answers={answers} question={props.question} index={props.index} />
    );
  } else if (props.question.qtype == "image") {
    return (
      <StudentImageQuestion  handleAnswerChange={handleAnswerChange} answers={answers} question={props.question} index={props.index} />
    );
  }
};

export default StudentQuestion;
