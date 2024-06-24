import { images } from "../mixed/_components/imgmixed";
import Horizontal from "../_components/horizontalGallery";

export default function Pigments() {
  return (
    <div>
      <Horizontal
        title="PRODUCTS"
        description=""
        images={images}
        alt="products"
      />
    </div>
  );
}