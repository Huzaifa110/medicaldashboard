import React from "react";
import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';
import flag from '../assets/images/flag.PNG';
import navimg from '../assets/images/navimage.png';
import bell from '../assets/images/bell.png';
import email from '../assets/images/email.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-lg flex items-center z-10 px-0 m-0">
      <div className="max-w-[1920px] w-full mx-0 flex justify-between items-center h-full">
        <div className="logo-div flex items-center space-x-4 ml-0 pl-0">
          <div className="logo flex items-center p-2 md:p-4 sm:ml-2 w-auto bg-custom-blue text-white ml-0 pl-0">
            <span className="custom-typography text-xl"></span>
            <span className="custom-text">Medical</span>
          </div>
        </div>
        <FaBars className="bars text-gray-700 ml-2 cursor-pointer" />
        <div className="flex-1 mx-4 relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder w-full md:w-[200px] h-[41px] p-1 bg-[#F4F4F4] border border-white rounded-tl-md focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="flag-div flex items-center">
            <img src={flag} alt="American Flag" className="flag" />
            <span className="english">English</span>
          </div>
          <div className="notification-div relative">
            <img src={bell} alt="bell" className="bell" />
            <span className="notification">6</span>
          </div>
          <div className="mail-div relative">
            <img src={email} alt="email" className="envelope" />
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
