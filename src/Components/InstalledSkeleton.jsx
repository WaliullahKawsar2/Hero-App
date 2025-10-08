import React from "react";

const InstalledSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5}).map((_, i) => (
        <div
          key={i}
          className="flex w-full rounded-lg gap-4 bg-white py-4 px-4 shadow-sm justify-between items-center"
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
            <div className="skeleton w-24 h-8"></div>
        </div>
      ))}
    </>
  );
};

export default InstalledSkeleton;
