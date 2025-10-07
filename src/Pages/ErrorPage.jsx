import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className="flex-2 flex flex-col justify-center items-center gap-3 p-7">
        <img className="w-full max-w-[340px]" src={errorImg} alt="error" />
        <h2 className="text-4xl font-semibold">Oops, page not found!</h2>
        <p className="text-[#627382] text-[16px]">The page you are looking for is not available</p>
        <button
          onClick={() => handleGoBack(-1)}
          className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back!
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
