export default function Footer() {
  return (
    <div className="border-t-[3px] border-mainBlack w-full bg-background">
      <div className="hidden md:flex ml-5">
        <a
          className="mt-5 mb-3 ml-5 mr-4"
          target="_blank"
          href="https://www.linkedin.com/in/zmariann/"
        >
          LINKEDIN
        </a>
        <a
          className="mt-5 mb-3 ml-5 mr-4"
          target="_blank"
          href="https://github.com/zmariann"
        >
          GITHUB
        </a>
        <div className="flex justify-end w-full mt-5 mb-3 ml-5 mr-4">
        <div className="">© ZAMARKA</div>

        </div>
      </div>

   

      <div className="flexbox md:hidden px-4 pb-3 pt-2 gap-4">
        <a
          href="https://www.linkedin.com/in/zmariann/"
          target="_blank"
          rel="linkedin"
        >
          <img src="linkedin.png" alt="github" />
        </a>

        <a href="https://github.com/zmariann" target="_blank" rel="github">
          <img src="github.png" alt="linkedin" />
        </a>
        
      </div>

    </div>
  );
}
