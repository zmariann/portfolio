"use client";
import Link from "next/link";
import { useEffect } from "react";
import { transitionAnim } from "./_components/transitionAnimEffect";
import IndexVideo from "./_components/indexVideo";

export default function Page() {
  useEffect(() => {
    transitionAnim();
  }, []);
  return (
    <div>
      <div className="transitionAnim flexbox justify-center items-center flex-col h-[200px] md:h-[600px]">
        <div>
          <div className="title leading-none">Portfolio</div>

          <div className="display-linebreak">
            UNIQUE MULTIMEDIA PROJECTS {"\n"}
            CREATED BY ZAMARKA |{" "}
            <Link className="underline" href="/about">
              read more
            </Link>
          </div>
        </div>
      </div>

      <div className="impWOuter hidden transitionAnim">
        <div className="impWInner">ZAMARKA PRODUCES MULTIMEDIA CONTENT...</div>
      </div>

      <IndexVideo></IndexVideo>

      <div className="impWOuter hidden transitionAnim">
        <div className="impWInner">...SPECIALLY DESIGNED FOR YOU.</div>
      </div>

      <div className="transitionAnim flexbox justify-center items-center my-[5%]">
        <div className="text-sm md:text-base">
          <p>INFO@ZMARIANN.COM</p>
        </div>
      </div>
    </div>
  );
}
