import React from "react";
import FormatNumber from "../hooks/FormateNumber";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import FormatBytes from "../hooks/FormateBytes";
import { UninstallApp } from "../hooks/HandleLocalStorage";
import { toast } from "react-toastify";

const InstalledApp = ({ data, setInstalledApps }) => {
  const notify = (title) =>
    toast.success(`${title} uninstalled successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const btnCLicked = (data, setInstalledApps) => {
    UninstallApp(data, setInstalledApps);
    notify(data.title);
  };
  return (
    <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-center bg-white rounded-sm p-4 gap-5">
      <div className="flex gap-4">
        <img
          className="rounded-sm max-w-[70px]"
          src={data.image}
          alt={data.title}
        />
        <div className="text-start flex flex-col justify-between">
          <p className="font-medium text-lg">{data.title}</p>
          <div className="flex gap-4 items-center py-1">
            <span className="bg-[#F1F5E8] rounded-sm text-[#00D390] flex justify-center items-center py-1 px-2 text-[12px]">
              <FiDownload />
              <span>&nbsp; {FormatNumber(data.downloads)}</span>
            </span>

            <span className="bg-[#FFF0E1] rounded-am text-[#FF8811] flex justify-center items-center py-1 px-2 text-[12px]">
              <FaStar />
              <span>&nbsp; {data.ratingAvg}</span>
            </span>

            <span className="text-[12px]">{FormatBytes(data.size)}</span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => btnCLicked(data, setInstalledApps)}
          className="bg-[#00D390] cursor-pointer text-white py-1 px-3 rounded-sm font-medium"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
