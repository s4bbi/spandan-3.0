import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 w-full mt-[34px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold">
          LOGO
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 text-base font-medium text-center gap-5 items-center">
          <a href="#home" className="hover:text-yellow-300">HOME</a>
          <a href="#events" className="hover:text-yellow-300">EVENTS</a>
          <a href="#teams" className="hover:text-yellow-300">TEAMS</a>
          <a href="#gallery" className="hover:text-yellow-300">GALLERY</a>
        </nav>

        {/* Register Now Button */}
        <a href="#register" className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-300">
          REGISTER NOW
        </a>
      </div>
    </header>
  );
};

export default Navbar;