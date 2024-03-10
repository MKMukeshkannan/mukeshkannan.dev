import { NameMarquee, NavBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-beige">
      <NavBar />
      <section className="flex flex-col items-start justify-end p-8 min-h-screen w-full relative overflow-hidden select-none">
        <p className="font-carlgine text-3xl">This is, </p>
        <Image
          alt="mukesh-kannan"
          src="https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg"
          width={400}
          height={600}
          className="opacity-60 left-20 absolute top-1/4 hidden lg:block"
        />
        <p className="absolute max-w-96 lg:right-20 opacity-60 lg:top-1/2 top-1/3  text-2xl font-carlgine text-right pr-3">
          I am a <em>Student</em>, aspiring to be a software developer, and this
          is my portfolio page.
        </p>
        <NameMarquee />
      </section>
      <section className="min-h-screen"></section>
    </main>
  );
}
