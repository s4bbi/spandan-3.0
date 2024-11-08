import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import Days from '../components/HomeComponents/Days';
import Partners from '../components/HomeComponents/Partners';
import Casousel from '../components/HomeComponents/Carousel';
import "../index.css";

const App = () => {
  const targetDate = new Date("2024-11-18T09:59:59");
  return (
     <div className="h-screen w-screen flex flex-col bg-black mt-0">
      <Navbar />
      <div className=" flex items-left  justify-center  mt-0"> {/* Adjust margin-top here */}
        <HeroSection /> 
      </div>
      <CountdownTimer targetDate={targetDate} />
      <div>
      <Days />
      </div>
      <div>
      <Partners />
      </div>
      <div>
      <Casousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;