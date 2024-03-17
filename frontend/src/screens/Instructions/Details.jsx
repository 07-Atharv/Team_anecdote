import React from "react";
import logo from "../../assets/image-r.png";
import { Button } from "flowbite-react";
import DateTime from "./currdatetime";
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
      <h1 className="text-2xl font-bold ">
        Data Structures and Algorithms Test
      </h1>
      <br></br>
      <h1 className="text-xg font-serif">
        Please Read the following instructions Carefully!!!!
      </h1>
      <br></br>
      <h1 className="text-xg">
        1) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        2) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        3) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        4) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        5) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        6) You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <h1 className="text-xg">
        7 You will get an optional 1 Minute Break at the end of each Module
      </h1>
      <br></br>
      <br></br>
      {/* <br></br> */}
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
        <Button variant="contained">Start Test</Button>
      </div>
    </div>
  );
};

export default Details;
