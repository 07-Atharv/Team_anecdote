"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { TOKEN, LOGGED_IN, BASEURL } from "../../constants";
import LoggedNav from "../../Components/LoggedNAv/LoggedNav";

const TeacherHome = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);

  const fetchData = async () => {
    let res = await fetch(BASEURL + "/api/exam/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem(TOKEN),
      },
    });

    res = await res.json();
    setExams(res.exams);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log( "Exam object ") ;
  // console.log( exams[0] );

  return (
    <>
      <LoggedNav show={true}/>
      <div className="main-container w-full flex flex-col mt-[4%] ml-[4%]">
        <div className="w-5/6 mx-auto">
          <h1 className="font-bold text-4xl mb-8">Your Exams</h1>

          <div className="flex mt-5 flex-wrap flex-row gap-8">
            <div
              onClick={() => {
                navigate("/examPage");
              }}
              className="exam-container border-slate-200 border shadow-md rounded-xl w-[20vw] aspect-[4/3] flex flex-row flex-wrap hover:scale-105 transition duration-500 flex items-center justify-center">
              <div className="flex flex-col justify-center text-center">
                <i className="bx text-8xl text-gray-600 bx-plus"></i>
                <h1 className="text-3xl pb-5 text-center text-gray-600">
                  New Exam
                </h1>
              </div>
            </div>
            {exams && exams.map((exam) => {
              return (
                <div className="exam-container border border-slate-200 shadow-md rounded-xl h-[300px] w-[400px] flex flex-row flex-wrap hover:scale-105 transition duration-500 flex flex-col">
                  <div
                    onClick={() => {
                      navigate("/examPage", { state: { examid: exam._id } });
                    }}
                    className="thumbnail-container cursor-pointer m-1 p-4 border border-slate-100 rounded-md grow">
                    <p className="font-bold text-2xl"> {exam.title} </p>
                    <p>{exam.description}</p>
                  </div>
                  <div className="name-container p-4 flex flex-row">
                    <p className="grow"></p>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <i class="bx bx-dots-horizontal-rounded text-2xl mr-4 cursor-pointer"></i>
                      )}>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default TeacherHome;
