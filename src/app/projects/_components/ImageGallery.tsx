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
    <div>
      <div className="flex justify-center items-center">
        <button
          className="m-3"
          onClick={handlePrevious}
          disabled={images.length <= 1}
        >
          Prev
        </button>

        <img
          className="w-[80%]"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <button
          className="m-3"
          onClick={handleNext}
          disabled={images.length <= 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
