import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 w-full mt-[1px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl ">
          LOGO
        </div>

        {/* Navigation Links */}
        <nav className=" md:flex space-x-4 text-base text-center gap-5 items-center">
        <Link to="/">HOME</Link>
        <Link to="/events">EVENTS</Link>
          <Link to="/TEAMS" className="hover:text-yellow-300 font-gSB">TEAMS</Link>
          <Link to="/GALLERY" className="hover:text-yellow-300 font-gSB">GALLERY</Link>
        </nav>

        {/* Register Now Button */}
        <Link to="/register" className="bg-yellow-300 border-none py-4 px-8 text-lg cursor-pointer rounded-full text-black font-bold gL-5 transition duration-300 ease-in-out shadow-[0px_4px_10px_rgba(255,235,59,0.5)] hover:bg-yellow-400">
          REGISTER NOW
        </Link>
      </div>
    </header>
  );
};

export default Navbar;