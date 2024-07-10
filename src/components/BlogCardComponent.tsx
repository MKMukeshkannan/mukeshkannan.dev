"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface prop {
  title: string;
  description: string;
  thumbnail: string;
  time: string;
  category: string;
  i: number;
}

const varients: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "tween", delay: 0.05 * i },
  }),
};

export default function BlogCardComponent({
  title,
  description,
  i,
  thumbnail,
  time,
  category,
}: prop) {
  const animate = useAnimation();

  const date = new Date(time);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      custom={i}
      className="relative w-full border border-black bg-beige p-8"
    >
      <section className="min-h-32 w-full flex flex-col items-start justify-center p-3">
        <section className="w-full h-10 flex justify-between items-center font-carlgine mb-5">
          <h1 className="align-bottom">
            {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
          </h1>
          <h1 className="bg-black text-beige p-1 px-4 rounded-3xl">
            {category}
          </h1>
        </section>

        <img
          src={thumbnail}
          alt="place-holder-postor"
          className="object-cover w-full max-h-32 overflow-clip"
        />

        <h1 className="font-carlgine font-bold text-3xl mt-5">{title}</h1>

        <p className="text-xs font-light max-h-32 overflow-hidden text-ellipsis	text-justify">
          {description}
        </p>
      </section>
    </motion.section>
  );
}
