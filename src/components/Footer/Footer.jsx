import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/Logo_large.png";

const Footer = () => {
  return (
    <footer className="py-7">
      <div className="container mx-auto grid grid-cols-5 gap-8 pb-[30px]">
        <div className="col-span-1">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        <div className="col-span-1">
          <h3 className="text-md text-gray-600 mb-[14px]">About</h3>
          <ul className="text-md text-gray-400">
            <li className="mb-[14px]">
              <a href="/">About Tripma</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">How it works</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Careers</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Press</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Blog</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Forum</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-md text-gray-600 mb-[14px]">Partner with us</h3>
          <ul className="text-md text-gray-400">
            <li className="mb-[14px]">
              <a href="/">Partnership programs</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Affiliate program</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Connectivity partners</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Promotion and events</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Integrations</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Community</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Loyalty program</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-md text-gray-600 mb-[14px]">Support</h3>
          <ul className="text-md text-gray-400">
            <li className="mb-[14px]">
              <a href="/">Help Center</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Contact us</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Privacy policy</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Terms of service</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Trust and safety</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Accessibility</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-md text-gray-600 mb-[14px]">Get the app</h3>
          <ul className="text-md text-gray-400">
            <li className="mb-[14px]">
              <a href="/">Tripma for Android</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Tripma for IOS</a>
            </li>
            <li className="mb-[14px]">
              <a href="/">Mobile site</a>
            </li>
          </ul>
          <div className="flex items-start gap-[10px] mt-4 flex-col">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
              Download from App Store
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none">
              Download from Google Play
            </button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-300" />
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-gray-600">
            <FaTwitter />
          </a>
          <a href="/" className="text-gray-600">
            <FaInstagram />
          </a>
          <a href="/" className="text-gray-600">
            <FaFacebook />
          </a>
        </div>
        <p className="text-gray-600">© 2020 Tripma incorporated</p>
      </div>
    </footer>
  );
};

export default Footer;
