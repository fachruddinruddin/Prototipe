import React from 'react';

function MenuItem({ icon, text, active }) {
  return (
    <div className={`flex items-center rounded-lg p-4 m-2 ${active ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
      <div className="mr-3">
        {icon === 'menu' && <span>☰</span>}
        {icon === 'list' && <span>≡</span>}
      </div>
      <span>{text}</span>
    </div>
  );
}

export default MenuItem;