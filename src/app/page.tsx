"use client";
import Link from "next/link";
import { useEffect } from "react";
import { transitionAnim } from "./_components/transitionAnimEffect";
import IndexVideo from "./_components/indexVideo";
import Footer from "./_components/footer";

export default function Page() {
  useEffect(() => {
    transitionAnim();
  }, []);
  return (
    <div>
      <div className="transitionAnim flexbox sm:justify-center sm:items-center md:h-[90vh] sm:h-[90vh] ml-3 sm:ml-0">
        <div>
          <div className="leading-none font-regonia text-[15vw] sm:text-[6vw] tracking-wide-5 mt-14 sm:mt-0">
            Portfolio
          </div>

          <div className="hidden xl:block max-sm whitespace-pre-line">
            UNIQUE MULTIMEDIA PROJECTS CREATED BY ZAMARKA |{" "}
            <Link className="underline" href="/about">
              read more
            </Link>
          </div>

          <div className="hidden sm:block xl:hidden max-sm whitespace-pre-line">
            UNIQUE MULTIMEDIA PROJECTS {"\n"}
            CREATED BY ZAMARKA |{" "}
            <Link className="underline" href="/about">
              read more
            </Link>
          </div>

          <div className="block sm:hidden whitespace-pre-line sm:text-xl md:text-2xl text-xs">
            UNIQUE MULTIMEDIA PROJECTS {"\n"}
            CREATED BY ZAMARKA {"\n"}
            <Link
              className="underline sm:text-xl md:text-2xl text-s"
              href="/about"
            >
              read more
            </Link>
          </div>
        </div>
      </div>

      <div className="leading-[10vw] transitionAnim mt-4 sm:mt-0 mb-2 sm:mb-0 font-regradeBold text-[10vw] md:text-8xl ml-2 md:ml-4">
        ZAMARKA PRODUCES MULTIMEDIA CONTENT...
      </div>

      <IndexVideo></IndexVideo>

      <div className="leading-[10vw] flexbox flex-col hidden transitionAnim">
        <div className="font-regradeBold text-[10vw] md:text-8xl ml-2 md:ml-4 mt-2">
          ...SPECIALLY DESIGNED FOR YOU.
        </div>
      </div>

      <div className="transitionAnim flexbox justify-center items-center my-[5%]">
        <div>
          <p className="text-xs sm:text-base">INFO@ZMARIANN.COM</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
