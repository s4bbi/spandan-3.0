import React from 'react';

const EventTimeline = () => {
  return (
    <div className="relative flex items-center bg-black text-white p-8 rounded-lg h-auto">
      {/* Image positioned absolutely */}
      <div className="absolute flex-shrink-0 ml-[20px]">
        <img src="src/assets/Images/watch.webp" alt="Watch" className="w-38 h-auto" />
      </div>
      {/* Adjust the container to take up the rest of the space */}
      <div className="flex-1 flex flex-col items-center space-y-12">
        <div className="flex justify-center space-x-24 text-center ml-64">
          <div>
            <h2 className="text-3xl font-bold">Day 01</h2>
            <p className="text-lg">Nov 9th</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Day 02</h2>
            <p className="text-lg">Nov 10th</p>
          </div>
        </div>
        {/* Event Timeline below the day elements */}
        <div className="flex flex-grow items-center justify-end text-4xl font-bold mt-8 w-[80%] h-40 bg-gray-700 p-4 rounded-lg text-right pr-20">
          <div className="ml-8">Event <span className="text-yellow-400 ml-2">Timeline</span></div>
        </div>
      </div>
    </div>
  );
};