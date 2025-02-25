import React from 'react';

function UserInfo({ username, email }) {
  return (
    <div className="p-4 border-t border-gray-700 flex items-center bg-gray-700">
      <div className="w-10 h-10 bg-gray-400 rounded-md mr-3"></div>
      <div>
        <p className="font-medium">{username}</p>
        <p className="text-xs text-gray-400">{email}</p>
      </div>
      <button className="ml-auto">⋮</button>
    </div>
  );
}

export default UserInfo;