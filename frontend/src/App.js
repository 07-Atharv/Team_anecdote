import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import TeacherHome from "./screens/TeacherHome";
import ExamPage from "./screens/ExamPage/ExamPage";
import GetDetailsPage from "./screens/GetDetailsPage";
import Details from "./screens/Instructions/Details";
import StudentInterface from "./screens/StudentInterface";
import StudentSummary from "./screens/StudentSummary";

// import student_interface from "./student_interface";
const App = () => {
  return (
    <>
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Routes>
            <Route path="/instr" element={<ins />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/TeacherHome" element={<TeacherHome />} />
            <Route path="/getDetails" element={<GetDetailsPage />} />
            <Route path="/instructors" element={<Details />} />
            <Route path="/studentint" element={<StudentInterface/>}/>
            <Route path="/studentresult" element={<StudentSummary/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
