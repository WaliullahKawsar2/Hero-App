import React from "react";

const InstalledSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5}).map((_, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full rounded-lg gap-4 bg-white py-4 px-4 shadow-sm justify-between"
        >
            <div className="flex gap-7">
                <div className="skeleton w-15 h-15"></div>
                <div className="flex flex-col justify-between">
                    <div className="skeleton w-14 h-5"></div>
                    <div className="flex gap-4">
                        <div className="skeleton w-14 h-5"></div>
                        <div className="skeleton w-14 h-5"></div>
                        <div className="skeleton w-14 h-5"></div>
                    </div>
                </div>
            </div>
            <div className="skeleton w-full sm:w-24 h-8"></div>
        </div>
      ))}
    </>
  );
};

export default InstalledSkeleton;
