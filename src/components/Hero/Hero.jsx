import React, { useState } from "react";
import "./Hero.css";
import {
  BiSolidUser,
  BiSolidPlaneTakeOff,
  BiSolidPlaneLand,
} from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const airports = [
  { code: "JFK", name: "John F. Kennedy International Airport" },
  { code: "LAX", name: "Los Angeles International Airport" },
  { code: "LHR", name: "Heathrow Airport" },
];

const Hero = () => {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [passengerCount, setPassengerCount] = useState(1);

  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      fromAirport,
      toAirport,
    });
    navigate(`/tickets?${searchParams.toString()}`);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-[100px]">
      <h2 className="gradien-text text-center text-[90px] font-bold mb-[100px] leading-[90px]">
        It's more than
        <br />
        just a trip
      </h2>
      <form className="flex items-center border border-gray-300 rounded-md">
        <div className="flex items-center relative">
          <BiSolidPlaneTakeOff className="text-gray-500 ml-2" />
          <input
            className="py-2 pr-4 pl-2 rounded-l-md w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
            type="text"
            placeholder="From where?"
            value={fromAirport}
            onChange={(e) => setFromAirport(e.target.value)}
            onFocus={() => setIsFromDropdownOpen(true)}
          />
          {isFromDropdownOpen && (
            <div className="absolute left-0 top-[45px] mt-2 bg-white border border-gray-300 rounded-md shadow-md">
              {airports.map((airport) => (
                <div
                  key={airport.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFromAirport(airport.code);
                    setIsFromDropdownOpen(false);
                  }}
                >
                  {airport.name} ({airport.code})
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center relative">
          <BiSolidPlaneLand className="text-gray-500 ml-2" />
          <input
            className="py-2 pr-4 pl-2 w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
            type="text"
            placeholder="Where to?"
            value={toAirport}
            onChange={(e) => setToAirport(e.target.value)}
            onFocus={() => setIsToDropdownOpen(true)}
          />
          {isToDropdownOpen && (
            <div className="absolute left-0 top-[45px] mt-2 bg-white border border-gray-300 rounded-md shadow-md">
              {airports.map((airport) => (
                <div
                  key={airport.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setToAirport(airport.code);
                    setIsToDropdownOpen(false);
                  }}
                >
                  {airport.name} ({airport.code})
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center relative">
          <BsCalendarWeek className="text-gray-500 ml-2" />
          <DatePicker
            className="py-2 pr-4 pl-2 w-24 sm:w-28 md:w-32 lg:w-36 border-r border-gray-300 focus:outline-none"
            selectsRange={true}
            startDate={startDate}
            placeholderText="Depart - Return"
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </div>

        <div className="flex items-center relative">
          <BiSolidUser className="text-gray-500 ml-2" />
          <input
            className="py-2 pr-4 pl-2 rounded-r-full w-24 sm:w-28 md:w-32 lg:w-36 focus:outline-none"
            type="number"
            min="1"
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;
