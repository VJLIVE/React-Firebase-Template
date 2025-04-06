// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Add Navbar component here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
