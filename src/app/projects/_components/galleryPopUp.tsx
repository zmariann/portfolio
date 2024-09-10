"use client";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

interface GalleryPopupProps {
  images: string[];
}

export default function GalleryPopup({ images }: GalleryPopupProps) {
  const [galleryPopup, setGalleryPopup] = useState(false);

  return (
    <div>
      <button
        className="text-sm sm:text-base"
        onClick={() => setGalleryPopup(true)}
      >
        Gallery
      </button>

      {galleryPopup && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center bg-background flex-col">
          <button
            className="relative font-regradeBold text-xl z-[100]"
            onClick={() => setGalleryPopup(false)}
          >
            X
          </button>
          <ImageGallery images={images} />
        </div>
      )}
    </div>
  );
}
