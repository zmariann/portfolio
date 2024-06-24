"useClient";
import React from "react";
import { useState } from "react";
import Popup from "../popup";

export default function Creating() {
  const [creatingPopup, setCreatingPopup] = useState(false);

  return (
    <div className="impWOuter">
      <div className="impWInner" onClick={() => setCreatingPopup(true)}>
      CREATING PROJECTS
      </div>
      <Popup trigger={creatingPopup} setTrigger={setCreatingPopup}>
        <div>creating contentke!!!</div>
      </Popup>
    </div>
  );
}
