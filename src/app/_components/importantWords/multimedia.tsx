"useClient";
import { useState } from "react";
import Popup from "../popup";


export default function Multimedia() {
  const [multimediaPopup, setMultimediaPopup] = useState(false);

  return (
    <div >
    <div className="impWOuter hidden transitionAnim">
      <div className="impWInner" onClick={() => setMultimediaPopup(true)}>
        MULTIMEDIA CONTENT
      </div>
      </div>
      <Popup trigger={multimediaPopup} setTrigger={setMultimediaPopup}>
        <div>
          high quality content for your brand.
          I gained video editing experience from different fields during past years.
          one of my favourite to make high quality content for social media.
        </div>
      </Popup>
    </div>
  );
}
