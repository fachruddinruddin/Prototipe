import React from "react";
import EventCard from "./EventCard";
import { events } from "../../data/events";

const todayEvent = events[0];
const ongoingEvents = events.slice(1, 4); 
const upcomingEvents = events.slice(1, 3);

const TodayEvent = ({ showSeeAll }) => (
  <section className="mb-8">
    <div className="flex justify-between items-center mb-3 sm:mb-5">
      <div className="flex items-center">
        <h2 className="text-lg sm:text-1xl text-[#343434] font-medium mr-3">
          Today's Event
        </h2>
        {showSeeAll && (
          <button className="text-sm text-white bg-[#343434] px-3 py-1 rounded-lg">
            See All
            <span className="border border-white bg-white text-black ml-2 px-2 py-0 rounded-md">
              {1}
            </span>
          </button>
        )}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <EventCard {...todayEvent} />
    </div>
  </section>
);

const OngoingEvents = ({ showSeeAll }) => (
  <section className="mb-8">
    <div className="flex justify-between items-center mb-3 sm:mb-5">
      <div className="flex items-center">
        <h2 className="text-lg sm:text-1xl text-[#343434] font-medium mr-3">
          Ongoing Events
        </h2>
        {showSeeAll && (
          <button className="text-sm text-white bg-[#343434] px-3 py-1 rounded-lg">
            See All
            <span className="border border-white bg-white text-black ml-2 px-2 py-0 rounded-md">
              {ongoingEvents.length}
            </span>
          </button>
        )}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ongoingEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  </section>
);

const UpcomingEvents = ({ showSeeAll }) => (
  <section>
    <div className="flex justify-between items-center mb-3 sm:mb-5">
      <div className="flex items-center">
        <h2 className="text-lg sm:text-1xl text-[#343434] font-medium mr-3">
          Upcoming Events
        </h2>
        {showSeeAll && (
          <button className="text-sm text-white bg-[#343434] px-3 py-1 rounded-lg">
            See All
            <span className="border-white bg-white text-black ml-2 px-2 py-0 rounded-md">
              {upcomingEvents.length}
            </span>
          </button>
        )}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {upcomingEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  </section>
);

const EventList = ({
  showToday = false, // Set to false to hide today's event
  showOngoing = true,
  showUpcoming = true,
  showSeeAll = true,
}) => {
  return (
    <div className="space-y-8">
      {showToday && <TodayEvent showSeeAll={showSeeAll} />}
      {showOngoing && <OngoingEvents showSeeAll={showSeeAll} />}
      {showUpcoming && <UpcomingEvents showSeeAll={showSeeAll} />}
    </div>
  );
};

export default EventList;
