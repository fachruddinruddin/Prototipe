import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import PageHeader from './components/layout/PageHeader'; // Import the PageHeader component
import Events from './pages/Events';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import EventDetail from './pages/EventDetail'; // Import the EventDetail component

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-grow">
          <PageHeader /> {/* Add the PageHeader component */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} /> {/* Add the EventDetail route */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;