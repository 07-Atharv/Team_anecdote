import React from "react";
import Navbar from "../../components/Navbar";
import landingImage from "../../assets/land1.png";
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
    </>
  );
};

export default LandingPage;
