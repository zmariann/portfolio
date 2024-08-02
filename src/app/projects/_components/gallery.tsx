"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Description from "@/app/_components/importantWords/description";

type ImageGalleryProps = {
  title: string;
  description: string;
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  description,
}) => {
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
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full md:w-[50%] mt-[0%] md:mt-[3%] pl-2 pr-2 md:pl-[0px] md:pr-[0px]">
        <div className="horizontalGal mb-2 mt-[25%] md:mt-[10%]">{title}</div>
        <div className="flex gap-2 m-3">
          <Description text={description} title={title}></Description>
          <Description text={description} title={title}></Description>
        </div>
      </div>

      <div className="flex justify-center items-center mb-5">
        <button
          className="m-3"
          onClick={handlePrevious}
          disabled={images.length <= 1}
        >
          Prev
        </button>

        <img
          className="w-[50%] h-auto"
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
