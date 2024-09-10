"use client";
import Description from "@/app/_components/description";
import ImageGalleryTimer from "./_components/timerGallery";

export default function About() {
  const imageUrls = ["/_MG_9500.jpg", "/_MG_9501-3.jpg"];

  const aboutText =
    "Usually, when I see a white, empty surface, I immediately start thinking about how to fill it, how to make something out of it. During the search for my path what always kept coming back was the love of creation, the wonder of bringing something into existence from nothing.  Whatever life brought the pieces of those events make up the whole that is now. That's how this website came into existence. Zamarka is a word assembled from my name under which I create my multimedia works. I have been involved in photography since 2013 and for quite a few years I have also been creating video content. In addition to this, I completed a programming bootcamp which among other things provided me with my frontend knowledge. Zamarka / Mariann Kincső Zászlós";

  return (
    <div className="flex items-center flex-col justify-center md:flex-row w-full h-screen">
      <div className="w-1/2 flex justify-center lg:justify-end mt-[20%] sm:mt-[5%] h-[60vh] sm:h-auto">
        <div>
          <div className="font-regonia text-[15vw] sm:text-[10vw] md:text-[6vw] tracking-wide-5 leading-none">
            About
          </div>
          <div className="flex sm:justify-between sm:flex-row flex-col border-[2px] border-mainBlack p-2">
            <Description title="About Zamarka" text={aboutText}></Description>
            <div className="hidden sm:block">&nbsp;|&nbsp;</div>
            <Description title="Skills" text={aboutText}></Description>
          </div>

          <div className="flex flex-col border-[2px] border-mainBlack p-1 mt-2">
            <div className="pl-1 text-sm sm:text-base">Zamarka in pictures</div>
            <div className="flex justify-between">
              <div className="w-[15vw] sm:w-[3vw]">
                <img src="portraitLogo.png" alt="logo" />
              </div>
              <div className="w-[15vw] sm:w-[3vw]">
                <img src="portraitLogo.png" alt="logo" />
              </div>
              <div className="w-[15vw] sm:w-[3vw]">
                <img src="portraitLogo.png" alt="logo" />
              </div>
              <div className="w-[15vw] sm:w-[3vw]">
                <img src="portraitLogo.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-20 w-1/2 mt-[6%] hidden lg:flex">
        <div className="md:w-3/6">
          <ImageGalleryTimer images={imageUrls} interval={1000} />
        </div>
      </div>
    </div>
  );
}
