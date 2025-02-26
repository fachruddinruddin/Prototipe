import React from 'react';
import EventCard from './EventCard';

const events = [
  { 
    id: 1,
    category: ["RKT", "Programming"], 
    title: "Open Source on The School", 
    date: "21 - 24 October 2024"
  },
  { 
    id: 2,
    category: ["RKT", "Programming"], 
    title: "Open Source on The School", 
    date: "21 - 24 October 2024"
  },
  { 
    id: 3,
    category: ["NON-RKT", "Networking"], 
    title: "DOSCOM SHARING TIME: Docker", 
    date: "21 October 2024"
  },
  { 
    id: 4,
    category: ["NON-RKT", "Networking"], 
    title: "DOSCOM SHARING TIME: Docker", 
    date: "21 October 2024"
  },
];

const todayEvent = events[0];
const upcomingEvents = events.slice(1);

const TodayEvent = () => (
  <section className="mb-8">
    <h2 className="text-xl text-[#343434] mb-5">Today's Event</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <EventCard {...todayEvent} />
    </div>
  </section>
);

const UpcomingEvents = () => (
  <section>
    <h2 className="text-xl text-[#343434] mb-5">Upcoming Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {upcomingEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  </section>
);

const EventList = ({ showToday = true, showUpcoming = true }) => {
  return (
    <div className="space-y-8">
      {showToday && <TodayEvent />}
      {showUpcoming && <UpcomingEvents />}
    </div>
  );
};

export default EventList;
