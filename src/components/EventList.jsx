import EventCard from "./EventCard";

const events = [
  { category: ["RKT"], title: "Open Source on The School", date: "Mon, 21 Oct 2024" },
  { category: ["NON-RKT", "Networking"], title: "DOSCOM SHARING TIME: Docker", date: "Mon, 21 Oct 2024" },
  { category: ["NON-RKT", "Networking"], title: "DOSCOM SHARING TIME: Docker", date: "Mon, 21 Oct 2024" },
];

const EventList = () => {
  return (
    <section className="py-8 px-12">
      <h1 className="text-xl text-[#343434] font-semibold mb-5">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;