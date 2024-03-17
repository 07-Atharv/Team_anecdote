import examSvg from "../../assets/Exams-bro.svg"
import scoreCraftLogo from "../../assets/scorecraftlogo.png"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { BASEURL, GOOGLE_API_BASE, LOGGED_IN, TOKEN, USERDATA } from "../../constants";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
const navigate = useNavigate()



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
            // console.log(res.data)
            localStorage.setItem( TOKEN, res.token );
            localStorage.setItem( LOGGED_IN, true );
            localStorage.setItem(USERDATA,JSON.stringify(res.data))

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
              <h1 className="text-3xl mb-2 font-bold">Welcome Back!!</h1>
              <span className="">Where excellence meets assessment</span>
            </div>

            <div className="my-20 flex justify-center">

              {/* <GoogleLogin className="w-full"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                const decoded = jwtDecode(credentialResponse.credential);

                console.log(decoded);

                const userDetails = {};
                userDetails["name"] = decoded.name;
                userDetails["profileurl"] = decoded.picture;
                userDetails["email"] = decoded.email;
                userDetails["clientid"] = credentialResponse.clientId;
                userDetails["verified"] = true;


              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
              <button type="button" className="w-5/6 text-white text-xl rounded-xl p-2 " onClick={()=>{handleLogin()}} style={{ backgroundColor: "#4285f4" }} >
                <i className='text-xl mr-3 bx bxl-google'></i> Sign in with Google
              </button>
            
            </div>
          </div>
          <div className="mt-40 ">
          &copy; ScoreCraft
        </div>
        </div>
       

      </div>
      <div className="w-1/2 " style={{ backgroundColor: "#407BFF" }} >
        <img src={examSvg} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
