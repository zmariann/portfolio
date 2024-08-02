"use client"
import { useState } from "react";
import Popup from "./popup";
import ImageGallery from "../projects/_components/ImageGallery";
import { images } from "../projects/coralized/_components/coralizedDetails";

export default function GalleryPopup() {
  const [galleryPopup, setGalleryPopup] = useState(false);

  return (
    <div className="">
      <button className="" onClick={() => setGalleryPopup(true)}>
        Gallery
      </button>
      <Popup trigger={galleryPopup} setTrigger={setGalleryPopup}>
      <ImageGallery
        images={images}
      ></ImageGallery>
      </Popup>
    </div>
  );
};
