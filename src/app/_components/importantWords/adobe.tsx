"useClient";
import React from "react";
import { useState } from "react";
import Popup from "../popup";

export default function Adobe() {
  const [adobePopup, setadobePopup] = useState(false);

  return (
    <div className="impWOuter">
      <div className="impWInner" onClick={() => setadobePopup(true)}>
      ADOBE SOFTWARES
      </div>
      <Popup trigger={adobePopup} setTrigger={setadobePopup}>
        <div>adobe contentke!!!</div>
      </Popup>
    </div>
  );
}