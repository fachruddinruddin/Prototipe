import React from 'react';
import EventList from '../components/dashboard/EventList';
import { useNavigate } from 'react-router-dom';

function Events() {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="p-8">
      <EventList showToday={true} showUpcoming={true} onEventClick={handleEventClick} />
    </div>
  );
}

export default Events;