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
    <div className="w-full bg-lime-700">
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-[20%]">
          <button
            className="py-1 px-2"
            onClick={handlePrevious}
            disabled={images.length <= 1}
          >
            P
          </button>
        </div>

        <img
          className="w-[60%]"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />

        <div className="flex justify-center items-center w-[20%]">
          <button
            className="py-1 px-2"
            onClick={handleNext}
            disabled={images.length <= 1}
          >
            N
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center m-2">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
