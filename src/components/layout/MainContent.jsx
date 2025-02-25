import React from 'react';
import PageHeader from './PageHeader';
import Dashboard from '../../pages/Dashboard';

function MainContent() {
  return (
    <div className="flex-grow bg-white">
      <PageHeader />
      <div className="p-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default MainContent;