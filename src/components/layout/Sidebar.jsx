import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "../navigation/MenuItem";
import UserInfo from "../common/UserInfo";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-60 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700 flex justify-center items-center">
        <h1 className="text-5xl font-bold">D</h1>
        <span className="ml-2 text-4xl">FORM</span>
      </div>

      <div className="p-4 flex justify-center">
        <button className="bg-gray-700 text-white rounded-lg py-2 px-4 w-full text-center">
          New Event
        </button>
      </div>

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

      <div className="mt-auto">
        <UserInfo username="Username" email="email@gmail.com" />
      </div>
    </div>
  );
}

export default Sidebar;
