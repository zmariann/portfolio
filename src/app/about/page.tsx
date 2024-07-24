import VideoPlayer from "../_components/videoPlayer";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col">
        <div className="about md:mb-4 md:mt-[10%] mt-[25%]">
          About
        </div>

      <div className="md:text-2xl text-sm md:w-[50%] w-[90%] mb-[1%]">
        Usually, when I see a white, empty surface, I immediately start thinking
        about how to fill it, how to make something out of it...
      </div>

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm">
        During the search for my path what always kept coming back was the love
        of creation the wonder of bringing something into existence from
        nothing. Whatever life brought the pieces of those events make up the
        whole that is now. That's how this website came into existence. {"\n"}
        Zamarka is a word assembled from my name under which I create my multimedia
        works. I have been involved in photography for 10 years and for quite a
        few years I have also been creating video content. In addition to this,
        I completed a programming bootcamp which among other things provided
        me with my frontend knowledge.
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto mt-[1%]"
        src="_MG_2650_1.jpg"
        alt="portrait"
      />

      <div className="md:w-[50%] w-[90%] display-linebreak md:text-base text-sm mt-[1%]">
      Thank you for visiting my page,{"\n"}
      Zamarka / Mariann Kincső Zászlós
      </div>

      <img
        className="md:w-[50%] w-[90%] h-auto mt-[1%] mb-[1%]"
        src="skydive.jpg"
        alt="skydive"
      />
    </div>
  );
}
