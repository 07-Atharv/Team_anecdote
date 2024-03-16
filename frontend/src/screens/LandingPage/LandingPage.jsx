import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import landingImage from "../../assets/land1.png";
import ai from "../../assets/ai.svg";
import authentication from "../../assets/authentication.svg";
import check from "../../assets/check.svg";
import instant from "../../assets/instant.svg";
import secure from "../../assets/secure.svg";
import UI from "../../assets/UI.svg";


const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col w-64 h-48">
        <Navbar />
      </div>

      <div className=" flex justify-center  w-5/6 mx-auto  ">
        <div className="w-1/2 ">
          <div>
            <h1 className="text-6xl my-10 font-serif">ScoreCraft</h1>
          </div>
          <div>
            <h3 className="text-2xl my-10 font-sans mt-4">
              Unlock Your Academic Potential with ScoreCraft : Where Excellence
              Meets Assessment!!!
            </h3>
          </div>
          <div>
            <h1 className=" mt-20">
              Explore MCQ’s , delve into textual wonders, decode visual puzzles
              ,<br></br>
              and unleash code mastery. Experience diverse question formats for
              <br></br>
              comprehensive assessments. Embrace innovation in learning.
              <br></br> Your journey to academic excellence starts here.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-start  items-center">
          <img src={landingImage} alt="Langing illustration"></img>
        </div>

      </div>
      <h1 className="text-4xl font-semibold	text-center mt-60">
        What’s New Here ?
      </h1>
      <div class="w-5/6 my-10 mx-auto grid grid-cols-3 gap-4">
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={check} className="w-1/3" alt=""></img>
          </div>

          <p className="text-lg font-bold">Multiple Questions Format</p>
          <p className="text-sm mt-2">
            Platform provides varied question <br />
            types for customized assessment
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={ai} className="w-1/3" alt=""></img>
          </div>

          <p className="text-lg font-bold">AI Proctoring</p>
          <p className="text-sm mt-2">
            AI monitors behavior, <br />
            flags cheating in real time{" "}
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={instant} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Instant Results</p>
          <p className="text-sm mt-2">
            Instant feedback streamlines assessment, <br /> leads performance
            evaluation
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={secure} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Secure Exams</p>
          <p className="text-sm mt-2">
            Secure exam access <br />
            with personalized links{" "}
          </p>
        </div>

        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={UI} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">User Friendly Interface</p>
          <p className="text-sm mt-2">
            Exam friendly dashboards simplify <br />
            exam management for institutions
          </p>
        </div>

        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl ">
          <div className="w-full flex justify-center">
            <img src={authentication} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Google Authentication</p>
          <p className="text-sm mt-2">
            Access via Google authentication <br />
            for secure login
          </p>
        </div>

      </div>
    </>
  );
};

export default LandingPage;
