"use client"
import React, { useState, useEffect } from 'react';

interface ImageGalleryTimerProps {
  images: string[];
  interval?: number; // Interval in milliseconds (default is 3000ms)
}

const ImageGalleryTimer: React.FC<ImageGalleryTimerProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [images.length, interval]);

  return (
    <div className="w-full h-full flex justify-center items-start">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default ImageGalleryTimer;
