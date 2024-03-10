import Image from "next/image";

interface prop {
  index: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

export default function BestWorkComponent({
  index,
  type,
  title,
  description,
  image,
}: prop) {
  return (
    <section
      className={`flex overflow-hidden items-center ${index === 0 ? "border-y-2" : "border-b-2"} py-5  h-80 bggreen-100`}
    >
      <section className="h-full w-1/3 overflow-hidden rounded-xl">
        <Image
          alt="tk"
          width={500}
          height={300}
          style={{ width: "auto", height: "full" }}
          src={image}
        />
      </section>

      <section className="w-0 space-y-5 flex-grow p-8 ">
        <h1 className="text-5xl font-publicSans text-slate-800">{title}</h1>

        <p className="text-xl font-carlgine">{description}</p>
        <button className="font-publicSans rounded-md px-4 p-3 bg-slate-800 text-beige">
          Learn More
        </button>
      </section>

      <section className=" h-full w-16  flex items-center justify-center">
        <h1 className="text-4xl text-slate-800 font-publicSans [writing-mode:vertical-lr]">
          {type.toUpperCase()}
        </h1>
      </section>
    </section>
  );
}
