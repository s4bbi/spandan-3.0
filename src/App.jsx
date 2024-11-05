import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import EventsPage from './Pages/EventsPage';
import "./index.css";

const AppComponent = () => {
  const targetDate = new Date("2024-11-18T09:59:59");

  return (
    <Router>
      <div className='selection:bg-[#5F43B2]'>
        <Navbar />
        <HeroSection />
        <CountdownTimer  targetDate={targetDate} />

        <Routes>
          <Route path="/" element={<div></div>} /> {/* Default Home Page */}
          <Route path="/events" element={<div><EventsPage /></div>} /> {/* Events Page */}
        </Routes>
      <EventsPage/>


        <Footer />
      </div>
    </Router>
  )
}

export default AppComponent;