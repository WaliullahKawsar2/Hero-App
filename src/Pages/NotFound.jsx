import React from "react";
import { useNavigate } from "react-router";
import errorImg from "../assets/App-Error.png";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex-2 flex flex-col justify-center items-center gap-3 p-7">
        <img className="w-full max-w-[320px]" src={errorImg} alt="error" />
        <h2 className="text-4xl font-semibold">Oops, App not found!</h2>
        <p className="text-[#627382] text-[16px]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <button
          onClick={() => handleGoBack(-1)}
          className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NotFound;
