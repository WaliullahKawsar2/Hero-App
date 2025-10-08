import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";
import FormatNumber from "../hooks/FormateNumber";

const Card = ({data}) => {



  return (
    <Link to={`/appinfo/${data.id}`} className="card bg-base-100 flex-1 shadow-sm cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
      <figure className="p-3">
        <img className="rounded-sm"
          src={data.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.title}
        </h2>
        <div className="flex justify-between items-center">
          <span className="bg-[#F1F5E8] rounded-sm text-[#00D390] flex justify-center items-center py-1 px-2"><FiDownload /><span>&nbsp; {FormatNumber(data.downloads)}</span></span>

          <span className="bg-[#FFF0E1] rounded-am text-[#FF8811] flex justify-center items-center py-1 px-2"><FaStar /><span>&nbsp; {data.ratingAvg}</span></span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
