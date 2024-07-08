import { InViewAnimation } from "@/components";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function ContactMe() {
  return (
    <main className="relative bg-beige h-screen w-full p-10 xl:p-28 flex flex-col items-center justify-center overflow-clip">
      <InViewAnimation style="xl:self-start" delay={0.4}>
        <h1 className="text-7xl text-center xl:text-[180px] font-carlgine mt-10 mb-10 xl:mb-0">
          CONTACT ME
        </h1>
      </InViewAnimation>

      <form className="flex flex-col w-full h-auto xl:h-full max-w-xl space-y-3 text-2xl xl:self-end font-mono">
        <InViewAnimation delay={0.5} style="w-full">
          <input
            className="focus:outline-none w-full p-1 px-3 bg-beige border-b border-black"
            placeholder="name"
          />
        </InViewAnimation>
        <InViewAnimation delay={0.55} style="w-full">
          <input
            className="focus:outline-none w-full p-1 px-3 bg-beige border-b border-black"
            placeholder="email"
          />
        </InViewAnimation>
        <InViewAnimation delay={0.6} style="focus:h-full w-full">
          <textarea
            className=" w-full focus:outline-none h-full p-1 px-3 bg-beige border-b border-black resize-none max-h-72"
            placeholder="message"
          />
        </InViewAnimation>
        <InViewAnimation delay={0.65} style="w-full">
          <button
            type="submit"
            className="bg-slate-800 w-full text-beige py-2 hover:bg-beige border-2 border-slate-800 hover:text-slate-800"
          >
            Submit
          </button>
        </InViewAnimation>
      </form>

      <section className="absolute xl:left-52 bottom-0 h-20 flex space-x-5">
        <InViewAnimation
          delay={0.5}
          style="p-2 rounded-full rounded-b-none bg-slate-800"
        >
          <IconBrandGithub
            height={50}
            width={50}
            className="text-slate-800 p-2 shadow bg-beige rounded-full"
          />
        </InViewAnimation>

        <InViewAnimation
          delay={0.6}
          style="p-2 rounded-full rounded-b-none bg-slate-800"
        >
          <IconBrandLinkedin
            height={50}
            width={50}
            className="text-slate-800 p-2 shadow bg-beige rounded-full"
          />
        </InViewAnimation>

        <InViewAnimation
          delay={0.7}
          style="p-2 rounded-full rounded-b-none bg-slate-800"
        >
          <IconBrandGmail
            height={50}
            width={50}
            className="text-slate-800 p-2 shadow bg-beige rounded-full"
          />
        </InViewAnimation>
      </section>
    </main>
  );
}
