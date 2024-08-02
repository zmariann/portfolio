"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "PROJECTS",
    href: "/projects",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function NavBar() {
  const [showMenu, setMenu] = useState(false);

  useEffect(() => {
    const closeDropdown = (): void => {
      setMenu(false);
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div>
      <div className="hidden sm:flex sm:border-b-[3px] sm:border-mainBlack sm:bg-background sm:fixed sm:w-full sm:justify-between sm:pt-6 sm:pb-4 sm:px-8">
        <Link className="w-[100px] lg:w-28" href="/">
          <img src="logoNeue.png" alt="logo" />
        </Link>

        <div className="flex gap-6">
          {navLinks.map((d, i) => (
            <Link className="lg:text-3xl text-2xl lg:pt-2" key={i} href={d.href}>
              {d.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="sm:hidden flex justify-center w-full border-b-[2px] border-mainBlack fixed bg-background">
        <button onClick={() => setMenu(!showMenu)}>
          <img className="w-[100px] sm:m-3 m-1" src="logoNeue.png" alt="logo" />
        </button>
      </div>

      {showMenu && (
        <div className="w-full h-screen fixed top-0 left-0 gap-2 bg-background requires-no-scroll flex flex-col items-center justify-center">
          <Link className="text-3xl" href="/">
            HOME
          </Link>
          {navLinks.map((d, i) => (
            <Link className="text-3xl" key={i} href={d.href}>
              {d.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
