import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import Days from '../components/HomeComponents/Days';
import Partners from '../components/HomeComponents/Partners';
import Casousel from '../components/HomeComponents/Carousel';
import More from '../components/More/More';
import "../index.css";

const App = () => {
  const targetDate = new Date("2024-11-18T09:59:59");

  return (
    <div className="h-screen w-screen flex flex-col bg-black mt-0">
      <Navbar />
      <HeroSection />
      <div className="w-full">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="w-full">
        <Days />
      </div>
      <div className="w-full">
        <More />
      </div>
      <div className="w-full bg-black">
        <Casousel />
      </div>
      <div className="w-full">
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default App;
