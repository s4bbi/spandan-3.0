import React, { useState, useEffect } from 'react';
import Hackathon2 from '../../assets/Carousel/Hackathon2.jpg';
import Dashboard from '../../assets/Carousel/Dashboard.png';

const ImageCarousel = () => {
  // Array of image URLs
  const images = [
    Hackathon2, // Use the imported image directly
    Dashboard,
    Hackathon2,
    Dashboard,
    Hackathon2,
    Dashboard,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Get visible images (show 3 images at a time)
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="bg-black overflow-hidden relative max-w-5xl mx-auto p-4">
      <div className="flex transition-transform duration-500 ease-in-out">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`} // More descriptive alt text is better
            className="w-1/3 object-cover mx-2" // Add margin for spacing between images
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;