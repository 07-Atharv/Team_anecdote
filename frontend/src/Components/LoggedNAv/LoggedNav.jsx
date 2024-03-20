import React from "react";
import { LOGGED_IN, TOKEN, USERDATA, USERD_KEYS } from "../../constants";
import { useNavigate } from "react-router-dom";

function LoggedNav( props ) {
  const user = JSON.parse(localStorage.getItem(USERDATA));
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USERDATA);
    localStorage.removeItem(LOGGED_IN);
    navigate("/");
  };
  //console.log(user)
  return (
    <div className="stacked-container">
      <div className="relative w-full border z-10 bg-white">
        <div className="w-full my-2 py-1 flex justify-between items-center  mx-auto">
          <div className="flex items-center ml-[2%] grow">
            <img
              src={user[USERD_KEYS.PROFILE_URL]}
              className="w-[50px] rounded-full mr-4"
              alt=""
            />
            <h1 className="text-2xl font-bold">
              Welcome, {user[USERD_KEYS.NAME]}!
            </h1>
          </div>

          { props.show ? <div className="flex items-center mr-[1%]">
            <button
              className="h-[50px] px-8 mr-10 py-0 bg-red-500 text-white text-sm font-bold rounded-xl hover:bg-red-600 transition duration-500"
              type="button"
              onClick={LogOut}>
              Log Out
            </button>
          </div> : <div className=""></div> }
        </div>
      </div>
    </div>
  );
}

export default LoggedNav;
