import VideoPlayer from "../_components/videoPlayer";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="about md:mb-4 md:mt-[10%] mt-[25%]">ABOUT</div>

      <div className="effraBold md:text-2xl text-sm md:w-[50%] w-[90%] mb-[1%]">
        Basically, if I see an empty space I feel irresistible desire to fill
        with content.
      </div>

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm">
        I am Mariann Kincső Zászlós and I live in Hungary. Here I would like to represent what I've been
        working on in recent years.{"\n"}
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto"
        src="_MG_2650_1.jpg"
        alt="portrait"
      />

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm mt-[1%]">
        I united my full-stack programming skills with my still life and product
        photography obsession. However nowadays I mostly take art reproduction photography for museums and create audiovisual social media content.
        Actually  I'm trying to stepping out of my comfort zone sometimes, here is an example:
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto"
        src="skydive.jpg"
        alt="skydive"
      />

    </div>
  );
}


