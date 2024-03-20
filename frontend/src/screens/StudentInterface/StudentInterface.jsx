import graduation from "../../assets/graduation.svg"
import scoreCraftLogo from "../../assets/scorecraftlogo.png"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { BASEURL, GOOGLE_API_BASE, LOGGED_IN, TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";

const StudentInterface = () => {
const navigate = useNavigate()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")


  const handleLogin = useGoogleLogin({
    // onSuccess : handleGoogleLogin()
    onSuccess : async tokenResponse => {
      console.log(tokenResponse);

      let tokenRes = await fetch (GOOGLE_API_BASE+tokenResponse['access_token'])
      tokenRes = await tokenRes.json()
      
      const userDetails = {};
      userDetails["email"] = tokenRes.email;

      console.log(userDetails);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(userDetails);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(BASEURL + "/api/teacher/signin", requestOptions)
        .then(async (response) => {
          const res = await response.json();
          console.log(res)
          if (response.status === 401) {
            alert(res.message);
          } else if (response.status == 500) {
            alert( res.message );
          } else if( response.status == 200 ) {
            // navigating to the next page
            localStorage.setItem( TOKEN, res.token );
            localStorage.setItem( LOGGED_IN, true );

            navigate("/TeacherHome");
          }
        })
        .catch((error) => {
          console.log("error");
          console.error(error);
        });
    },

    onError : () => {
      console.log("Login Failed");
    }
  })
  
  return (
    <div className="bg-gradient-to-r from-white to-blue-300 w-full flex justify-center items-center " style={
      {
        height: "100vh"
      }
    }>
      <div className="w-1/2  flex flex-col justify-between " >
        <div className=" w-3/4 mx-auto  ">
          <div className="flex items-center">
            <div>
              <img src={scoreCraftLogo} alt="" className="w-20"></img>

            </div>
            <div>
              <h1 className="text-4xl mx-2 my-20 font-bold">ScoreCraft</h1>
            </div>
          </div>

          <div className="border  bg-white shadow-2xl rounded-xl p-5">
            <div className="mt-10">
              <h1 className="text-3xl mb-2 font-bold">Want to see your results?</h1>
                </div>

            <div className="my-5 flex justify-center">

             <form className="w-5/6 mx-auto" >

              <input type="text" value={name} className="w-full border rounded-xl my-2 " onChange={(e)=>{setName(e.target.value)}} placeholder="Student Name"/>
              
              <input type="email" value={email} className="w-full border rounded-xl my-2 " onChange={(e)=>{setEmail(e.target.value)}} placeholder="Student Email"/>
              <button className="bg-blue-600 w-full my-5 mx-auto p-2 rounded-xl text-white text-center" onClick={(e)=>{navigate("/studentres",{state:{email:email}})}}>Verify Now</button>
             </form>
            
            </div>
          </div>
          <div className="mt-40 ">
          &copy; ScoreCraft
        </div>
        </div>
       

      </div>
      <div className="w-1/2 " style={{ backgroundColor: "#407BFF" }} >
        <img src={graduation} alt="" />
      </div>
    </div>
  );
};

export default StudentInterface;