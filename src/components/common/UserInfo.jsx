import React from "react";

function UserInfo({ username, email }) {
  return (
    <div className="p-3 m-3 border-t border-gray-700 flex items-center rounded-md bg-gray-700">
      {/* Avatar */}
      <div className="w-10 h-10 bg-gray-400 rounded-md mr-3 flex-shrink-0"></div>

      {/* Username & Email (Tersusun ke Bawah dan Tidak Melebar) */}
      <div className="flex flex-col flex-grow w-0">
        <p className="font-medium">{username}</p>
        <p className="text-xs text-gray-400 break-all w-full">{email}</p>
      </div>

      {/* Menu Button */}
      <button className="mx-auto">⋮</button>
    </div>
  );
}

export default UserInfo;
