import React from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';

function EventCard({ badges, title, date, buttons }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-800 h-36"></div>
      <div className="p-4">
        {badges && (
          <div className="flex gap-2 mb-2">
            {badges.map((badge, index) => (
              <Badge key={index} text={badge.text} color={badge.color} />
            ))}
          </div>
        )}
        
        {title && <h3 className="text-lg font-medium">{title}</h3>}
        {date && <p className="text-gray-500 text-sm">{date}</p>}
        
        {buttons && (
          <div className="flex gap-2 mt-4">
            {buttons.map((button, index) => (
              <Button key={index} text={button.text} className={button.color} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;