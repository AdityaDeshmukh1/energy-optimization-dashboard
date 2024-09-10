// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChartsPage from './pages/ChartsPage'; // Create this page for charts
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
