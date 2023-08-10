import React, { useState } from "react";

const TicketsFilters = ({ handleFilterChange }) => {
  const [maxPrice, setMaxPrice] = useState("");
  const [shops, setShops] = useState("");
  const [times, setTimes] = useState("");
  const [airlines, setAirlines] = useState("");
  const [seatClass, setSeatClass] = useState("");
  const [more, setMore] = useState("");

  const handleApplyFilters = () => {
    // Обновляем список авиабилетов на основе выбранных фильтров
    // Вызываем функцию handleFilterChange с новыми значениями фильтров
    handleFilterChange({
      maxPrice,
      shops,
      times,
      airlines,
      seatClass,
      more,
    });
  };

  return (
    <div className="flex items-center rounded-md mb-4">
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">Max Price</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">Shops</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">Times</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">Airlines</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">Seat class</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <select
        className="py-2 pr-4 pl-2 rounded-l-md w-24 sm:w-32 focus:outline-none mr-[16px]"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="">More</option>
        <option value="$100">$100</option>
        <option value="$200">$200</option>
      </select>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none"
        onClick={handleApplyFilters}
      >
        Apply
      </button>
    </div>
  );
};

export default TicketsFilters;
