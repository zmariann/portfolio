"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const btnRef = useRef(null);

  function toggleMenu() {
    setMenu(!showMenu);
  }

  useEffect(() => {
    const closeDropdown = (): void => {
      setMenu(false);
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="flex border-b-[3px] border-mainBlack bg-background fixed w-full justify-end md:justify-between md:pt-6 md:pb-4 md:px-8">
      <div className="hidden md:flex">
        <Link href="/">
          ///
        </Link>
      </div>

      <div className="hidden md:flex gap-6">
        {navLinks.map((d, i) => (
          <Link className="" key={i} href={d.href}>
            {d.label}
          </Link>
        ))}
      </div>

      {showMenu && (
        <div className="fixed w-full h-screen flex flex-col items-center border-[3px] border-mainBlack bg-background md:hidden requires-no-scroll">
          <section className="my-4 flex flex-col items-center gap-1">
            <Link className="" href="/">
              HOME
            </Link>
            {navLinks.map((d, i) => (
              <Link className="" key={i} href={d.href}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>
      )}

      <button ref={btnRef} onClick={toggleMenu} className="md:hidden">
        {showMenu ? (
          <div>
            <div className="mr-1 mt-[15px] mb-[2px]">menu</div>
          </div>
        ) : (
          <div className="flex justify-end">
            <img
              className="w-[60%] mb-2 mr-1 mt-[7px] pr-1"
              src="menu.png"
              alt="menu"
            />
          </div>
        )}
      </button>
    </div>
  );
}
