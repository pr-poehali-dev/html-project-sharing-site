interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  screenshot: string;
  htmlUrl: string;
  onOpen: (url: string, title: string) => void;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  screenshot,
  htmlUrl,
  onOpen,
}: ProjectCardProps) => {
  return (
    <div
      className="project-card p-4 rounded-lg cursor-pointer group"
      onClick={() => onOpen(htmlUrl, title)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={screenshot}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-green-500 text-lg font-bold glow-green">
            ОТКРЫТЬ
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-green-500 font-bold text-lg glow-green">
          <span className="text-cyan-400">[</span>
          {title}
          <span className="text-cyan-400">]</span>
        </h3>

        <p className="text-gray-300 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
