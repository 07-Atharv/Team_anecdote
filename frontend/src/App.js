
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";
const App = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default App;
