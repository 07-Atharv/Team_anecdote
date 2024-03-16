import React from "react";
import StudentTextQuestion from "../StudentTextQuestion/StudentTextQuestion";

const StudentQuestion = (props) => {
  console.log(props.question.qtype);
 

  if (props.question.qtype === "text") {
    return <StudentTextQuestion question={props.question} index={props.index} />;
  } else if (props.question.qtype == "code") {
    return <StudentTextQuestion />;
  } else if (props.question.qtype == "image") {
    return <StudentTextQuestion />;
  }
};

export default StudentQuestion;
