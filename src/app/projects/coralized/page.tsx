import { images } from "../coralized/_components/imgcoralized";
import Horizontal from "../_components/horizontalGallery";

export default function Coralized() {
  return (
    <div>
      <Horizontal
        title="CORALIZED"
        description="The jewelleries are designed and made by Henrietta Horváth.
        This series was made during lockdown. I was sitting at home thinking about how can I represent these jewels.
        All of the shops were closed, I couldn't buy any suitable set design for the shoot.
        Somehow when I started to make sketches it come to my mind that one of my clients gave me an unusual present after a shooting, a bouquet which I had completely forgotten.
        I found the flowers, they were dried.
        I realized how intersting colors and shapes these plants have and I started to use them and create the compostions for each piece of jewel.
        Finally, I chose a cheerful, vivid look which I hope can make these piece of handmade creations memorable."
        images={images}
        alt="coralized"
      />
    </div>
  );
}
