interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
