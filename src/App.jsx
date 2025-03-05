import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import PageHeader from './components/layout/PageHeader';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={
        <div className="flex min-h-screen bg-gray-100">
          {!isAuthPage && <Sidebar />}
          <div className="flex-grow">
            {!isAuthPage && <PageHeader />}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;