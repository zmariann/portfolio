"useClient";
import React from "react";
import { useState } from "react";
import Popup from "../popup";

export default function Personalised() {
  const [personalisedPopup, setPersonalisedPopup] = useState(false);

  return (
    <div className="impWOuter">
      <div className="impWInner" onClick={() => setPersonalisedPopup(true)}>
      personalised
      </div>
      <Popup trigger={personalisedPopup} setTrigger={setPersonalisedPopup}>
        <div>Personalised contentke!!!</div>
      </Popup>
    </div>
  );
}