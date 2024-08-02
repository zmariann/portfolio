import { title, description, images } from "./_components/coralizedDetails";
import Description from "@/app/_components/description";
import GalleryPopup from "@/app/_components/galleryPopUp";
import Link from "next/link";

export default function Coralized() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-[90vh]">
      <div className="">
        <div className="horizontalGal ">{title}</div>
        <div className="flex justify-between border-[2px] border-mainBlack p-2">
          <Description text={description} title={title}></Description>
          <GalleryPopup></GalleryPopup>
          <Link className="" href="/">
            Making of
          </Link>
        </div>
      </div>
    </div>
  );
}
