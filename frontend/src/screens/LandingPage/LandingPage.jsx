import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import landingImage from "../../assets/land1.png";
import { useNavigate } from "react-router-dom";
import ai from "../../assets/ai.svg";
import authentication from "../../assets/authentication.svg";
import check from "../../assets/check.svg";
import instant from "../../assets/instant.svg";
import secure from "../../assets/secure.svg";
import UI from "../../assets/UI.svg";
import logo from "../../assets/image-r.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-64 h-48">
        <Navbar />
      </div>
      <div className=" flex justify-center  w-5/6 mx-auto  ">
        <div className="w-1/2 ">
          <div>
            <h1 className="text-9xl my-3 font-serif">ScoreCraft</h1>
          </div>
          <div>
            <h3 className=" text-2xl my-10 font-sans mt-4">
              Unlock Your Academic Potential with ScoreCraft : <br /> Where Excellence
              Meets Assessment!!!
            </h3>
          </div>
          <div>
            <h1 className=" mt-10 text-1xl font-roman ">
              Explore MCQ’s , delve into textual wonders, decode visual puzzles
              ,<br></br>
              and unleash code mastery. Experience diverse question formats for
              <br></br>
              comprehensive assessments. Embrace innovation in learning.
              <br></br> Your journey to academic excellence starts here.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-start  items-center">
          <img src={landingImage} alt="Langing illustration" ></img>
        </div>
      </div>
      <div className="w-1/2 p-4 px-32 mb-10 flex items-center"> {/* Added flex and items-center */}
    <p className="text-black text-lg mb-1 font-sans mr-4">Are You a Student?</p> {/* Added mr-4 for margin-right */}
    <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105">Log in for a student</button>
</div>



      <h1 className="text-4xl font-semibold	text-center mt-60">
        What’s New Here ?
      </h1>
      <div class="w-5/6 my-10 mx-auto grid grid-cols-3 gap-4">
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105">
          <div className="w-full flex justify-center">
            <img src={check} className="w-1/3" alt=""></img>
          </div>

          <p className="text-lg font-bold">Multiple Questions Format</p>
          <p className="text-sm mt-2">
            Platform provides varied question <br />
            types for customized assessment
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105 ">
          <div className="w-full flex justify-center">
            <img src={ai} className="w-1/3" alt=""></img>
          </div>

          <p className="text-lg font-bold">AI Proctoring</p>
          <p className="text-sm mt-2">
            AI monitors behavior, <br />
            flags cheating in real time{" "}
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105 ">
          <div className="w-full flex justify-center">
            <img src={instant} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Instant Results</p>
          <p className="text-sm mt-2">
            Instant feedback streamlines assessment, <br /> leads performance
            evaluation
          </p>
        </div>
        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105 ">
          <div className="w-full flex justify-center">
            <img src={secure} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Secure Exams</p>
          <p className="text-sm mt-2">
            Secure exam access <br />
            with personalized links{" "}
          </p>
        </div>

        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105 ">
          <div className="w-full flex justify-center">
            <img src={UI} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">User Friendly Interface</p>
          <p className="text-sm mt-2">
            Exam friendly dashboards simplify <br />
            exam management for institutions
          </p>
        </div>

        <div className="p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-blue-200 px-5 py-5 text-2xl border rounded-xl transform transition duration-300 hover:scale-105 ">
          <div className="w-full flex justify-center">
            <img src={authentication} className="w-1/3" alt=""></img>
          </div>
          <p className="text-lg font-bold">Google Authentication</p>
          <p className="text-sm mt-2">
            Access via Google authentication <br />
            for secure login
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr class="my-6 border-gray-800 sm:mx-auto dark:border-gray-800 lg:my-8" />

          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} class="h-8" alt="ScoreCraft Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ScoreCraft
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-900">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class=" my-4">
            <div className="flex justify-center my-2">
              <svg
                className="w-[50px] h-[50px] fill-[#8e8e8e]"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
              </svg>
              <svg
                className="w-[50px] h-[50px] fill-[#8e8e8e]"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"></path>
              </svg>
              <svg
                className="w-[50px] h-[50px] fill-[#8e8e8e]"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
              <svg
                className="w-[50px] h-[50px] fill-[#8e8e8e]"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </div>
            <div class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://scorecraft.com/" class="hover:underline">
                ScoreCraft™
              </a>
              . All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;