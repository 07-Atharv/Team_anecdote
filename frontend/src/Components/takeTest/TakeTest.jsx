import React, { useState } from "react";
import logo from "../../assets/logo_black.png";
import { useNavigate } from "react-router-dom";
import { BASEURL, TOKEN } from "../../constants";
import Navbar from "../NavBar/Navbar";

const TakeTest = () => {
  
  const [data, setData] = useState({ examId: "", studentName: "", studentEmail: "" });

const handleOnChange =async  (e) => {
    const { name, value } = e.target;
    await setData({ ...data, [name]: value });
    console.log(data);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let res = await fetch(BASEURL + "/api/exam/getone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem(TOKEN),
    },
    body: JSON.stringify({
      id: data.examId,
    }),
  });

  res = await res.json();
  console.log( res );

  console.log( res.exam );

  navigate("/studentTest", { state: { data: data, questions: res.exam.questions } });
}
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
     
      <form onSubmit={handleSubmit} className="flex mt-10 flex-col main-container w-[100vw] h-[93vh] items-center justify-center">
     
        <div className="flex shadow-2xl flex-col items-center content.-container p-8 w-1/2  rounded-xl shadowmd border  border-slate-400">
          <h1 className="font-bold text-3xl">Enter your Unique Test Code</h1>

           

           <input required="required"
            type="text" name="studentName" value={data.studentName}
            onChange={handleOnChange} placeholder="Student Name"
            className="w-5/6 mt-8 rounded-md border border-slate-300"
          /> <input required={true}
            type="email" name="studentEmail" value={data.studentEmail}
            onChange={handleOnChange} placeholder="Student Email"
            className="w-5/6 mt-8 rounded-md border border-slate-300"
          />
          <input required={true}
            type="text" name="examId" value={data.examId}
            onChange={handleOnChange} placeholder="Exam ID"
            className="w-5/6 mt-8 rounded-md border border-slate-300"
          />
          <button type="submit"
            className="text-white bg-green-700 font-bold px-16 py-4 mt-8 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Start Test
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default TakeTest;
