import React from 'react';

const EventCard = ({ category, title, date, onEventClick, eventId }) => {
    return (
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={() => onEventClick(eventId)}
      >
        <div className="h-48 bg-[#343434]"></div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {category.map((cat, index) => (
              <span 
                key={index} 
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full
                  ${cat === 'RKT' ? 'bg-[#343434] text-white' : 
                   cat === 'NON-RKT' ? 'bg-[#343434] text-white' : 
                   'bg-[#343434] text-white'}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-base font-medium mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
    );
  };
  
  export default EventCard;