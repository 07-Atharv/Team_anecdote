import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { LOGGED_IN } from "../../constants";
import logo from "../../assets/logo_black.png";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem( LOGGED_IN ); 
  
  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-20 w-20" alt="Flowbite Logo"></img>
            <span className="self-center text-3xl font-bold  whitespace-nowrap ">
              ScoreCraft
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                navigate("/TeacherHome");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={
                  // checking if the user is loggedin or not

                  () => navigate("/signup")
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-6">
                Sign Up
              </button>
            ) : (
              <div className=""></div>
            )}

            {!isLoggedIn ? 
            <button
              type="button"
              onClick={() => navigate("/signin")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ml-2">
              Sign In
            </button> : <div className=""></div> }

            { isLoggedIn ? 
            <button
              type="button"
              onClick={() => navigate("/TeacherHome")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ml-2">
              Go To Dashboard
            </button> : <div className=""></div> }


            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
