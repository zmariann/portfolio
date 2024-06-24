"use client";
import Link from "next/link";
import Multimedia from "./_components/importantWords/multimedia";
import Photo from "./_components/importantWords/photo";
import Code from "./_components/importantWords/code";
import Creating from "./_components/importantWords/creating";
import Adobe from "./_components/importantWords/adobe";
import Personalised from "./_components/importantWords/personalised";
import { useEffect } from "react";
import { transitionAnim } from "./_components/transitionAnimEffect";

export default function Page() {
  useEffect(() => {
    transitionAnim();
  }, []);
  return (
    <div>
      <div className="hidden transitionAnim flexbox justify-center items-center flex-col">
        <div className="md:pl-[0px] md:pr-[0px] mt-[25%] md:mt-[15%] mb-[10%] md:mb-[15%]">
          <div className="title">PORTFOLIO</div>

          <div className="display-linebreak">
            UNIQUE MULTIMEDIA PROJECTS {"\n"}
            CREATED BY MARIANN ZÁSZLÓS
          </div>

          <Link className="underline" href="/about">
            READ MORE
          </Link>
        </div>
      </div>

      <Multimedia></Multimedia>
      <Photo></Photo>
      <Code></Code>
      <Creating></Creating>
      <Adobe></Adobe>
      <Personalised></Personalised>

      <div className="">*CLICK ON THESE WORDS TO GET THE DETAILS</div>

      <div className="md:hidden">
        <img className="w-full h-auto" src="weblap.jpg" alt="indexPageMobile" />
      </div>

      <div className="md:flex hidden transitionAnim">
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
      </div>

      <div className="hidden transitionAnim flexbox justify-center items-center my-[5%]">
        <div className="text-sm md:text-base">
          <p>MARIANN ZÁSZLÓS</p>
          <p>INFO@ZMARIANN.COM</p>
        </div>
      </div>

      <div className="border-t-[3px] border-mainBlack">
        <div className="hidden md:flex ml-5">
          
          <a
            className="mt-5 mb-3 ml-5 mr-4"
            target="_blank"
            href="https://www.linkedin.com/in/zmariann/"
          >
            LINKEDIN
          </a>
          <a
            className="mt-5 mb-3 ml-5 mr-4"
            target="_blank"
            href="https://github.com/zmariann"
          >
            GITHUB 
          </a>
           <div className="mt-5 mb-3 ml-5 mr-4">© ZAMARKA 2024</div>
          
        </div>

        <div className="flexbox md:hidden px-4 pb-3 pt-2 gap-4">
          <a
            href="https://www.linkedin.com/in/zmariann/"
            target="_blank"
            rel="linkedin"
          >
            <img src="linkedin.png" alt="github" />
          </a>

          <a href="https://github.com/zmariann" target="_blank" rel="github">
            <img src="github.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
