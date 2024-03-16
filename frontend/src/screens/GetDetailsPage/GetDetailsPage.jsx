import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL, TOKEN } from "../../constants";

const GetDetailsPage = () => {
  const [institute, setInstitute] = React.useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container w-[95vw] h-[100vh] mx-auto flex flex-col items-start align-center ">
        <h1 className="font-bold text-[2.5vw] my-8">
          {" "}
          We Need a Few more details
        </h1>

        <div className="details-container grow w-[50%] mb-32 items-center mx-auto flex flex-col justify-center">
          <h1 className="my-2 font-bold text-left w-[50%] text-2xl">
            Institute Name
          </h1>
          <div class="relative h-10 w-[50%] min-w-[200px] my-18">
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              onChange={(e) => setInstitute(e.target.value)}
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Required
            </label>
          </div>

          <button
            class="middle none center my-4 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={async () => {
              const userDetails = state.details;
              userDetails["institution"] = institute;

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

              fetch(BASEURL + "/api/teacher/signup", requestOptions)
                .then(async (response) => {
                  const res = await response.json();
                  if (response.status === 400) {
                    alert( res.message );
                  } else if (response.status == 500) {
                    console.log(res.body);
                  } else {
                    localStorage.setItem(TOKEN, res.token);

                    // navigating to the next page
                    navigate("/TeacherHome");
                  }
                })
                .catch((error) => {
                  console.log("error");
                  console.error(error);
                });
            }}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default GetDetailsPage;
