import SkillsCard from "@/components/SkillsCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg text-gray-700 mb-4">
        Hello! My name is Glory Adetoke Faderin, and I am a Software Development
        student. I enjoy building modern web applications using technologies
        like Next.js, React, TypeScript, and Tailwind CSS.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        I enjoy solving problems, learning new technologies, and creating
        responsive, user-friendly applications that provide practical solutions.
      </p>

      <p className="text-lg text-gray-700 mb-8">
        My goal is to continue improving my full-stack development skills while
        building projects that demonstrate clean code, accessibility, and great
        user experience.
      </p>

      <SkillsCard
        title="Technical Skills"
        skills={[
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "HTML & CSS",
          "Git & GitHub",
        ]}
      />
    </main>
  );
}
