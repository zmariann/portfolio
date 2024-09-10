"use client";
import React from "react";
import { useState } from "react";
import Popup from "./popup";
import Typewriter from "./typewriter";

type Description = {
  title: string;
  text: string;
};
const Description: React.FC<Description> = ({ title, text }) => {
  const [projectStory, setprojectStory] = useState(false);

  return (
    <div>
      <button
        className="text-sm sm:text-base"
        onClick={() => setprojectStory(true)}
      >
        {title}
      </button>
      <Popup trigger={projectStory} setTrigger={setprojectStory}>
        <div className="w-[100vw] h-[90vh] sm:w-[70vw] sm:h-[50vh] md:w-[80vw] md:h-[40vh] border-[10px] border-mainBlack pl-5 py-3 pr-2 overflow-y-scroll scrollbar-hide overflow-scroll">
          <Typewriter text={text} speed={20} />
        </div>
      </Popup>
    </div>
  );
};
export default Description;
