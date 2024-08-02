"use client";
import { ReactNode } from "react";

interface Popup {
  children: ReactNode;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup(props: Popup) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-background flex justify-center items-center requires-no-scroll">
      <div className="md:w-3/4 w-[95%] bg-slate-50 flex items-center flex-col">
        <button
          className="bg-red-400"
          onClick={() => props.setTrigger(false)}
        >
          <img className="" src="close.png" alt="menu" />
        </button>
        <section className="bg-slate-500">{props.children}</section>
      </div>
    </div>
  ) : (
    ""
  );
}
