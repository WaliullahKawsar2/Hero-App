import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import InstalledApp from "../Components/InstalledApp";
import InstalledSkeleton from "../Components/InstalledSkeleton";
import useApp from "../hooks/useApp";

const Installation = () => {
  const { loading } = useApp();
  const [installedApps, setInstalledApps] = useState(
    JSON.parse(localStorage.getItem("installedApp")) || []
  );
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");


  useEffect(() => {
    handleSort(sortOrder);
  }, [installedApps])

  const handleSort = (order) => {
    if(!order) return setApps(installedApps)
    const sorted = [...installedApps].sort((a, b) => {
      return order === "asc" ? a.size - b.size : b.size - a.size;
    });
    setApps(sorted);
    setSortOrder(order)
  };

  return (
    <div className="c flex-1 bg-[#d2d2d238] flex flex-col text-center px-4 pb-5">
      <h1 className="text-4xl font-semibold mt-15">Our All Application</h1>
      <p className="text-[#627382] text-[14px] my-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mb-5 container mx-auto">
        <p className="font-semibold">
          <span>{installedApps.length} Apps Found</span>
        </p>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="flex justify-center items-center px-2 py-1 rounded-sm cursor-pointer border-1 border-gray-300 text-[12px]"
          >
            <p>Sort By Size</p> <FaSortDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 menu mt-1 z-1 w-30 p-1 shadow-sm"
          >
            <li>
              <a onClick={()=>handleSort('asc')}>High to Low</a>
            </li>
            <li>
              <a onClick={()=>handleSort('desc')}>Low to High</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 flex-col container mx-auto">
        {loading ? (
          <InstalledSkeleton />
        ) : (
          apps.map((data) => (
            <InstalledApp
              key={data.id}
              data={data}
              setInstalledApps={setInstalledApps}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
