import { title, description, images } from "../coralized/_components/imgcoralized";
import Gallery from "../_components/gallery";

export default function Coralized() {
  return (
    <div>
      <Gallery
        title={title}
        description={description}
        images={images}
      ></Gallery>
    </div>
  );
}
