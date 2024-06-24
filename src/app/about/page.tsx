import VideoPlayer from "../_components/videoPlayer";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="about md:mb-4 md:mt-[10%] mt-[25%]">ABOUT</div>

      <div className="md:text-2xl text-sm md:w-[50%] w-[90%] mb-[1%]">
      Usually, when I see a white, empty surface, I immediately start thinking about how to fill it, how to make something out of it...
      </div>

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm">
        I am Mariann Zászlós and I live in Hungary. Here I would like to represent what I've been
        working on in recent years. I united my full-stack programming skills with my still life and product
        photography obsession. However nowadays I mostly take art reproduction photography for museums and create audiovisual social media content.
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto mt-[1%]"
        src="_MG_2650_1.jpg"
        alt="portrait"
      />

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm mt-[1%]">
       
        Actually  I'm trying to stepping out of my comfort zone sometimes, here is an example:
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto mt-[1%] mb-[1%]"
        src="skydive.jpg"
        alt="skydive"
      />

    </div>
  );
}


