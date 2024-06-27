"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 540) setActiveNav(true);
    else setActiveNav(false);
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center justify-between w-full md:px-16 px-6 py-8 fixed top-0 z-[999] text-slate-900 ${activeNav && "bg-beige  rounded-b-lg shadow"}`}
    >
      <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl cursor-pointer font-publicSans font-black">MK</Link>

      {isOpen ? (
        <h1
          onClick={() => setIsOpen(false)}
          className="text-3xl md:hidden z-50 text-beige"
        >
          <IconX />
        </h1>
      ) : (
        <h1 onClick={() => setIsOpen(true)} className="text-3xl md:hidden z-50">
          <IconMenu2 />
        </h1>
      )}

      <section
        className={`w-full h-screen md:hidden absolute text-beige font-carlgine text-5xl flex flex-col items-center justify-center space-y-8 bg-slate-900 top-0 ${isOpen ? "left-0" : "left-[1000px]"} transition-all duration-500`}
      >
        <Link onClick={() => setIsOpen(false)} href="/about" className="cursor-pointer">
          About
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/work" className="cursor-pointer">
          Work
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/blog" className="cursor-pointer">
          Blog
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/contact-me" className="cursor-pointer">
          Contact
        </Link>
        <section className="absolute bottom-10">
          <h1 className="text-sm text-center opacity-70">Socials</h1>
          <section className="flex text-xl space-x-3">
            <Link target="_blank" href="https://github.com/MKMukeshkannan">
              GitHub
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mukesh-kannan-mk/"
            >
              LinkedIn
            </Link>
            <Link target="_blank" href="https://dev.to/mkmukeshkannan">
              Dev.to
            </Link>
          </section>
        </section>
      </section>

      <section className="hidden md:flex space-x-2 font-carlgine text-xl font-bold">
        <Link onClick={() => setIsOpen(false)} href="/about" className="cursor-pointer">
          About
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/work" className="cursor-pointer">
          Work
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/blog" className="cursor-pointer">
          Blog
        </Link>
        <Link onClick={() => setIsOpen(false)} href="/contact-me" className="cursor-pointer">
          Contact
        </Link>
      </section>
    </motion.nav>
  );
}
