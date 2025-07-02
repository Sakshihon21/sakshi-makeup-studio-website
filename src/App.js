import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeautifulLooks from './components/BeautifulLooks'; // ✅ Added

import Footer from './components/Footer';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BeautifulLooks /> {/* ✅ Added Beautiful Looks below Hero */}
            </>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
