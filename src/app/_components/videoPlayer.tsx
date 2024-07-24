"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer() {
  return (
    <div className="w-full h-auto">
      <ReactPlayer
        url="multimedia.mp4"
        loop={true}
        playing={true}
      />
    </div>
  );
}
