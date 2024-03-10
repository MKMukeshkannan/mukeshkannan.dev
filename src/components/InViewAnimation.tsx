"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface props {
  children: JSX.Element;
}

const varients: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

export default function InViewAnimation({ children }: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) animate.start("visible");
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={varients}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.section>
  );
}
