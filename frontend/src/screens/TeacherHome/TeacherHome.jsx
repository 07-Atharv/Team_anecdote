"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Dropdown } from "flowbite-react";
import { TOKEN, LOGGED_IN, BASEURL } from "../../constants";

import LoggedNav from "../../Components/LoggedNAv/LoggedNav";


const TeacherHome = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([])

  const fetchData = async () => {
    let res = await fetch(BASEURL + "/api/exam/getall", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem(TOKEN)
      }
    })

    res = await res.json()
    setExams(res.exams)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <LoggedNav />
      <div className="main-container w-full flex flex-col mt-[4%] ml-[4%]">

        <div className="w-5/6 mx-auto">
          <h1 className="font-bold text-3xl ">Your Exams</h1>

          <div className="flex mt-5 flex-wrap flex-row gap-8">
            <div onClick={() => { navigate('/examPage') }} className="exam-container border-slate-400 border shadow-md rounded-xl h-[150px] w-[400px] flex flex-row flex-wrap hover:scale-105 transition duration-500 flex items-center justify-center">
              <div className="flex flex-col justify-center text-center">

                <i className='bx text-4xl text-gray-400  bx-plus-medical'></i>
                <h1 className="text-3xl text-center text-gray-400 font-bold">New Exam</h1>
              </div>

            </div>
            {exams.map((exam) => {
              return (
                <div className="exam-container border-slate-400 border shadow-md rounded-xl h-[150px] w-[400px] flex flex-row flex-wrap hover:scale-105 transition duration-500 flex flex-col">

                  <div className="p-5">
                    <h1 className="text-2xl font-bold" >{exam.title}</h1>
                    <p>{exam.description}</p>
                  </div>

                  <div className="w-full justify-around flex">
                    <button onClick={() => {
                      navigate("/examPage", { state: { examid: exam._id } });
                    }} className="w-1/3 bg-green-600 text-white rounded-xl p-1">View</button>
                    <button className="w-1/3 bg-red-600 text-white rounded-xl p-1">Delete</button>
                  </div>
                  <div
                    className="thumbnail-container grow cursor-pointer"
                  ></div>

                </div>
              );
            })}
          </div>
        </div>    </div>
    </>
  );
};

export default TeacherHome;
