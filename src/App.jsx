import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
            <Route path="/events" element={<Events />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;