import ImageGallery from "../../_components/ImageGallery";
import { description, images, title } from "../_components/coralizedDetails";

export default function CoralizedGallery() {
  return <div className="">
        <ImageGallery
        title={title}
        description={description}
        images={images}
      ></ImageGallery></div>;
}
