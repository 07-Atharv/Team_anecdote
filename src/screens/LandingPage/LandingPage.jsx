import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {  
  const navigate = useNavigate();

  return ( 
    <>
    <button onClick={() => {navigate("/TeacherHome")}}> Sign in </button>
      <h1 className="font-bold text-3xl"> This will be landing page </h1>
    </>
  );
};

export default LandingPage;
