import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";


const LandingPage = () => {  
  const navigate = useNavigate();

  return ( 
    <>
      <Navbar/>

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
