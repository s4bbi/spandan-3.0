import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import Days from './components/HomeComponents/Days';
import "./index.css";

const App = () => {
  const targetDate = new Date("2024-11-18T09:59:59");
  return (
     <div className="h-screen w-screen flex flex-col bg-black mt-0">
      <Navbar />
      <div className=" flex items-left  justify-center  mt-0"> {/* Adjust margin-top here */}
        <HeroSection /> 
      </div>
      <CountdownTimer targetDate={targetDate} />
      <Days />
      <Footer />
    </div>
  );
}

export default App;