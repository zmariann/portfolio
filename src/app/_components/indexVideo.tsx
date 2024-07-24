"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function IndexVideo() {
  return (
    <div>
      <ReactPlayer
        url="multimedia.mp4"
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
      />
    </div>
  );
}
/*
        <img
          className="md:w-[50%] w-[90%] h-auto"
          src="_MG_0912.jpg"
          alt="indexPage01"
        />
        <img
          className="md:w-[50%] w-[90%] h-auto"
          src="_MG_0983.jpg"
          alt="indexPage02"
        />


             <div className="">
        <img className="w-full h-auto" src="weblap.jpg" alt="indexPageMobile" />
      </div>
        */
