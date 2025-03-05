import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon untuk toggle
import MenuItem from "../navigation/MenuItem";
import UserInfo from "../common/UserInfo";

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle sidebar

  return (
    <>
      {/* Button Toggle untuk Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-[#343434] text-white flex flex-col transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-4 flex justify-center items-center">
          <h1 className="text-5xl font-bold">D</h1>
          <span className="ml-2 text-4xl">FORM</span>
        </div>

        {/* Tombol New Event */}
        <div className="p-6 flex justify-center">
          <button className="bg-white/10 text-white rounded-lg py-2 px-4 text-center">
            New Event
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-grow overflow-y-auto">
          <Link to="/dashboard">
            <MenuItem
              icon="menu"
              text="Dashboard"
              active={location.pathname === "/dashboard"}
            />
          </Link>
          <Link to="/events">
            <MenuItem
              icon="menu"
              text="Events"
              active={location.pathname === "/events"}
            />
          </Link>
        </div>

        {/* User Info */}
        <div className="mt-auto">
          <UserInfo username="Username" email="email@gmail.com" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
