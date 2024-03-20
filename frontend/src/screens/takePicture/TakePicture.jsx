import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { FACE_START } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";

const OG_FACE = "examinee";

function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Watch for fullscreenchange
  React.useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  window.oncontextmenu = () => {
    // alert('No way!!!');
    return false;
  };

  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const navigate = useNavigate();

  const handleCopy = (e) => {
    e.preventDefault();
    alert("Copying is not allowed");
  };

  const handlePaste = (e) => {
    e.preventDefault();
    alert("Pasting is not allowed");
  };

  const webcamRef = useRef(null);
  const [startFace, setStartFace] = useState(null);
  const [devTools, setDevTools] = useState(null);
  const [msg, setMsg] = useState("");

  const checkDevTools = () => {
    if (devTools.isOpen) {
      alert("Warning: Developer tools are open!");
      setDevTools("Dev Tools Open");
      // You can add your logic here, such as alerting the proctor
    } else {
      setDevTools("Dev Tools not Open");
    }
  };

  const checkTabVisibility = () => {
    if (document.hidden) {
      // User has changed or exited the current tab
      console.log("User changed or exited tab");
      setMsg("User changed or exited tab");
      // You can add your logic here, such as alerting the proctor
    } else if (!document.hasFocus()) {
      // Another software is opened
      console.log("Another software is opened");
      setMsg("Another software is opened");
      // You can add your logic here, such as alerting the proctor
    } else if (!window.screenTop && !window.screenY) {
      // User has switched to fullscreen mode
      console.log("User is not fullscreen mode");
      setMsg("User is not fullscreen mode");

      // You can add your logic here, such as alerting the proctor
    } else {
      console.log("User is active on the exam tab");
      setMsg("User is active on the exam tab");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureAndSendImage();
      // checkDevTools();
      checkTabVisibility();
    }, 3000); // Send image every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const captureStartFace = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Convert image to base64
    const base64Image = await fetch(imageSrc)
      .then((res) => res.blob())
      .then(
        (blob) =>
          new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          })
      );

    // Store the start face in localStorage
    localStorage.setItem(FACE_START, base64Image);
    setStartFace(base64Image);
  };

  const captureAndSendImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Convert image to base64
    const base64Image = await fetch(imageSrc)
      .then((res) => res.blob())
      .then(
        (blob) =>
          new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          })
      );

    // Send base64 image to Flask backend
    // let res = await fetch("http://localhost:5000/upload_image", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ current: base64Image, examinee: localStorage.getItem(OG_FACE) }),
    // });

    // res = await res.json()
    // console.log(res)
  };

  const navigator = useNavigate();
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <i class="bx bx-info-circle text-6xl text-slate-300"></i>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Enable Full Screen to continue
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 mx-10 px-10 mx-auto text-white rounded-xl  p-4"
                onClick={() => {
                  toggleFullScreen();

                  navigate("/testId");
                }}>
                Start Test
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex flex-row">
        <div className="w-[40%] p-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Capture Your Face to start the Assesment
          </h1>
          <div
            className="flex flex-col items-center gap-y-4 mt-10"
            onCopy={handleCopy}
            onPaste={handlePaste}>
            <Webcam className="w-[70%]" audio={false} ref={webcamRef} />

            <button
              className="bg-green-600 mx-10  mx-auto  text-white rounded-xl  p-4"
              onClick={captureStartFace}>
              Capture Start Face
            </button>

            {startFace && (
              <img src={startFace} className=" w-[70%]" alt="start-face" />
            )}
          </div>
        </div>
        <div className="flex flex-col w-[50%] p-8 border border-slate-100 rounded-xl justify-start items-center">
          <h1 className="font-bold text-2xl">General Instructions</h1>
          <div class="p-4 bg-gray-100 rounded-lg shadow-md">
            <ol class="list-decimal list-inside">
              <li class="mb-2">Read the exam instructions carefully.</li>
              <li class="mb-2">
                Ensure you have all the necessary materials, such as pens,
                pencils, and scratch paper.
              </li>
              <li class="mb-2">
                Find a quiet and well-lit space to take the exam.
              </li>
              <li class="mb-2">
                Log in to the exam platform using the provided credentials.
              </li>
              <li class="mb-2">
                Follow the on-screen instructions to start the exam.
              </li>
              <li class="mb-2">
                Answer each question to the best of your ability.
              </li>
              <li class="mb-2">
                Double-check your answers before submitting the exam.
              </li>
              <li>Submit the exam before the deadline.</li>
            </ol>
          </div>

          <div className="flex flex-col justify-end items-end grow">
            {startFace && (
              <button
                className="bg-green-600 mx-10  mx-auto text-white rounded-xl  p-4"
                onClick={() => {
                  setOpenModal(true);
                }}>
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
