export default function SpecificBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center graph-paper">
      <section className="bg-beige w-full min-h-screen max-w-4xl drop-shadow-xl pt-24">
        <header className="p-10">
          <h1 className="text-9xl font-manolo tracking-tighter">
            CLANG VS LLVM
          </h1>
          <section className="font-mono">
            <p>
              <span className="text-accentBlue">/ {params.slug} /</span>, By{" "}
              <span className="text-accentBlue">Mukesh Kannan</span> On
              08-07-2024
            </p>
          </section>
        </header>

        <img
          src="https://i.pinimg.com/originals/83/87/57/838757f26070599289072a89bd54ba02.jpg"
          className="h-52 w-full object-cover"
        />

        <section className="p-10 space-y-5">
          <h1 className="text-4xl font-manolo">INTODUCTION</h1>
          <p>
            Incididunt Lorem non aliqua incididunt mollit amet cillum culpa.
            Lorem nostrud sunt anim nostrud veniam sint irure aliquip enim
            consectetur qui. Ut sit labore voluptate mollit incididunt laboris
            ipsum occaecat aute officia cillum. Anim officia commodo et enim ut
            adipisicing proident ex anim mollit Lorem ea. Deserunt ex culpa est
            minim ipsum et eiusmod magna culpa reprehenderit do aliqua nulla.
            Laborum mollit mollit dolor voluptate ex excepteur culpa nisi nulla
            cupidatat velit. Duis amet eiusmod consequat adipisicing ipsum. Nisi
            adipisicing commodo culpa pariatur enim sit.
          </p>

          <h1 className="text-4xl font-manolo">WHATS THE DIFFERENCE</h1>
          <p>
            Incididunt Lorem non aliqua incididunt mollit amet cillum culpa.
            Lorem nostrud sunt anim nostrud veniam sint irure aliquip enim
            consectetur qui. Ut sit labore voluptate mollit incididunt laboris
            ipsum occaecat aute officia cillum. Anim officia commodo et enim ut
            adipisicing proident ex anim mollit Lorem ea. Deserunt ex culpa est
            minim ipsum et eiusmod magna culpa reprehenderit do aliqua nulla.
            Laborum mollit mollit dolor voluptate ex excepteur culpa nisi nulla
            cupidatat velit. Duis amet eiusmod consequat adipisicing ipsum. Nisi
            adipisicing commodo culpa pariatur enim sit.
          </p>

        </section>
      </section>
    </main>
  );
}
