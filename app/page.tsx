import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Team Project Planner",
    description:
      "A collaborative web application that helps student teams organize tasks, track progress, and manage deadlines.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/adetokefad/team-project-planner",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Welcome! I'm a software development student learning Next.js, React,
          TypeScript, and Tailwind CSS. Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
