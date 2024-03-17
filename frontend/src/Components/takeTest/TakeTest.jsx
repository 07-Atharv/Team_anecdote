import React from "react";
import logo from "../../assets/logo_black.png";
import { useNavigate } from "react-router-dom";
import { BASEURL, TOKEN } from "../../constants";

const TakeTest = () => {
  const [id, setId] = React.useState();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row items-center header border border-b-1 border-slate-200 h-[7vh] p-2">
        <img
          src={logo}
          className="w-12 aspect-square ml-4"
          alt="Flowbite Logo"></img>
        <p className="font-bold text-2xl ml-4">ScoreCraft</p>
      </div>
      <div className="flex flex-col main-container w-[100vw] h-[93vh] items-center justify-center">
        <div className="flex flex-col items-center content.-container p-8 w-[40%] h-[30%] rounded-xl shadowmd border border-slate-200">
          <h1 className="font-bold text-3xl">Enter your Unique Test Code</h1>

          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            className="w-[60%] mt-8 rounded-md border border-slate-300"
          />
          <button
            type="button"
            onClick={async () => {
              let res = await fetch(BASEURL + "/api/exam/getone", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  token: localStorage.getItem(TOKEN),
                },
                body: JSON.stringify({
                  id: id,
                }),
              });

              res = await res.json();
              console.log( res );

              console.log( res.exam );

              navigate("/studentTest", { state: { test_id: id, questions: res.exam.questions } });
            }}
            class="text-white bg-blue-700 font-bold px-16 py-4 mt-8 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
