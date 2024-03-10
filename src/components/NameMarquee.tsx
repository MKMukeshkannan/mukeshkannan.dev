"use client";
import { motion } from "framer-motion";

export default function NameMarquee() {
  return (
    <motion.h1
      initial={{ x: 0 }}
      animate={{ x: -2000 }}
      transition={{ repeat: Infinity, duration: 20, type: 'tween' }}
      className="font-publicSans whitespace-nowrap text[224px] text-[190px] leading-none font-black tracking-tighter text-slate-800"
    >
      MUKESH KANNAN &bull; MUKESH KANNAN &bull; MUKESH KANNAN &bull; MUKESH
      KANNAN &bull;
    </motion.h1>
  );
}
