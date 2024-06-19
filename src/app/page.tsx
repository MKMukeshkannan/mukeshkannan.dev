import { InViewAnimation, NameMarquee } from "@/components";
import BestWorkComponent from "@/components/BestWorkComponent";
import Image from "next/image";
import { BestWork } from "@/libs/data";
import { MukeshKannan, EarthWireFrame } from "@/assets";

export default function Home() {
  return (
    <main className="bg-beige">
      <section className="flex flex-col items-start justify-end p-8 min-h-screen w-full relative overflow-hidden select-none">
        <InViewAnimation>
          <p className="font-carlgine text-3xl">This is, </p>
        </InViewAnimation>

        <section className=" left-20 absolute top-1/4 ">
          <InViewAnimation>
            <Image
              alt="mukesh-kannan"
              src={EarthWireFrame}
              width={300}
              height={300}
              className="opacity-60 hidden lg:block"
            />
          </InViewAnimation>
        </section>

        <section className="absolute max-w-96 lg:top-1/2 top-1/3  lg:right-20 opacity-60">
          <InViewAnimation>
            <p className="text-2xl font-carlgine text-right pr-3">
              I am a <em>Student</em>, aspiring to be a software developer, and
              this is my portfolio page.
            </p>
          </InViewAnimation>
        </section>
        <NameMarquee />
      </section>
      <section className="bg-slate-900 p-8 lg:p-16 rounded-t-3xl lg:grid grid-cols-2">
        <InViewAnimation>
          <h1 className="text-7xl lg:text-8xl font-publicSans text-beige mb-5 self-end">
            Who Am I?
          </h1>
        </InViewAnimation>

        <section className="w-full h-96 row-span-2 relative col-start-2 my-4">
          <Image
            src={MukeshKannan}
            className="rounded-xl object-cover object-center"
            fill
            alt="mukeshkannan"
          />
        </section>

        <InViewAnimation>
          <p className="text-beige font-carlgine text-xl max-w-3xl">
            I am Mukesh Kannan, second year pursuing my Computer Science degree
            at Chennai Institute of Technology, Chennai. I have an Inquiring
            mind. I am very adept at dealing with computational problems. I
            enjoy problem-solving, so I am passionately pursuing a career in the
            software development field.
            <br />
            <br />I am good at React, Express, C++, Figma, AWS, DevOps
          </p>
        </InViewAnimation>
      </section>

      <section className="min-h-screen p-8 lg:p-24">
        <InViewAnimation>
          <h1 className="text-slate-800 text-center text-8xl lg:text-9xl mb-16 tracking-wider font-publicSans">
            Best Works
          </h1>
        </InViewAnimation>

        {BestWork.map((work, index) => (
          <BestWorkComponent
            key={index}
            type={work.type}
            index={index}
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </section>

      <section id="contact" className="bg-slate-800 p-8 lg:p-24 ">
        <InViewAnimation>
          <h1 className="text-beige text-8xl lg:text-8xl text-center border-b-2 pb-6 border-beige border-opacity-40 font-publicSans">
            Get In Touch
          </h1>
        </InViewAnimation>
        <section className="text-center space-x-2 mt-6">
          <a
            href="tel:7397220994"
            className="cursor-pointer text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4"
          >
            Phone
          </a>
          <a
            href="mailto:mukeshkannan311@gmail.com"
            className="cursor-pointer text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-kannan-mk/"
            className="cursor-pointer text-xl hover:text-slate-800 hover:bg-beige text-beige border-beige border rounded-lg p-2 px-4"
          >
            LinkedIn
          </a>
        </section>
      </section>

      <footer className="text-beige bg-slate-800 flex lg:flex-row flex-col-reverse lg:items-end items-center justify-between p-8 lg:px-16">
        <h1 className="text-xs lg:text-lg">
          &copy; Mukesh Kannan | All Rights Reserved 2024
        </h1>
        <section className="lg:text-right text-center lg:pb-0 pb-4">
          <h1 className="text-xs opacity-75">Socials</h1>
          <section className="space-x-2">
            <a target="_blank" href="https://github.com/MKMukeshkannan">
              GitHub
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mukesh-kannan-mk/"
            >
              LinkedIn
            </a>
            <a target="_blank" href="https://dev.to/mkmukeshkannan">
              Dev.to
            </a>
          </section>
        </section>
      </footer>
    </main>
  );
}
