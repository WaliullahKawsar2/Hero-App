import React from "react";

const CardSkeleton = ({count = 8}) => {
  return (
    <>   
        {
            Array.from({length : count}).map((_, i) => (
            <div key={i} className="flex w-94 rounded-lg flex-col gap-4 bg-white p-4 shadow-sm">
                <div className="skeleton h-60 w-85 mx-auto"></div>
                <div className="skeleton h-6 w-20"></div>
                <div className="flex justify-between">
                    <div className="skeleton h-6 w-20"></div>
                    <div className="skeleton h-6 w-20"></div>
                </div>
            </div>
            ))
        }
    
    </>
  )
};

export default CardSkeleton;
