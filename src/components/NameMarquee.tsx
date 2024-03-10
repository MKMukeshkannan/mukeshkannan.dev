"use client";
import { motion } from "framer-motion";

export default function NameMarquee() {
  return (
    <motion.h1
      initial={{ x: 0 }}
      animate={{ x: -1000 }}
      transition={{ repeat: Infinity, duration: 10 }}
      className="font-publicSans whitespace-nowrap text[224px] text-[190px] leading-none font-black tracking-tighter text-slate-800"
    >
      MUKESH KANNAN &bull; MUKESH KANNAN &bull; MUKESH KANNAN &bull; MUKESH
      KANNAN &bull;
    </motion.h1>
  );
}
