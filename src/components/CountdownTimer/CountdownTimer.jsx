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
<div className="bg-black height-500vh  flex items-center justify-center">
      <div className="flex space-x-20 text-white" style={{ fontSize: '64px', fontFamily: 'gL' }}>
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}D</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}H</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}M</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500">{timeLeft.seconds}S</span>
        </div>
      </div>
      </div>
  );
};

export default CountdownTimer;