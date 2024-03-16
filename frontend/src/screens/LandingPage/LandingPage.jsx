import React from "react";
import Navbar from "../../components/Navbar";
import landingImage from "../../assets/land1.png";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { BASEURL } from "../../constants";

const LandingPage = () => {
  const navigate = useNavigate();

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
      {/* <GoogleLogin
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

          navigate("/getDetails", { state: { details: userDetails } });
        }}
        onError={() => {  
          console.log("Login Failed");
        }}
      /> */}

      {/* <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);
          const decoded = jwtDecode(credentialResponse.credential);

          console.log(decoded);

          const userDetails = {};
          userDetails["email"] = decoded.email;

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
              if (response.status === 401) {
                alert(res.message);
              } else if (response.status == 500) {
                alert( res.message );
              } else if( response.status == 200 ) {
                // navigating to the next page
                navigate("/TeacherHome");
              }
            })
            .catch((error) => {
              console.log("error");
              console.error(error);
            });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
    </>
  );
};

export default LandingPage;
