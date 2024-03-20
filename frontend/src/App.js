import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import TeacherHome from "./screens/TeacherHome";
import ExamPage from "./screens/ExamPage/ExamPage";
import GetDetailsPage from "./screens/GetDetailsPage";
import WebcamProctor from "./Components/WebcamProctor/WebcamProctor";
import StudentTest from "./screens/StudentTest";
import TakePicture from "./screens/takePicture";
import TakeTest from "./Components/takeTest/TakeTest";
import StudentInterface from "./screens/StudentInterface/StudentInterface";
import StudentSummary from "./screens/StudentSummary/StudentSummary";

const App = () => {
  return (
    <>
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/TeacherHome" element={<TeacherHome />} />
            <Route path="/getDetails" element={<GetDetailsPage />} />
            <Route path="/takeTest" element={<TakePicture />} />
            <Route path="/studentTest" element={<StudentTest />} />
            <Route path="/examPage" element={<ExamPage />} />
            <Route path="/testId" element={<TakeTest />} />
            <Route path="/webcamProctor" element={<TakePicture />} />
            <Route path="/studentres" element={<StudentSummary />} />
            <Route path="/studentint" element={<StudentInterface />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
