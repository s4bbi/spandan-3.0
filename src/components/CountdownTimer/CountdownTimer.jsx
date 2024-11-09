import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black h-500vh flex items-center justify-center">
      <div
        className="flex space-x-10 sm:space-x-12 md:space-x-16 lg:space-x-20 text-white"
        style={{ fontFamily: 'gL' }}
      >
        <div className="flex flex-col items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span>{timeLeft.days}D</span>
        </div>
        <div className="flex flex-col items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span>{timeLeft.hours}H</span>
        </div>
        <div className="flex flex-col items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span>{timeLeft.minutes}M</span>
        </div>
        <div className="flex flex-col items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="text-yellow-500">{timeLeft.seconds}S</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;