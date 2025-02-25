import React from 'react';
import StatCard from './StatCard';

function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard 
        title="Ongoing Events"
        count={2}
        bgColor="bg-gray-800"
      />
      <StatCard 
        title="Incoming Events"
        count={5}
        bgColor="bg-gray-800"
      />
      <StatCard 
        title="Events Completed"
        count={3}
        bgColor="bg-gray-800"
      />
    </div>
  );
}

export default DashboardStats;