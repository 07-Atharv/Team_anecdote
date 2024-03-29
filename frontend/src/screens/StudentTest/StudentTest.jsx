"use client";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentQuestion from "../../Components/StudentQuestion/StudentQuestion";
import WebcamProctor from "../../Components/WebcamProctor/WebcamProctor";
import { BASEURL } from "../../constants";
import { Modal } from "flowbite-react";

const answerInstance = { questionId: "", anstype: "", answer: [] };
const StudentTest = () => {
  const { state } = useLocation();
  const [index, setIndex] = React.useState(0);
  const [match, setMatch] = useState("");
  // const questions = dummyData[0].questions;
  const questions = state.questions;

  const [studentName, setStudentName] = useState(state.data.studentName);
  const [studentEmail, setStudentEmail] = useState(state.data.studentEmail);
  const [examId, setExamId] = useState(state.data.examId);
  const [currentTime, setCurrentTime] = useState();
  const [tabAlert, setTabAlert] = useState(false);
  const [fullScreenAlert, setfullScreenAlert] = useState(false);
  const [windowAlert, setWindowAlert] = useState(false);
  const [warningsCount, setWarningsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(state.start_date);
      console.log(state.data);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentTime]);

  const init = Array.from({ length: questions.length }, () => ({
    questionId: answerInstance.questionId,
    anstype: answerInstance.anstype,
    answer: [...answerInstance.answer],
  }));
  const [answers, setAnswers] = useState(init);
  const [submitted, setSubmitted] = useState(false);
  console.log(answers);

  const handleAnswerChange = (index, value) => {
    console.log("Vaue REceive to answerChange :", value);
    const newAnswers = [...answers];
    if (questions[index].anstype === "text") {
      newAnswers[index].anstype = questions[index].anstype;
      newAnswers[index].questionId = questions[index]._id;
      newAnswers[index].answer[0] = value;
    } else if (questions[index].anstype === "mcq") {
      newAnswers[index].anstype = questions[index].anstype;
      newAnswers[index].questionId = questions[index]._id;
      newAnswers[index].answer[0] = value;
    } else if (questions[index].anstype === "check") {
      newAnswers[index].anstype = questions[index].anstype;
      newAnswers[index].questionId = questions[index]._id;
      newAnswers[index].answer = value;
    } else if (questions[index].anstype === "code") {
      newAnswers[index].anstype = questions[index].anstype;
      newAnswers[index].questionId = questions[index]._id;
      newAnswers[index].answer = value;
    }

    setAnswers(newAnswers);
    // console.log(newAnswers)
  };

  const navigate = useNavigate();
  const handleSubmission = async (e) => {
    if (e ) {
      e.preventDefault();
    }

    console.log("solution submitted");

    console.log({examId,studentName,studentEmail,answers})
    let res = await fetch(BASEURL + "/api/submission/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ examId, studentName, studentEmail, answers }),
    });

    res = await res.json();

    if (res.success === 1) {
      alert("Submission Successfull");
      navigate("/studentres", { state: { email: studentEmail } });
      return;
    }
    alert("Error in submission");
  };

  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  return (
    <>
      <Modal show={tabAlert} size="md" onClose={() => setTabAlert(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <i class="bx bx-info-circle text-6xl text-slate-700 my-4 "></i>
            <h3 className="mb-5 text-xl font-bold dark:text-gray-400">
              Test will terminate if you change Tabs or Windows
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 mx-10 px-10 mx-auto text-white rounded-xl  p-4"
                onClick={() => {
                  setTabAlert(false);
                  setWarningsCount(warningsCount + 1);
                  if (warningsCount > 4) {
                    handleSubmission(false);
                  }
                }}>
                I Understand
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={fullScreenAlert}
        size="md"
        onClose={() => setfullScreenAlert(false)}
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <i class="bx bx-info-circle text-6xl text-slate-700 my-4 "></i>
            <h3 className="mb-5 text-xl font-bold dark:text-gray-400">
              Test will terminate if you exit fullscreen mode
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 mx-10 px-10 mx-auto text-white rounded-xl  p-4"
                onClick={() => {
                  toggleFullScreen();
                  setWarningsCount(warningsCount + 1);
                  setfullScreenAlert(false);
                  console.log(warningsCount);
                  if (warningsCount > 4) {
                    handleSubmission(false);
                  }
                }}>
                I Understand
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="border shadow-xl">
        <div className="w-5/6 h-20  mx-auto"></div>

        <div className="flex flex-row">
          <div className="w-1/6 p-2">
            <WebcamProctor
              className=" absolute  bg-red"
              handleTabSwitch={() => {
                if (state.preview === false) {
                  setTabAlert(true);
                }
              }}
              handleFullScreen={() => {
                if (state.preview === false ) {
                  setfullScreenAlert(true);
                }
              }}
            />
            <div className="p-5 text-left">
              <h1 className="font-semibold">{studentName}</h1>
              <h1>{studentEmail}</h1>
              <span>{examId}</span>
            </div>
          </div>
          <form
            onSubmit={handleSubmission}
            className="z-100 main-container w-5/6  mx-auto">
            {currentTime}

            <div className="m-5 question-hold-container rounded-xl border border-slate-300 w-5/6 mx-auto">
              <StudentQuestion
                answers={answers}
                handleAnswerChange={handleAnswerChange}
                question={questions[parseInt(index)]}
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
              {index == questions.length - 1 ? (
                <button
                  type="submit"
                  disabled={index != questions.length - 1}
                  class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (index + 1 == questions.length) {
                    } else {
                      setIndex(index + 1);
                    }
                  }}
                  class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentTest;
