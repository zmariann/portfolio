"use client";
import { useState } from "react";
import Popup from "./popup";

interface SinglePicPopupProps {
  image: string;
}

export default function GalleryPopup(props: SinglePicPopupProps) {
  const [singlePicPopup, setSinglePicPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setSinglePicPopup(true)}>Gallery</button>
      <Popup trigger={singlePicPopup} setTrigger={setSinglePicPopup}>
            <div></div>
      </Popup>
    </div>
  );
}