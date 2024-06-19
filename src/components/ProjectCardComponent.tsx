"use client";

import { PlaceHolderProject } from "@/assets";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface prop {
  title: string;
  description: string;
  i: number;
}

const varients: Variants = {
  hidden: { opacity: 0, x: 75 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { type: "tween", delay: 0.05 * i },
  }),
};

export default function ProjectCardComponent({ title, description, i }: prop) {
  const animate = useAnimation();

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
      className="relative flex items-end border border-black h-96 max-w-72 w-full md:max-w-96"
    >
      <section className="absolute top-10 right-0 space-y-3 flex flex-col items-end">
        <div className="p-2 w-fit  h-10 bg-beige border-y border-l border-black  rounded-l-full transition-all group">
          <a
            href="www.google.com"
            className="flex items-center justify-center gap-2"
          >
            <IconWorld className="animate-spin group-hover:animate-none" />
            <h1 className="font-publicSans hidden group-hover:block">
              More Info
            </h1>
          </a>
        </div>

        <div className="p-2 h-10 bg-beige border-y border-l border-black rounded-l-full transition-all w-fit group">
          <a
            href="www.google.com"
            className="flex items-center justify-center gap-2"
          >
            <IconBrandGithub />
            <h1 className="font-publicSans hidden group-hover:block">
              Source Code
            </h1>
          </a>
        </div>
      </section>

      <Image
        src={PlaceHolderProject}
        fill
        alt="place-holder-postor"
        className="object-cover -z-10"
      />
      <section className="min-h-32 w-full bg-beige flex flex-col items-start justify-center p-3 border-t border-black">
        <h1 className="font-carlgine font-bold text-3xl">{title}</h1>
        <p className="text-xs font-light">{description}</p>
      </section>
    </motion.section>
  );
}
