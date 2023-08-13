import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-700">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2017/01/30/23/13/arrow-2029708_960_720.png"
        alt="Arrow pointing left"
        className="w-24 h-24 mb-4"
      />
      <p className="text-gray-600 mb-4">
        You can{" "}
        <Link
          to="/"
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline"
        >
          go back to the previous page
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
