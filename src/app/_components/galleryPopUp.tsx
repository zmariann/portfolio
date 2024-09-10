"use client";
import { useState } from "react";
import Popup from "./popup";
import ImageGallery from "../projects/_components/ImageGallery";

interface GalleryPopupProps {
  images: string[];
}

export default function GalleryPopup(props: GalleryPopupProps) {
  const [galleryPopup, setGalleryPopup] = useState(false);

  return (
    <div>
      <button
        className="text-sm sm:text-base"
        onClick={() => setGalleryPopup(true)}
      >
        Gallery
      </button>
      <Popup trigger={galleryPopup} setTrigger={setGalleryPopup}>
        <ImageGallery images={props.images}></ImageGallery>
      </Popup>
    </div>
  );
}
