import React from "react";
import logo from "../../assets/images/Logo_large.png";

const Header = () => {
  return (
    <header className="px-[40px] py-[24px]">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <img src={logo} alt="Tripma Logo" />
          <ul className="flex items-center gap-[36px] text-sm">
            <li>
              <a href="#" className="active text-[#605DEC]">
                Flights
              </a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Sing In</a>
            </li>
            <li>
              <a href="#">
                <button className="px-[20px] py-[13px] rounded-md bg-[#605DEC] text-white">
                  Sing Up
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
