import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import TeacherHome from "./screens/TeacherHome";
import TakeTest from "./components/takeTest/index";
import ExamPage from "./screens/ExamPage/ExamPage";
import GetDetailsPage from "./screens/GetDetailsPage";

import StudentTest from "./screens/StudentTest";

const App = () => {
  return (
    <>
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signup"  element={<SignUp/>} />
            <Route path="/signin"  element={<SignIn/>} />
            <Route path="/TeacherHome"  element={<TeacherHome/>} />
            <Route path="/getDetails"  element={<GetDetailsPage/>} />
            <Route path="/takeTest"  element={<TakeTest/>} />
            <Route path="/studentTest"  element={<StudentTest/>} />
            <Route path="/examPage" exact element={<ExamPage/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
