"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactPlayer
        url="introVid.mp4"
        width="100%"
        height="70%"
        controls={true}
        light={false}
        pip={true}
      />
    </div>
  );
}
