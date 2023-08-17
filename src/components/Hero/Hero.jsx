import React from "react";
import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-[100px]">
      <h2 className="gradien-text text-center text-[90px] font-bold mb-[100px] leading-[90px]">
        It's more than
        <br />
        just a trip
      </h2>
      <SearchForm />
    </div>
  );
};

export default Hero;
