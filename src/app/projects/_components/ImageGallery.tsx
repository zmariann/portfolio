"use client";
import React, { useEffect } from "react";
import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center relative w-[70%]">
        <img
          className=""
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <div className="absolute w-full flex justify-between">
          <button
            className="w-1/2 bg-red-500 opacity-70"
            onClick={handlePrevious}
            disabled={images.length <= 1}
          >
            prev
          </button>

          <button
            className="w-1/2 bg-green-600 opacity-70"
            onClick={handleNext}
            disabled={images.length <= 1}
          >
            next
          </button>
          <div className="absolute flex justify-center w-full bg-blue-800 opacity-70">
            <div className="text-xs">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
