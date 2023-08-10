import React from "react";

const DealCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src="https://via.placeholder.com/500x200"
        alt="Deal"
        className="w-full h-auto"
      />
      <div className="px-[24px] py-[16px]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-600 text-md">
            Sydney Opera House, <span className="text-[#605DEC]">Sydney</span>
          </h3>
          <span className="text-gray-600">$199</span>
        </div>
        <p className="text-sm line-clamp-1 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          maximus est. Suspendisse vel risus vel turpis scelerisque molestie.
        </p>
      </div>
    </div>
  );
};

export default DealCard;
