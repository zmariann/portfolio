import React from "react";
import { useState } from "react";
import Popup from "../popup";

type Description = {
  title: string;
  text: string;
};
const Description: React.FC<Description> = ({ title, text }) => {
  const [projectStory, setprojectStory] = useState(false);

  return (
    <div className="impWOuter">
      <button className="impWInner border-[2px] border-mainBlack p-2" onClick={() => setprojectStory(true)}>
        Story of {title}
      </button>
      <Popup trigger={projectStory} setTrigger={setprojectStory}>
        <div>{text}</div>
      </Popup>
    </div>
  );
};
export default Description;
