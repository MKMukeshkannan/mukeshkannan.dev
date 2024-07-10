import BlogCardComponent from "@/components/BlogCardComponent";
import { getAllPost } from "@/libs/contentful/services";

export default async function Blog() {
  const data = await getAllPost();

  if (data == "ERROR") {
    return (
      <main className="min-h-screen p-8 w-full flex flex-col items-center justify-center">
        <h1>SOMETHING WRONG </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen md:p-8 w-full bg-beige">
      <section className="flex flex-col items-start justify-end  h-[500px] md:py-10">
        <h1 className="font-publicSans text-center px-3 text-[130px] md:text-[300px] leading-none">
          BLOG
        </h1>
        <p className="font-carlgine px-5 md:text-3xl">
          This my blog, I use it to express my thought on tech and share thing i
          learn.
        </p>
      </section>

      <section className="gap-1 md:my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 md:p-0">
        {data.map((elm, i) => (
          <BlogCardComponent
            key={i}
            i={i}
            title={elm.title}
            description={elm.shortDescription}
            time={elm.timeCreated}
            thumbnail={elm.thumbnail.url}
            category={elm.slug}
          />
        ))}
      </section>
    </main>
  );
}
