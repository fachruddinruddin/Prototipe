import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../navigation/MenuItem';
import UserInfo from '../common/UserInfo';

function Sidebar() {
  return (
    <div className="w-60 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">D</h1>
          <span className="ml-2 text-2xl">FORM</span>
        </div>
      </div>
      
      <div className="p-4">
        <button className="bg-gray-700 text-white rounded-lg py-2 px-4 w-full text-left">
          New Event
        </button>
      </div>
      
      <div className="flex-grow overflow-y-auto">
        <Link to="/dashboard">
          <MenuItem icon="menu" text="Dashboard" active={true} />
        </Link>
        <Link to="/events">
          <MenuItem icon="list" text="Events" />
        </Link>
      </div>
      
      <div className="mt-auto">
        <UserInfo 
          username="Username" 
          email="emailexample@gmail.com" 
        />
      </div>
    </div>
  );
}

export default Sidebar;