"useClient";
import React from "react";
import { useState } from "react";
import Popup from "../popup";

export default function Photo() {
  const [photoPopup, setPhotoPopup] = useState(false);

  return (
    <div className="impWOuter">
      <div className="impWInner" onClick={() => setPhotoPopup(true)}>
        PHOTOGRAPHY
      </div>
      <Popup trigger={photoPopup} setTrigger={setPhotoPopup}>
        <div>photo cont</div>
      </Popup>
    </div>
  );
}
