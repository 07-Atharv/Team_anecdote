import React from "react";
import TextQuestion from "../../Components/textQuestion/textQuestion";

// const questions = [
//   {
//     // text question
//     id: "123",
//     question: "What is our Nearest Star called",
//     type: "text",
//     answer: "The Sun",
//   },
//   {
//     // MCQ question
//     id: "124",
//     question: "What is Computer Engineering",
//     type: "MCQ",
//     options: [
//       "Just an option",
//       "An overrated Course",
//       "Management Qouta se Admission",
//       "Main nahi bataunga",
//     ],
//     answer: "Main nahi bataunga",
//   },
//   {
//     // image Question with text answer
//     id: "125",
//     type: "image",
//     imageURL:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fdewwool.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fdirection-of-centrifugal-force-1.jpg%3Fw%3D1195%26ssl%3D1&f=1&nofb=1&ipt=07ece85c4f1a5ad2e2d13fb5186fb39f23dfc8f07757320af7564973f580f5e4&ipo=images",
//     relatedText: "Which scitific phenomenon does above image depicts",
//     answer: "",
//   },
//   {
//     // Code Question with text answer
//     id: "125",
//     type: "code",
//     text: "complete the below code",
//     code: `
//         class Animal:
//             def __init__(self, name, age):
//                 self.name = name
//                 self.age = age
            
//             def sound(self):
//                 pass
        
//         class Dog:  # Incomplete line
//             def __init__(self, name, age, breed):
//                 super().__init__(name, age)
//                 self.breed = breed
            
//             def sound(self):
//                 # Add code here
//                 pass
        
//         # Incomplete code
//         `,
//     fileurl: "",
//   },
// ];

const ExamPage = () => {
  const [name, setName] = React.useState("Exam-0");
  const [nameState, setNameState] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  return (
    <>
      <div className="main-container flex flex-row w-[100vw]] h-[100vh]">
        <div className="flex flex-col sidebar w-[20%] shadow-md p-8">
          <h1 className="font-bold text-2xl mb-4"> Questions </h1>

          <p className="mb-4">
            select from one of the below question components to add to you exam
          </p>

          <button className="font-bold py-4 rounded-xl shadow-md my-2">
            {" "}
            Multiple Choice Question{" "}
          </button>
          <button
            className="font-bold py-4 rounded-xl shadow-md my-2"
            onClick={() => {
              setQuestions([
                ...questions, 
                {
                    // text question
                    id: "123",
                    question: "Enter Your Question Here",
                    type: "text",
                    answer: "",
                  }
              ]);
            }}>
            {" "}
            Text Question{" "}
          </button>
          <button className="font-bold py-4 rounded-xl shadow-md my-2">
            {" "}
            Code Question 🧑🏻‍💻
          </button>
          <button className="font-bold py-4 rounded-xl shadow-md my-2">
            {" "}
            Image Based Question 🖼️{" "}
          </button>
        </div>
        <div className="exam-container p-8 grow">
          <div className="name-container">
            {nameState === true ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameState(false)}
              />
            ) : (
              <p
                className="font-bold text-3xl"
                onClick={() => setNameState(true)}>
                {name}
              </p>
            )}
          </div>

          <div className="questions-container w-[100%] mt-12">
            {questions.map((question, ind) => {
                console.log( question );
              if (question.type == "text") {
                return (
                  <>
                    <TextQuestion props={question} index={ind+1}></TextQuestion>
                  </>
                );
              } else if (question.type == "image") {
              } else if (question.type == "code") {
              } else if (question.type == "MCQ") {
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamPage;
