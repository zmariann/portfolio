"use client";
import { ReactNode } from "react";

interface Popup {
  children: ReactNode;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup(props: Popup) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-teal-300 requires-no-scroll flex-col">
        <button className="m-2 py-1 px-2 bg-orange-200" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className="flex justify-center items-center bg-slate-200">{props.children}</div>
        
    </div>
  ) : (
    ""
  );
}
