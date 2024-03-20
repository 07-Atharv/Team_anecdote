import React from "react";
import logo from "../../assets/image-r.png";
import { Button } from "flowbite-react";
import DateTime from "./currdatetime";
import instructorImage from "../../assets/instruction.png";

const Details = () => {
  return (
    <div className="w-[90%] mx-auto border border-slate-300 p-8 mt-2">
      <div className="justify flex flex-row mt-4">
        <img src={logo} className="w-20 h-20"></img>
        <p className="text-xl mt-10 font-bold">ScoreCraft</p>
        <h1 className="ml-[60%] font-bold">Your Test Starts In</h1>
        <DateTime></DateTime>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <div
        className="fixed top-1/2 right-0 transform -translate-y-1/2"
        style={{ marginRight: "calc(100% / 8)" }}
      >
        <img src={instructorImage} alt="Instructor" className="w-96 h-auto" />
      </div>
      {/* Adjust positioning and size of the image */}
      <h1 className="text-2xl font-bold ">
        Data Structures and Algorithms Test
      </h1>
      <br></br>
      <h1 className="text-xg font-serif">
        Please Read the following instructions Carefully!!!!
      </h1>
      <br></br>
      <h1 className="text-xg">
        1) AI proctoring will be active throughout the test duration to monitor your activity.
      </h1>
      <br></br>
      <h1 className="text-xg">
        2) Switching tabs or accessing unauthorized resources during the test is strictly prohibited.
      </h1>
      <br></br>
      <h1 className="text-xg">
        3) Ensure a stable internet connection throughout the test to avoid interruptions.
      </h1>
      <br></br>
      <h1 className="text-xg">
        4) All questions must be answered within the allocated time. The test will auto-submit if not completed within the specified time limit.
      </h1>
      <br></br>
      <h1 className="text-xg">
        5) Read each question carefully before providing your response to ensure accuracy.
      </h1>
      <br></br>
      <h1 className="text-xg">
        6) Do not communicate with anyone during the test, including through messaging or voice calls.
      </h1>
      <br></br>
      <h1 className="text-xg">
        7) Contact the exam proctor immediately if you encounter any technical issues or require assistance during the test.
      </h1>
      <br></br>
      <br></br>
      {/* Add more instructions here */}
      <br />
      
      <div className="flex flex-row">
        <h1 className="font-bold">Name : </h1>
        <h1> DSA Test 1</h1>
      </div>
      <br></br>
      <div className="flex flex-row">
        <h1 className="font-bold">Marks : </h1>
        <h1> 100</h1>
      </div>
      <br></br>
      <label>
        <input type="checkbox" className="mr-4" />I have read the instructions
        carefully
      </label>
      <div className="flex flex-row ml-[80%] mb-2">
        <h1 className="font-bold">Total Questions : </h1>
        <h1> 40</h1>
      </div>
      <div className="flex flex-row ml-[80%] mb-2">
        <h1 className="font-bold">Total Duration : </h1>
        <h1> 2 Hours</h1>
      </div>
      <div>
        <Button variant="contained" className="font-bold">
          Start Test
        </Button>
      </div>
    </div>
  );
};

export default Details;
