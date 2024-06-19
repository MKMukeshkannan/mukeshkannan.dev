import { InViewAnimation } from "@/components";
import ProjectCardComponent from "@/components/ProjectCardComponent";

export default function About() {
  return (
    <>
      <main className="min-h-screen p-8  md:pt-24 w-full flex flex-col -z-[999] text-slate-800">
        <section className="md:p-10 h-screen w-full md:h-96 flex flex-col justify-center">
          <InViewAnimation>
            <h1 className="text-9xl line-clamp-none font-carlgine">My Work</h1>
          </InViewAnimation>
          <InViewAnimation delay={0.1}>
            <p className="font-light text-xl md:pr-48">
              Here's a showcase of my coding adventures, each with its own
              backstory. During hackathons, I've channeled my inner coding
              superhero to craft innovative solutions at lightning speed. My
              internship projects? Think of them as my contributions to the
              corporate world, where I turned coffee into code (and
              occasionally, some pretty cool apps). Then there are my personal
              projects—those quirky, just-because-I-can experiments that kept me
              up at night, coding away for no other reason than pure curiosity
              and fun.
            </p>
          </InViewAnimation>
        </section>

        <section className="w-full space-y-5 mb-20 overflow-hidden">
          <InViewAnimation delay={0.4}>
            <h1 className="font-carlgine text-5xl">&#10209; Hack-A-Thons</h1>
          </InViewAnimation>

          <section className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <ProjectCardComponent
              title="Threads"
              description="VILGAX, a dynamic team fueled by a passion for programming excellence, stands as the Vanguard of Innovation and Logic in Games and Algorithms eXpedition."
              i={12}
            />
            <ProjectCardComponent
              title="AICTE"
              description="VILGAX, During the Smart India Hackathon, I developed a sophisticated meeting application for AICTE. This application streamlines the organization of meeting notes, schedules, and documentation."
              i={14}
            />

            <ProjectCardComponent
              title="CARA"
              description="10IQ, Multi-Lingual Conversational Assistance and Reality Augmentation (CARA) for E-Commerce with Gen-AI enhancements"
              i={16}
            />
          </section>
        </section>

        <section className="w-full space-y-5 mb-20 overflow-hidden">
          <InViewAnimation>
            <h1 className="font-carlgine text-5xl">&#10209; Internships</h1>
          </InViewAnimation>
          <section className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <ProjectCardComponent
              title="Nova Care Innovations"
              description="VILGAX, a dynamic team fueled by a passion for programming excellence, stands as the Vanguard of Innovation and Logic in Games and Algorithms eXpedition."
              i={0}
            />
            <ProjectCardComponent
              title="Takshashila"
              description="VILGAX, During the Smart India Hackathon, I developed a sophisticated meeting application for AICTE. This application streamlines the organization of meeting notes, schedules, and documentation."
              i={1}
            />

            <ProjectCardComponent
              title="BitSpace"
              description="10IQ, Multi-Lingual Conversational Assistance and Reality Augmentation (CARA) for E-Commerce with Gen-AI enhancements"
              i={2}
            />
          </section>
        </section>

        <section className="w-full space-y-5 mb-20 overflow-hidden">
          <InViewAnimation>
            <h1 className="font-carlgine text-5xl">
              &#10209; Personal Projects
            </h1>
          </InViewAnimation>
          <section className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <ProjectCardComponent
              title="UI Tweak"
              description="VILGAX, a dynamic team fueled by a passion for programming excellence, stands as the Vanguard of Innovation and Logic in Games and Algorithms eXpedition."
              i={0}
            />
            <ProjectCardComponent
              title="PG-TOR"
              description="VILGAX, During the Smart India Hackathon, I developed a sophisticated meeting application for AICTE. This application streamlines the organization of meeting notes, schedules, and documentation."
              i={1}
            />

            <ProjectCardComponent
              title="Study Stack"
              description="10IQ, Multi-Lingual Conversational Assistance and Reality Augmentation (CARA) for E-Commerce with Gen-AI enhancements"
              i={2}
            />

            <ProjectCardComponent
              title="Scribble"
              description="10IQ, Multi-Lingual Conversational Assistance and Reality Augmentation (CARA) for E-Commerce with Gen-AI enhancements"
              i={3}
            />
          </section>
        </section>
      </main>
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
    </>
  );
}
