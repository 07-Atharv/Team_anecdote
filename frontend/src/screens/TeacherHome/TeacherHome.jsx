"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const exams = [
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
  {
    name: "Exam1",
    teacher_id: "1234",
    students: [
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
      {
        name: "Pranav Kale",
        email: "pranav.kale22@pccoepune.org",
        hash: "abcd",
      },
    ],
    questions: [
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
      {
        type: "mcq",
        question: "What is the powerhouse of the cell called",
        answer: "mitochondria",
      },
    ],
  },
];

const TeacherHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container flex flex-col mt-[4%] ml-[4%]">
        <h1 className="font-bold text-[2.5vw]">
          {" "}
          Welcome, {"<Teacher Name>"}{" "}
        </h1>

        <h1 className="font-bold text-[1.5vw] mt-[5%] py-4">Your Exams</h1>

        <div className="flex flex-wrap flex-row gap-8">
          {exams.map((exam) => {
            return (
              <div className="exam-container border-slate-400 shadow-md rounded-xl h-[300px] w-[400px] flex flex-row flex-wrap hover:scale-105 transition duration-500 flex flex-col">
                <div
                  className="thumbnail-container grow cursor-pointer"
                  onClick={() => {
                    navigate("/examPage", { state: { examid: "abcd" } });
                  }}></div>
                <div className="name-container p-4 flex flex-row">
                  <p className="grow font-bold"> {exam.name} </p>

                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <i class="bx bx-dots-horizontal-rounded cursor-pointer"></i>
                    )}>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeacherHome;
