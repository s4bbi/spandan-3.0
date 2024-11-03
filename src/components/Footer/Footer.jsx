import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 text-center w-full">
      {/* Navigation links */}
      <nav className="mb-4 flex justify-center space-x-8 text-lg">
        <a href="#home" className="hover:text-yellow-500">HOME</a>
        <a href="#events" className="hover:text-yellow-500">EVENTS</a>
        <a href="#teams" className="hover:text-yellow-500">TEAMS</a>
        <a href="#gallery" className="hover:text-yellow-500">GALLERY</a>
      </nav>

      {/* Logo */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold">LOGO</h1>
      </div>

      {/* Social media icons */}
      <div className="mb-4 flex justify-center space-x-6 text-yellow-500 text-2xl">
        <a href="#instagram" aria-label="Instagram" className="hover:text-white">
          <i className="fab fa-instagram"></i> {/* Replace with appropriate icon */}
        </a>
        <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
          <i className="fab fa-linkedin"></i> {/* Replace with appropriate icon */}
        </a>
        <a href="#x" aria-label="X" className="hover:text-white">
          <i className="fab fa-twitter"></i> {/* Replace with appropriate icon */}
        </a>
        <a href="#facebook" aria-label="Facebook" className="hover:text-white">
          <i className="fab fa-facebook"></i> {/* Replace with appropriate icon */}
        </a>
      </div>

      <hr className="border-t border-gray-600 my-4" />

      {/* Footer note */}
      <div className="text-sm">
        <p>
          Designed with <span className="text-red-500">❤️</span> by{' '}
          <a href="#yours-truly" className="text-yellow-500 hover:underline">Yours Truly</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
