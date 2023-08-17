import React, { useState, useEffect } from "react";
import TicketsFilters from "./TicketsFilters";
import Api from "../../api/api";
import SearchForm from "../SearchForm/SearchForm";
import TicketsTable from "./TicketsTable";

const TicketsList = () => {
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
        setTickets(foundTickets.tickets);
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
      <SearchForm />
      <TicketsFilters />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="mb-[16px]">
            Choose a <span className="">returning</span> flight
          </p>
          <TicketsTable tickets={tickets} />
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
