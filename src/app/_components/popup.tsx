"use client";
import { ReactNode } from "react";

interface Popup {
  children: ReactNode;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup(props: Popup) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-background flex-col">
      <button
        className="sm:m-2 font-regradeBold text-xl"
        onClick={() => props.setTrigger(false)}
      >
        X
      </button>
      <div className="flex justify-center items-center">{props.children}</div>
    </div>
  ) : (
    ""
  );
}
