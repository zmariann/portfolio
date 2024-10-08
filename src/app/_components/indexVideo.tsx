"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function IndexVideo() {
  return (
    <div className="transitionAnim">
      <div className="hidden sm:flex">
        <ReactPlayer
          url="multimedia.mp4"
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
      <div className="sm:hidden">
        <ReactPlayer
          url="mobileSize.mp4"
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
    </div>
  );
}
