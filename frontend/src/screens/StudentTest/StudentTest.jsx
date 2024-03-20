import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentQuestion from "../../Components/StudentQuestion/StudentQuestion";
import WebcamProctor from "../../Components/WebcamProctor/WebcamProctor";
import Navbar from "../../Components/NavBar/Navbar";
import { BASEURL } from "../../constants";

const dummyData = [
  {
    title: "Sample Exam",
    description: "This is a sample exam",
    creator: "Creator ID",
    questions: [
      {
        qtype: "text",
        qtext: "What is 2 + 2?",
        anstype: "text",
        options: [{ otype: "text", text: "4", isCorrect: true }],
      },
      {
        qtype: "image",
        qtext: "Identify the following image:",
        qimg: "https://res.cloudinary.com/dvg8flzpt/image/upload/v1710654034/egaky2brhwgk1l4zaoo3.jpg",
        anstype: "text",
        options: [],
      },
      {
        qtype: "text",
        qtext: "Who is the president of the USA?",
        anstype: "mcq",
        options: [
          { otype: "text", text: "Donald Trump", isCorrect: false },
          { otype: "text", text: "Joe Biden", isCorrect: true },
        ],
      },
      {
        qtype: "code",
        qtext: "Write a function to add two numbers.",
        qcode: "function add(a, b) { return a + b; }",
        anstype: "code",
        options: [{ otype: "text", text: "a + b", isCorrect: true }],
      },
      {
        qtype: "text",
        qtext: "What is the capital of France?",
        anstype: "mcq",
        options: [
          { otype: "text", text: "London", isCorrect: false },
          { otype: "text", text: "Paris", isCorrect: true },
        ],
      },
      {
        qtype: "image",
        qtext: "Identify the following image:",
        qimg: "https://res.cloudinary.com/dvg8flzpt/image/upload/v1710654034/egaky2brhwgk1l4zaoo3.jpg",
        anstype: "check",
        options: [
          { otype: "text", text: "Option 1", isCorrect: true },
          { otype: "text", text: "Option 2", isCorrect: false },
          { otype: "text", text: "Option 3", isCorrect: true },
        ],
      },
      {
        qtype: "code",
        qtext: "What is the output of this code?",
        qcode: "console.log('Hello, World!');",
        anstype: "text",
        options: [{ otype: "text", text: "Hello, World!", isCorrect: true }],
      },
      {
        qtype: "image",
        qtext: "Identify the following image:",
        qimg: "https://res.cloudinary.com/dvg8flzpt/image/upload/v1710654034/egaky2brhwgk1l4zaoo3.jpg",
        anstype: "code",
        options: [],
      },
      {
        qtype: "code",
        qtext: "Write a function to multiply two numbers.",
        qcode: "function multiply(a, b) { return a * b; }",
        anstype: "code",
        options: [{ otype: "text", text: "a * b", isCorrect: true }],
      },
      {
        qtype: "image",
        qtext: "Identify the following image:",
        qimg: "https://res.cloudinary.com/dvg8flzpt/image/upload/v1710654034/egaky2brhwgk1l4zaoo3.jpg",
        anstype: "check",
        options: [
          { otype: "text", text: "Option 1", isCorrect: true },
          { otype: "text", text: "Option 2", isCorrect: false },
          { otype: "text", text: "Option 3", isCorrect: true },
        ],
      },
      {
        qtype: "text",
        qtext: "What is the capital of Germany?",
        anstype: "mcq",
        options: [
          { otype: "text", text: "Berlin", isCorrect: true },
          { otype: "text", text: "Munich", isCorrect: false },
          { otype: "text", text: "Hamburg", isCorrect: false },
        ],
      },
      {
        qtype: "code",
        qtext:
          "What is the output of the following code?\nint x = 5;\nint y = 3;\nint z = x + y;\nSystem.out.println(z);",
        qcode: "8",
        anstype: "text",
        options: [{ otype: "text", text: "8", isCorrect: true }],
      },
    ],
  },
];


const answerInstance = { questionId: "", anstype: "", answer: [] }
const StudentTest = () => {
  const { state } = useLocation();
  const [index, setIndex] = React.useState(0);
  // const questions = dummyData[0].questions;
  const questions = state.questions;

  const [studentName, setStudentName] = useState(state.data.studentName);
  const [studentEmail, setStudentEmail] = useState(state.data.studentEmail);
  const [examId, setExamId] = useState(state.data.examId);

  const init = Array.from({ length: questions.length }, () => ({
    questionId: answerInstance.questionId,
    anstype: answerInstance.anstype,
    answer: [...answerInstance.answer],
  }));
  const [answers, setAnswers] = useState(init);
  const [submitted, setSubmitted] = useState(false);
  console.log(answers)

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers]
    if (questions[index].anstype === 'text') {
      newAnswers[index].anstype = questions[index].anstype
      newAnswers[index].questionId = questions[index]._id
      newAnswers[index].answer[0] = value;
    } else if (questions[index].anstype === 'mcq') {
      newAnswers[index].anstype = questions[index].anstype
      newAnswers[index].questionId = questions[index]._id
      newAnswers[index].answer[0] = value;
    } else if (questions[index].anstype === 'check') {
      newAnswers[index].anstype = questions[index].anstype
      newAnswers[index].questionId = questions[index]._id
      newAnswers[index].answer = value;
    }

    setAnswers(newAnswers)
    // console.log(newAnswers)
  }

  const navigate = useNavigate()
  const handleSubmission = async (e) => {
    e.preventDefault();

    // console.log({examId,studentName,studentEmail,answers})
    let res = await fetch(BASEURL + "/api/submission/submit", {
      method: "POST", headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({ examId, studentName, studentEmail, answers })
    })

    res = await res.json()

    console.log(res);

    if (res.success === 1) {
      alert("Submission Successfull")
      navigate("/")
      return;
    }
    alert("Error in submission")

  }
  return (
    <>
      <div className="border shadow-xl">
        <div className="w-5/6 h-20  mx-auto">

        </div>

        <div className="flex flex-row">
          <div className="w-1/6 p-2">
            <WebcamProctor className=" absolute  bg-red" />
            <div className="p-5 text-left">
              <h1 className="font-semibold">{studentName}</h1>
              <h1>{studentEmail}</h1>
              <span>{examId}</span>
            </div>
          </div>
          <form  onSubmit={handleSubmission} className="z-100 main-container w-5/6  mx-auto">

            <div className="m-5 question-hold-container rounded-xl border border-slate-300 w-5/6 mx-auto">
              <StudentQuestion answers={answers}
                handleAnswerChange={handleAnswerChange} question={questions[parseInt(index)]}
                index={index}
              />
            </div>

            <div className="w-[70%] mx-auto flex flex-row justify-between items-end my-8 next-buttton-container">
              {index == 0 ? (
                <div className=""></div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (index > 0) {
                      setIndex(index - 1);
                      console.log(index);
                    }
                  }}
                  class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
                  Previous
                </button>
              )}
              {index == questions.length - 1 ? <button
                type="button" disabled={index != questions.length - 1}
                class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
                Submit
              </button> : <button
                type="button"
                onClick={() => {
                  if (index + 1 == questions.length) {
                  } else {
                    setIndex(index + 1);
                  }
                }}
                class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
                Next
              </button>}
            </div>
          </form>
        </div>

      </div>

    </>
  );
};

export default StudentTest;
