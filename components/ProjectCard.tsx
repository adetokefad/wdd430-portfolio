interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-6 bg-gray-50 border-l-4 border-blue-600 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-gray-700 mb-4">{description}</p>

      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Project
          </a>
        </div>
      )}
    </article>
  );
}
