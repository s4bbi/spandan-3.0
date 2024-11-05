// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
    return (
        <section className="flex items-center justify-between px-6 lg:px-20 py -12 bg-black text-white box-border">
            <div className="flex flex-col gap-0">
                <h1 className="text-4xl font-bold text-yellow-300 text-left max-w-md font-mR ">
                    spandan
                    <span className="absolute inset-0 "></span>
                </h1>
                <h2 className="text-4xl font-bold text-border text-left relative font-gL">
                    3.0
                    <span className="absolute inset-0 "></span>
                </h2>
                <h3 className="text-xl text-gray-300 opacity-90 mt-2 mb-8 font-gL">Pulsing Innovation, Igniting Possibilities!</h3>
                <button className="bg-yellow-300 border-none py-4 px-8 text-lg cursor-pointer rounded-full text-black font-bold gL-5 transition duration-300 ease-in-out shadow-[0px_4px_10px_rgba(255,235,59,0.5)] hover:bg-yellow-400">
                    Register Now
                </button>
                <div className="flex gap-12 mt-10">
                    <div className="text-center">
                        <p className="text-gray-400 font-gL text-base mb-1">Events</p>
                        <p className="text-2xl font-mR font-bold text-yellow-300">21+</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400  font-gL text-base mb-1">Prizes upto</p>
                        <p className="text-2xl font-bold font-mR  text-yellow-300">3,50,000</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400 font-gL text-base mb-1">Footfall</p>
                        <p className="text-2xl font-bold font-mR text-yellow-300">1000+</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end"> {/* Change justify-between to justify-end */}
    <div className="flex items-center">
       
        <img src="src/assets/Images/robot left.webp" alt="Robot" className="w-1/10 max-w-md mx-auto " /> {/* Adjusted width and height */}
    </div>
</div>
        </section>
    );
}

export default HeroSection;