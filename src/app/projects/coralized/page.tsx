import { images } from "../coralized/_components/imgcoralized";
import Horizontal from "../_components/horizontalGallery";

export default function Coralized() {
  return (
    <div>
      <Horizontal
        title="Coralized"
        description="Jewelleries are designed and made by Henrietta Horváth.
        This series was created during the lockdowns.
        Although I wasn't fully aware of it at the time,
        looking back, that period was filled with a lot of creative work.
        I was constantly photographing and painting.
        I started to let go of the expectations I had taken on in various institutions.
        I felt that I couldn't wait any longer, it was now or never, I had to bring out what I could from within myself.
        That's how these pictures were born.
        So I was sitting at home thinking about how I should portray these jewelry pieces.
        I couldn't go out to buy props, I had to use the things I had at home for the photography.
        Suddenly, I somehow noticed the bouquet I had received as a gift from one of my very kind clients after documenting an event.
        I started to take apart the completely dried plants and used them to build the compositions."
        images={images}
        alt="coralized"
      />
    </div>
  );
}
