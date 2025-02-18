import React from 'react';

const EventCard = ({ category, title, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-[#343434]"></div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {category.map((cat, index) => (
            <span 
              key={index} 
              className={`inline-block text-xs font-medium px-3 py-1 rounded-full
                ${cat === 'RKT' ? 'bg-[#343434] text-white' : 'bg-[#343434] text-white'}`}
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{date}</p>
      </div>
    </div>
  );
};
  
  export default EventCard;