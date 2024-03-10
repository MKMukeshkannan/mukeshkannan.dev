"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <nav className="flex items-center justify-between w-full md:px-16 px-6 py-8 fixed top-0 z-[999] text-slate-900">
      <h1 className="text-3xl cursor-pointer font-publicSans font-black">MK</h1>

      {isOpen ? (
        <h1
          onClick={() => setIsOpen(false)}
          className="text-3xl md:hidden z-50 text-beige"
        >
          x
        </h1>
      ) : (
        <h1 onClick={() => setIsOpen(true)} className="text-3xl md:hidden z-50">
          =
        </h1>
      )}

      <section
        className={`w-full h-screen md:hidden absolute text-beige font-carlgine text-5xl flex flex-col items-center justify-center space-y-8 bg-slate-900 top-0 ${isOpen ? "left-0" : "left-[1000px]"} transition-all duration-500`}
      >
        <h1 className="cursor-pointer">About</h1>
        <h1 className="cursor-pointer">Work</h1>
        <h1 className="cursor-pointer">Contact</h1>
        <section className="absolute bottom-10">
          <h1 className="text-sm text-center opacity-70">Socials</h1>
          <section className="flex text-xl space-x-3">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </section>
        </section>
      </section>

      <section className="hidden md:flex space-x-2 font-carlgine text-xl font-bold">
        <h1 className="cursor-pointer">About</h1>
        <h1 className="cursor-pointer">Work</h1>
        <h1 className="cursor-pointer">Contact</h1>
      </section>
    </nav>
  );
}
