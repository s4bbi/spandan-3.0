import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  // Array of image URLs
  const images = [
    "C:\Users\dangw\Downloads\Hackathon.jpg",
    "C:\Users\dangw\Downloads\Hackathon.jpg",
    "C:\Users\dangw\Downloads\Hackathon.jpg",
    "C:\Users\dangw\Downloads\Hackathon.jpg",
    "C:\Users\dangw\Downloads\Hackathon.jpg",
    "C:\Users\dangw\Downloads\Hackathon.jpg",
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
    <div className="overflow-hidden relative max-w-5xl mx-auto">
      <div className="flex transition-transform duration-500 ease-in-out">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
            className="w-1/3 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
