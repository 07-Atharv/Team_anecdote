import React from "react";
import StudentTextQuestion from "../StudentTextQuestion/StudentTextQuestion";
import StudentImageQuestion from "../StudentImageQuestion";
import StudentCodeQuestion from "../StudentCodeQuestion/StudentCodeQuestion";

const StudentQuestion = (props) => {
  console.log(props.question.qtype);

  if (props.question.qtype === "text") {
    return (
      <StudentTextQuestion question={props.question} index={props.index} />
    );
  } else if (props.question.qtype == "code") {
    return (
      <StudentCodeQuestion question={props.question} index={props.index} />
    );
  } else if (props.question.qtype == "image") {
    return (
      <StudentImageQuestion question={props.question} index={props.index} />
    );
  }
};

export default StudentQuestion;
