import React from "react";

const TicketsTable = ({ tickets }) => {
  return (
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
    </div>
  );
};

export default TicketsTable;
