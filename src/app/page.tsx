import Link from "next/link";

const importantWords = [
  {
    word: "MULTIMEDIA CONTENT ",
    href: "/about",
  },
  {
    word: "PHOTOGRAPHY ",
    href: "/keyWords/photo",
  },
  {
    word: "CODING STUFF",
    href: "/projects",
  },
  {
    word: "CREATING WORLDS ",
    href: "/contact",
  },
  {
    word: "ADOBE SOFTWARES ",
    href: "/contact",
  },
  {
    word: "PERSONALISED DESIGN*",
    href: "/contact",
  },
];

export default function Page() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="md:pl-[0px] md:pr-[0px] mt-[25%] md:mt-[15%] mb-[10%] md:mb-[15%] ml-2">
          <div className="title">PORTFOLIO</div>

          <div className="display-linebreak">
            UNIQUE MULTIMEDIA PROJECTS {"\n"}
            CREATED BY MARIANN ZÁSZLÓS
          </div>

          <Link className="underline" href="/about">
            READ MORE
          </Link>
        </div>
      </div>

      <div className="leading-[10vw] md:leading-[14vh] leading-[12vh] flex flex-col">
        {importantWords.map((d, i) => (
          <Link className="effraBold text-[10vw] text-[15vh] md:text-8xl hover:bg-[#e1cb9c]" key={i} href={d.href}>
            {d.word}
          </Link>
        ))}
      </div>

      <div className="">
        *CLICK ON THESE WORDS TO GET THE DETAILS
      </div>

      <div className="md:hidden">
        <img
          className="w-full h-auto"
          src="weblap.jpg"
          alt="skydive"
        />
      </div>

      <div className="md:flex hidden">
        <img
          className="md:w-[50%] w-[90%] h-auto"
          src="_MG_0912.jpg"
          alt="skydive"
        />
        <img
          className="md:w-[50%] w-[90%] h-auto"
          src="_MG_0983.jpg"
          alt="skydive"
        />
      </div>

      <div className="flex justify-center items-center my-[5%]">
        <div className="text-sm md:text-base">
          <p>MARIANN ZÁSZLÓS</p>
          <p>INFO@ZMARIANN.COM</p>
        </div>
      </div>

      <div className="border-t-[3px] border-mainBlack">
        <div className="hidden md:flex ml-5">
          <a className="mt-5 mb-3 ml-5 mr-4" target="_blank" href="https://www.linkedin.com/in/zmariann/" >LINKEDIN
          </a>
          <a className="mt-5 mb-3 ml-5 mr-4" target="_blank" href="https://github.com/zmariann" >GITHUB
          </a>
        </div>

        <div className="flex md:hidden px-4 pb-3 pt-2 gap-4">
          <a
            href="https://www.linkedin.com/in/zmariann/"
            target="_blank"
            rel="linkedin"
          >
            <img src="linkedin.png" alt="github" />
          </a>

          <a
            href="https://github.com/zmariann"
            target="_blank"
            rel="github"
          >
            <img src="github.png" alt="linkedin" />
          </a>

        </div>
      </div>
    </div>
  );
}