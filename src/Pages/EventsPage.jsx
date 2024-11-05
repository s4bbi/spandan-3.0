import React from 'react';

const EventsPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-8">
      {/* <nav className="w-full flex justify-between items-center py-4 px-8">
        <div className="text-white text-xl font-bold">LOGO</div>
        <ul className="flex space-x-8 text-gray-300">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#events" className="text-white">Events</a></li>
          <li><a href="#teams" className="hover:text-white">Teams</a></li>
          <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
        </ul>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300">Register Now</button>
      </nav> */}
      <div className="flex flex-row items-center mt-16 text-left">
        <div className="flex flex-col items-start mr-8">
          <h1 className="text-6xl font-bold font-72 font-mR mb-4">EVENTS</h1>
          <p className="text-gray-300 max-w-lg leading-relaxed">
            Join Spandan 24 at GBPIET, Pauri-Garhwal, where we focus on <span className="text-yellow-400 font-eSB">Rural Revive: Tech Solutions for Rural Challenges.</span> 
            Our events offer a platform for innovation, collaboration, and problem-solving with a futuristic edge.
          </p>
        </div>
        <div>
          <img src="src/assets/Images/eventsHand.webp" alt="Robotic Hand" className="w-1/10 max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;