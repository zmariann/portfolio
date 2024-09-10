import { title, description, images } from "./_components/coralizedDetails";
import Description from "@/app/_components/description";
import GalleryPopup from "@/app/_components/galleryPopUp";
import Link from "next/link";

export default function Coralized() {
  let descriptTitle: string = "Story of " + title;
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <div className="mt-[20%] sm:mt-[5%] h-[60vh] sm:h-auto">
        <div className="font-regonia text-[15vw] sm:text-[10vw] md:text-[6vw] tracking-wide-5 leading-none">
          {title}
        </div>
        <div className="flex sm:justify-between sm:flex-row flex-col border-[2px] border-mainBlack p-2">
          <Description text={description} title={descriptTitle}></Description>
          <div className="hidden sm:block">&nbsp;|&nbsp;</div>
          <GalleryPopup images={images}></GalleryPopup>
          <div className="hidden sm:block">&nbsp;|&nbsp;</div>
          <Link className="text-sm sm:text-base" href="/">
            Making of
          </Link>
        </div>
      </div>
    </div>
  );
}
