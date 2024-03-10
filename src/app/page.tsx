import { NameMarquee, NavBar } from "@/components";
import BestWorkComponent from "@/components/BestWorkComponent";
import Image from "next/image";
import { BestWork } from "@/libs/data";

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
      <section className="bg-slate-900 p-16 rounded-t-3xl">
        <h1 className="text-8xl font-publicSans text-beige mb-5">
          Who Am I ?{" "}
        </h1>
        <p className="text-beige font-carlgine text-xl max-w-3xl">
          I am Mukesh Kannan, second year pursuing my Computer Science degree at
          Chennai Institute of Technology, Chennai. I have an Inquiring mind. I
          am very adept at dealing with computational problems. I enjoy
          problem-solving, so I am passionately pursuing a career in the
          software development field.
          <br />
          <br />I am good at React, Express, C++, Figma, AWS, DevOps
        </p>
      </section>
      <section className="min-h-screen p-24">
        <h1 className="text-slate-800 text-center text-9xl mb-16 tracking-wider font-publicSans">
          Best Works
        </h1>

        {BestWork.map((work, index) => (
          <BestWorkComponent
            type={work.type}
            index={index}
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </section>

      <section className="bg-slate-800 p-24 ">
        <h1 className="text-beige text-8xl text-center border-b-2 pb-6 border-beige border-opacity-40 font-publicSans">
          Get In Touch
        </h1>
        <section className="text-center space-x-2 mt-6">
          <button className="text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4">Phone</button>
          <button className="text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4">Email</button>
          <button className="text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4">LinkedIn</button>
        </section>
      </section>

      <section className="text-beige bg-slate-800 flex items-end justify-between p-8 px-16">
        <h1 className="text-lg">
          &copy; Mukesh Kannan | All Rights Reserved 2024
        </h1>
        <section className="">
          <h1 className="text-xs opacity-75">Socials</h1>
          <section className="space-x-2">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </section>
        </section>
      </section>
    </main>
  );
}
