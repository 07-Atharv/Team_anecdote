import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { BASEURL } from "../../constants";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold text-3xl"> This will be landing page </h1>

      <GoogleLogin
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
      />

      <GoogleLogin
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
      />
    </>
  );
};

export default LandingPage;
