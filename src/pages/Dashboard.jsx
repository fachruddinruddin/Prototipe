import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import EventCard from '../components/dashboard/EventCard';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <DashboardStats />
      
      <h2 className="text-[18px] mt-8 mb-4">Today's Event</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <EventCard 
          badges={[
            { text: 'RKT', color: 'bg-gray-800' },
            { text: 'Programming', color: 'bg-gray-800' }
          ]}
          title="Open Source on The School"
          date="Mon, 21 Oct 2024"
        />
        
        <EventCard 
          buttons={[
            { text: 'Scan QR', color: 'bg-gray-800 text-white' },
            { text: 'Details', color: 'bg-white border border-gray-300' }
          ]}
        />
      </div>
    </div>
  );
}

export default Dashboard;