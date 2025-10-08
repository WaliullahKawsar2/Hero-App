import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Card from "../Components/Card";
import useApp from "../hooks/useApp";
import CardSkeleton from "../Components/CardSkeleton";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { app, loading } = useApp()
  const searched = search.toLocaleLowerCase()
  const filteredData = searched?app.filter(data=>data.title.toLocaleLowerCase().includes(searched)) : app;
  return (
    <div className="flex-1 bg-[#d2d2d238] flex flex-col text-center px-4 pb-5">
      <h1 className="text-4xl font-semibold mt-15">Our All Application</h1>
      <p className="text-[#627382] text-[14px] my-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mb-5 container mx-auto">
        <p className="font-semibold">
          <span>({app.length}) Apps Found</span>
        </p>
        <div className="flex justify-center items-center border-1 border-[#627382] rounded-sm px-2 py-1 text-[14px]">
          <span className="mx-1">
            <CiSearch />
          </span>
          <input
            className="outline-none"
            type="text"
            placeholder="search Apps"
            onChange={(e=>setSearch(e.target.value))}
            value={search}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 container mx-auto">
        {
          loading?<CardSkeleton/>:
          filteredData.map(data=><Card key={data.id} data={data} />)
        }
      </div>
    </div>
  );
};

export default Apps;
