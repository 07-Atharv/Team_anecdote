import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import StudentQuestion from "../../Components/StudentQuestion/StudentQuestion";
import WebcamProctor from "../../Components/WebcamProctor/WebcamProctor";
import { FACE_START } from "../../constants";
import Webcam from "react-webcam";

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

const StudentTest = () => {
  const { state } = useLocation();
  const [index, setIndex] = React.useState(0);
  const [match,setMatch] = useState("")
  // const questions = dummyData[0].questions;
  const questions = state.questions;
  console.log( questions );



  const webcamRef = useRef(null);

  const checkTabVisibility = () => {
    if (document.hidden) {
      // User has changed or exited the current tab
      console.log('User changed or exited tab');
      alert('User changed or exited tab')
      // You can add your logic here, such as alerting the proctor
    } else if (!document.hasFocus()) {
      // Another software is opened
      console.log('Another software is opened');
      alert("Another software is opened")
      // You can add your logic here, such as alerting the proctor
    }
    else if (!window.screenTop && !window.screenY ) {
      // User has switched to fullscreen mode
      console.log('User is not fullscreen mode');
     alert('User is not fullscreen mode');
      
      // You can add your logic here, such as alerting the proctor
    }
    else {
      console.log('User is active on the exam tab');
      // alert('User is active on the exam tab');
    }
  };




  const captureAndSendImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    
    // Convert image to base64
    const base64Image = await fetch(imageSrc)
      .then((res) => res.blob())
      .then(
        (blob) =>
          new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          })
      );

    // Send base64 image to Flask backend
    let res = await fetch("http://127.0.0.1:5000/upload_image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ current: base64Image, examinee: localStorage.getItem(FACE_START) }),
    });

    res = await res.json()
    console.log(res)
    setMatch(res.message)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureAndSendImage();
      setTimeout(() => {
          checkTabVisibility();
      }, 1000); 
  }, 2000);// Send image every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);




  return (
    <>
      <div className="flex flex-row">
      <Webcam audio={false} ref={webcamRef} />
        <div className="z-100 main-container w-[95%] mx-auto">
          <div className="font-bold text-3xl p-12">
            {" "}
            Test Id: {state.test_id}
            <br/>
            {match}
          </div>

          <div className="question-hold-container rounded-xl border border-slate-300 w-[70%] mx-auto">
            <StudentQuestion
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
            { index == questions.length-1 ? <button
              type="button"
              onClick={() => {
                if (index + 1 == questions.length) {
                } else {
                  setIndex(index + 1);
                  console.log(index);
                }
              }}
              class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button> : <button
              type="button"
              onClick={() => {
                if (index + 1 == questions.length) {
                } else {
                  setIndex(index + 1);
                  console.log(index);
                }
              }}
              class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
              Next
            </button> } 
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTest;
