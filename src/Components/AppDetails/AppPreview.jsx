import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import FormatNumber from "../../hooks/FormateNumber";
import FormatBytes from "../../hooks/FormateBytes";
import { HandleLocalStorage } from "../../hooks/HandleLocalStorage";
import { toast, ToastContainer } from "react-toastify";

const AppPreview = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const installedApp = JSON.parse(localStorage.getItem("installedApp"));
    if (installedApp != null) {
      const isInstalled = installedApp.some((app) => app.id === data.id);
      setClicked(isInstalled);
    }
  }, [data.id]);

  const btnCLicked = (title) => {
    HandleLocalStorage(data);
    setClicked(true);
    notify(title);
  };

  const notify = (title) =>
    toast.success(`${title} installed successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="flex py-7 gap-4 border-b-1">
      <div>
        <img src={data?.image} alt="" />
      </div>
      <div className="flex-1 space-y-2.5">
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        <p>
          Developed by{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {data?.companyName}
          </span>
        </p>
        <hr />

        <div className="flex gap-7">
          <div>
            <FiDownload />
            <p className="text-[12px]">Downloads</p>
            <p className="font-bold text-2xl">
              {FormatNumber(data?.downloads)}
            </p>
          </div>
          <div>
            <FaStar />
            <p className="text-[12px]">Average Ratings</p>
            <p className="font-bold text-2xl">{data?.ratingAvg}</p>
          </div>
          <div>
            <AiFillLike />
            <p className="text-[12px]">Total Reviews</p>
            <p className="font-bold text-2xl">{FormatNumber(data?.reviews)}</p>
          </div>
        </div>
        <button
          onClick={() => btnCLicked(data.title)}
          className="bg-[#00D390] cursor-pointer text-white py-1 px-3 rounded-sm font-medium"
        >
          {clicked ? (
            <p>Installed</p>
          ) : (
            <p>
              Install Now (<span>{FormatBytes(data?.size)}</span>)
            </p>
          )}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AppPreview;
