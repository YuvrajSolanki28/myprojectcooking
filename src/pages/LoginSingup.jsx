import React, { useState } from "react";
import "./login.css";
import Login from "./Login";
import Signup from "./Singup";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className='bg-[#f6f5f7] flex justify-center items-center flex-col font-["Montserrat",_sans-serif] h-screen -mt-[20px] mx-[0] mb-[50px]'>
    <div className="LoginSingup">
      <h2 className="text-center font-bold ">Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <Login />
        <Signup />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="m-0 font-bold">Welcome Back!</h1>
              <p className="text-[14px] font-thin leading-[20px] tracking-[0.5px] mt-[20px] mx-[0] mb-[30px]">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="m-0 font-bold">Hello, Friend!</h1>
              <p className="text-[14px] font-thin leading-[20px] tracking-[0.5px] mt-[20px] mx-[0] mb-[30px]">Enter your personal details and start journey with us</p>
              <button
                className="border-radius: 30px;"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
