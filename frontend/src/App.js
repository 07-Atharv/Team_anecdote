import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import TeacherHome from "./screens/TeacherHome";

import ExamPage from "./screens/ExamPage/ExamPage";
import GetDetailsPage from "./screens/GetDetailsPage";

const App = () => {
  return (
    <>
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Routes>

            <Route path="/" exact element={<LandingPage/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/TeacherHome" exact element={<TeacherHome/>} />
            <Route path="/getDetails" exact element={<GetDetailsPage/>} />
            <Route path="/examPage" exact element={<ExamPage/>} />

          </Routes>
        </Router>
      </div>
    </>

    /*
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

    */
  );
};

export default App;
