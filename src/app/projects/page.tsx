import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="projects">
          Projects
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
