"useClient";
import React from "react";
import { useState } from "react";
import Popup from "../popup";

export default function Code() {
  const [codePopup, setCodePopup] = useState(false);

  return (
    <div className="impWOuter hidden transitionAnim">
      <div className="impWInner" onClick={() => setCodePopup(true)}>
      CODING STUFF
      </div>
      <Popup trigger={codePopup} setTrigger={setCodePopup}>
        <div>code</div>
      </Popup>
    </div>
  );
}
