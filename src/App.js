import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";


const App = () => {
  return (
    <>
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Routes>
            <Route path="/" exact element={<LandingPage/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
