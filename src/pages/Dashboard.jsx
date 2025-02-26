import React from "react";
import DashboardStats from "../components/dashboard/DashboardStats";
import EventList from "../components/dashboard/EventList";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="p-8 pt-28 ml-60">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardStats />
      {/* Menampilkan hanya today's event */}
      <EventList
        showToday={true}
        showUpcoming={false}
        onEventClick={handleEventClick}
      />
    </div>
  );
}

export default Dashboard;
