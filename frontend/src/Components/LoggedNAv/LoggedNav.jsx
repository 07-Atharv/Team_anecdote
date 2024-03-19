import React from "react";
import { LOGGED_IN, TOKEN, USERDATA, USERD_KEYS } from "../../constants";
import { useNavigate } from "react-router-dom";

function LoggedNav() {
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
    <div className=" w-full border">
      <div className="w-full my-5 flex justify-between items-center  mx-auto">
        <h1 className="text-3xl font-bold ml-[3%]">
          Welcome, {user[USERD_KEYS.NAME]}!
        </h1>
        <div className="flex mr-[2%]">
          <button
            className="px-8 mr-10 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition duration-500"
            type="button"
            onClick={LogOut}>
            Log Out
          </button>
          <img
            src={user[USERD_KEYS.PROFILE_URL]}
            style={{ borderRadius: "50%", width: "60px" }}
            alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default LoggedNav;
