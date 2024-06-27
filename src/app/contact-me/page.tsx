import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin } from "@tabler/icons-react";

export default function ContactMe() {
  return (
    <main className="relative bg-beige h-screen w-full p-10 xl:p-28 flex flex-col items-center justify-center">
      <h1 className="text-7xl text-center xl:self-start xl:text-[180px] font-carlgine mt-10 mb-10 xl:mb-0">CONTACT ME</h1>

      <form className="flex flex-col w-full h-auto xl:h-full max-w-xl space-y-3 text-2xl xl:self-end font-mono">
        <input className="focus:outline-none p-1 px-3 bg-beige border-b border-black" placeholder="name" />
        <input className="focus:outline-none p-1 px-3 bg-beige border-b border-black" placeholder="email" />
        <textarea className="h-full focus:outline-none p-1 px-3 bg-beige border-b border-black resize-none max-h-72" placeholder="message" />
        <button type="submit" className="bg-slate-800 text-beige py-2 hover:bg-beige border-2 border-slate-800 hover:text-slate-800">Submit</button>
      </form>
      
      <section className="absolute xl:left-52 bottom-0 h-20 flex space-x-5">

        <section className="p-2 rounded-full rounded-b-none bg-slate-800">
          <IconBrandGithub height={50} width={50} className="text-slate-800 p-2 shadow bg-beige rounded-full"/>
        </section>

        <section className="p-2 rounded-full rounded-b-none bg-slate-800">
          <IconBrandLinkedin height={50} width={50} className="text-slate-800 p-2 shadow bg-beige rounded-full"/>
        </section>

        <section className="p-2 rounded-full rounded-b-none bg-slate-800">
          <IconBrandGmail height={50} width={50} className="text-slate-800 p-2 shadow bg-beige rounded-full"/>
        </section>

      </section>

    </main>
  );
}
