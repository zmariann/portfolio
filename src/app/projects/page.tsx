import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="ml-2 md:ml-0">
        <div className="projects md:mb-4 mb-1 mt-[25%] md:mt-[40%]">
          PROJECTS
        </div>
        <div className="md:text-2xl text-xl boldText">WEBSITES</div>

        <ul className="md:mb-4 mb-3">
          <li className="text-sm md:text-base">ALCHEMIST / COMING SOON</li>
        </ul>

        <div className="md:text-2xl text-xl boldText">PHOTOGRAPHY</div>

        <ul>
          <li>
            <Link className="text-sm md:text-base" href="/projects/coralized">
              CORALIZED
            </Link>
          </li>
          <li>
            <Link className="text-sm md:text-base" href="/projects/mixed">
              MIXED
            </Link>
          </li>
          <li>
            <Link className="text-sm md:text-base" href="/projects/pigments">
              PIGMENTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
