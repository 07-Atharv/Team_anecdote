import React from "react";
import joinnow from "../../assets/joinnow.svg"
import scoreCraftLogo from "../../assets/scorecraftlogo.png"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GOOGLE_API_BASE } from "../../constants";


const SignUp = () => {

    const navigate = useNavigate()

    const handleGoogleSignup = useGoogleLogin({
        onSuccess: async tokenResponse => {

            let tokenRes = await fetch(GOOGLE_API_BASE + tokenResponse['access_token'])
            tokenRes = await tokenRes.json()

            console.log(tokenRes);

            const userDetails = {};
            userDetails["name"] = tokenRes.name;
            userDetails["profileurl"] = tokenRes.picture;
            userDetails["email"] = tokenRes.email;
            userDetails["verified"] = true;

            console.log(userDetails)

            navigate("/getDetails", { state: { details: userDetails } });
        },

        onError: () => {
            console.log("login Failed")
        }
    })


    return (
        <div className="bg-gradient-to-r from-white to-blue-300 w-full flex justify-center items-center " style={
            {
                height: "100vh"
            }
        }>
            <div className="w-1/2  flex flex-col justify-between " >
                <div className=" w-3/4 mx-auto  ">
                    <div className="flex items-center">
                        <div>
                            <img src={scoreCraftLogo} alt="" className="w-20"></img>

                        </div>
                        <div>
                            <h1 className="text-4xl mx-2 my-20 font-bold">ScoreCraft</h1>
                        </div>
                    </div>

                    <div className="border  bg-white shadow-2xl rounded-xl p-5">
                        <div className="mt-10">
                            <h1 className="text-3xl mb-2 font-bold">Create your Account!!</h1>
                            <span className="">Where excellence meets assessment</span>
                        </div>

                        <div className="my-20 flex justify-center">

                            <button type="button" className="w-5/6 text-white text-xl rounded-xl p-2 " onClick={()=>{handleGoogleSignup()}} style={{ backgroundColor: "#4285f4" }} >
                                <i className='text-xl mr-3 bx bxl-google'></i> Continue with Google
                            </button>


                        </div>
                    </div>
                    <div className="mt-40 ">
                        &copy; ScoreCraft
                    </div>
                </div>


            </div>
            <div className="w-1/2 h-full flex items-center justify-center" style={{ backgroundColor: "#407BFF" }} >
                <img className="w-5/6" src={joinnow} alt="" />
            </div>
        </div>
    );
}

export default SignUp;