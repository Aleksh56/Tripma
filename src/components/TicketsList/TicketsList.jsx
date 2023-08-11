import React, { useState, useEffect } from "react";
import {
  BiSolidUser,
  BiSolidPlaneTakeOff,
  BiSolidPlaneLand,
} from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TicketsFilters from "./TicketsFilters";
import Api from "../../api/api";

const TicketsList = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromAir, setFromAir] = useState("");
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const fromAirport = searchParams.get("fromAirport");
      const toAirport = searchParams.get("toAirport");

      setFromAir(fromAirport);

      try {
        const foundTickets = await Api.getTickets({
          destination: fromAirport,
          origin: toAirport,
        });
        setTickets(foundTickets);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-start">
      <form className="flex items-center border border-gray-300 rounded-md mb-[24px]">
        <div className="flex items-center relative">
          <BiSolidPlaneTakeOff className="text-gray-500 ml-2" />
          <input
            className="py-2 pr-4 pl-2 rounded-l-md w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
            type="text"
            placeholder="From where?"
            value={fromAir}
          />
        </div>
        <div className="flex items-center relative">
          <BiSolidPlaneLand className="text-gray-500 ml-2" />
          <input
            className="py-2 pr-4 pl-2 w-40 sm:w-48 md:w-54 lg:w-60 border-r border-gray-300 focus:outline-none"
            type="text"
            placeholder="Where to?"
          />
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
            value={passengers}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none">
          Search
        </button>
      </form>
      <TicketsFilters />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="mb-[16px]">
            Choose a <span className="">returning</span> flight
          </p>
          <div className="flex items-start justify-between w-[70%] border rounded-xl">
            <ul className="w-full">
              {tickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className="px-[32px] py-[16px] flex items-center w-full"
                >
                  <img src="#" alt="" />
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-end gap-[3px]">
                      <p>{ticket.flightDuration}</p>
                      <p>{ticket.airline}</p>
                    </div>
                    <p>
                      {ticket.departureTime} - {ticket.arrivalTime}
                    </p>
                    <div className="flex flex-col items-end gap-[3px]">
                      {ticket.stops.length > 0 ? (
                        <>
                          <p>1 stop</p>
                          <p>
                            {ticket.stops[0].duration} in{" "}
                            {ticket.stops[0].countryCode}
                          </p>
                        </>
                      ) : (
                        <p>Nonstop</p>
                      )}
                    </div>

                    <p>${ticket.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* ... Другой контент ... */}
          </div>
        </>
      )}
      <div className="flex items-start justify-between w-full">
        {/* Table with border, overflow-y inside. Table on the right side 70% of width */}
        {/* Some content on the left side */}
      </div>
    </div>
  );
};

export default TicketsList;
