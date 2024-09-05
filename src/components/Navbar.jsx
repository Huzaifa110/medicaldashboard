import React from "react";
import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';
import flag from '../assets/images/flag.PNG';
import navimg from '../assets/images/navimage.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-[0px_2px_10px_0px_#0000001F,0px_2px_5px_0px_#00000029] flex items-center">
      <div className="max-w-[1920px] w-full mx-auto flex justify-between items-center h-full">
        <div className="flex items-center space-x-4">
          <div className="flex p-4 w-[235px] h-[60px] bg-custom-blue text-white">
            <span className="custom-typography text-xl"></span>
            <span className="custom-text absolute top-[-1px] left-[49.38px]">Medical</span>
          </div>

          <FaBars className="bars text-gray-700 cursor-pointer" />
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] h-[41px] absolute top-[10px] left-[290px] p-1 bg-[#F4F4F4] border border-white rounded-tl-md focus:outline-none"
          />
        </div>
        <div
          className="flex items-center justify-between w-[313.03px] h-[56.14px] opacity-1 space-x-6"
        >
          <div className="flag-div flex items-center">
            <img src={flag} alt="American Flag" className="flag" />
            <span className="english">English</span>
          </div>
          <div className="notification-div relative flex items-center">
            <FaBell className="bell" />
            <span className="notification">9</span>
          </div>
          <div className="mail-div relative flex items-center">
            <FaEnvelope className="envelope" />
            <span className="mail">2</span>
          </div>
          <div className="relative flex items-center">
          <img
            src={navimg}
            alt="Profile"
            className="image rounded-full border border-gray-300"
          />
          <span className="img-text">Kiran</span>
          </div>
          <BsThreeDotsVertical className="dots cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;