import { images } from "../pigments/_components/imgpigments";
import Horizontal from "../_components/horizontalGallery";

export default function Pigments() {
  return (
    <div>
      <Horizontal
        title="PIGMENTS"
        description=""
        images={images}
        alt="pigments"
      />
    </div>
  );
}