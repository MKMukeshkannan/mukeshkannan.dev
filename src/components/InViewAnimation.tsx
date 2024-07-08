"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface props {
  delay?: number;
  style?: string;
  children: JSX.Element;
}

const varients: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

export default function InViewAnimation({
  style = "",
  children,
  delay = 0,
}: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) animate.start("visible");
  }, [isInView, animate]);

  return (
    <motion.section
      ref={ref}
      variants={varients}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.4, delay }}
      className={style}
    >
      {children}
    </motion.section>
  );
}
