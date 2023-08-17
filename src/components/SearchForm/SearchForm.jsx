import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiSolidUser,
  BiSolidPlaneTakeOff,
  BiSolidPlaneLand,
} from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";

const SearchForm = () => {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      fromAirport,
      toAirport,
    });
    navigate(`/tickets?${searchParams.toString()}`);
  };

  const airports = [
    { code: "JFK", name: "John F. Kennedy International Airport" },
    { code: "LAX", name: "Los Angeles International Airport" },
    { code: "LHR", name: "Heathrow Airport" },
  ];

  return (
    <form className="flex items-center border border-gray-300 rounded-md">
      <div className="flex items-center relative">
        <BiSolidPlaneTakeOff className="text-gray-500 ml-2" />
        <select
          className="py-2 pr-4 pl-2 rounded-l-md w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
          value={fromAirport}
          onChange={(e) => setFromAirport(e.target.value)}
        >
          <option value="">From where?</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center relative">
        <BiSolidPlaneLand className="text-gray-500 ml-2" />
        <select
          className="py-2 pr-4 pl-2 w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
          value={toAirport}
          onChange={(e) => setToAirport(e.target.value)}
        >
          <option value="">Where to?</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
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
          placeholder="Passengers"
          //   value={passengerCount}
          //   onChange={(e) => setPassengerCount(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
