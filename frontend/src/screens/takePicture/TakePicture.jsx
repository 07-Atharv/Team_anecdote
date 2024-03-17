import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { FACE_START } from "../../constants";
import { useNavigate } from "react-router-dom";

const OG_FACE = "examinee";

function App() {
  window.oncontextmenu = () => {
    // alert('No way!!!');
    return false;
  };

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


  const navigator = useNavigate()
  return (
   <div className="w-full">
     <div className="w-1/2 mt-20 justify-center mx-auto" onCopy={handleCopy} onPaste={handlePaste}>
      <Webcam className="w-1/2 " audio={false} ref={webcamRef} />
      

      <button className="bg-green-600 mx-10  mx-auto  text-white rounded-xl  p-4" onClick={captureStartFace}>Capture Start Face</button>
      {startFace  && <button  className="mx-auto p-5 text-white bg-green-700" onClick={()=>{navigator("/studentTest")}}>Continue</button>}
      {startFace && <img src={startFace} className=" w-1/2" alt="start-face" />} 
    </div>
   
   </div>
  );
}

export default App;