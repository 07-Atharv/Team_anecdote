import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";


const LandingPage = () => {  
  const navigate = useNavigate();

  return ( 
    <>
      <h1 className="font-bold text-3xl"> This will be landing page </h1>

      <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        navigate("/TeacherHome");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
    </>
  );
};

export default LandingPage;
