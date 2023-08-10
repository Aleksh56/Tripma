import React from "react";
import { BsArrowRight } from "react-icons/bs";
import DealCard from "../DealCard/DealCard";

const Body = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-600">
          Find your next adventure with these{" "}
          <span className="text-[#605DEC]">flight deals</span>
        </p>
        <button className="flex items-center gap-[5px] text-gray-300">
          All <BsArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 w-full mb-[120px]">
        <DealCard />
        <DealCard />
        <DealCard />
        <div className="col-span-3">
          <DealCard />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-600">
          Explore unique <span className="text-[#5CD6C0]">places to stay</span>
        </p>
        <button className="flex items-center gap-[5px] text-gray-300">
          All <BsArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 w-full mb-[80px]">
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
      <button className="mb-[80px] px-[20px] py-[12px] bg-[#605DEC] text-white rounded-md">
        Explore more stays
      </button>
      <div className="flex flex-col items-center justify-center w-full">
        <h4 className="text-center text-gray-600">
          What <span className="text-[#605DEC]">Tripma</span> users are saying
        </h4>
      </div>
    </div>
  );
};

export default Body;
