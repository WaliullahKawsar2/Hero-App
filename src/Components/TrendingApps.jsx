import React from "react";
import useApp from "../hooks/useApp";
import Card from "./Card";
import { Link } from "react-router";

const TrendingApps = () => {
  const { app } = useApp();
  const trendingApps = app.slice(0, 8);
  return (
    <>
      <div className="flex-1 bg-[#d2d2d238] flex flex-col text-center px-4 pb-5 ">
        <h1 className="text-4xl font-semibold mt-15">Trending Apps</h1>
        <p className="text-[#627382] text-[14px] my-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 container mx-auto">
          {trendingApps.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      <Link to={'/apps'} className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] my-7 mx-auto">
          See ALL
        </Link>
      </div>

    </>
  );
};

export default TrendingApps;
