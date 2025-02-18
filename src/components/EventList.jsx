import EventCard from "./EventCard";

const events = [
  { 
    category: ["RKT", "Programming"], 
    title: "Open Source on The School", 
    date: "21 - 24 October 2024"
  },
  { 
    category: ["NON-RKT", "Networking"], 
    title: "DOSCOM SHARING TIME: Docker", 
    date: "21 October 2024"
  },
  { 
    category: ["NON-RKT", "Networking"], 
    title: "DOSCOM SHARING TIME: Docker", 
    date: "21 October 2024"
  },
];

const todayEvent = events[0];
const upcomingEvents = events.slice(1);

const TodayEvent = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl text-[#343434] font-semibold mb-5">Today's Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <EventCard {...todayEvent} />
      </div>
    </section>
  );
};

const UpcomingEvents = () => {
  return (
    <section>
      <h2 className="text-xl text-[#343434] font-semibold mb-5">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

const EventList = () => {
  return (
    <div className="py-8 px-12">
      <TodayEvent />
      <UpcomingEvents />
    </div>
  );
};

export default EventList;