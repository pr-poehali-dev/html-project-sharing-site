interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  screenshot: string;
  htmlUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  dateCreated: string;
  onOpen: (url: string, title: string) => void;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  category,
  status,
  screenshot,
  htmlUrl,
  demoUrl,
  githubUrl,
  features,
  dateCreated,
  onOpen,
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Завершен":
        return "text-green-400 border-green-500/50 bg-green-500/10";
      case "В разработке":
        return "text-yellow-400 border-yellow-500/50 bg-yellow-500/10";
      default:
        return "text-gray-400 border-gray-500/50 bg-gray-500/10";
    }
  };

  return (
    <div className="mx-0 px-0 py-0 rounded-0">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={screenshot}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onOpen(htmlUrl, title)}
            className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-lg font-bold glow-green hover:bg-green-500/30 transition-colors"
          >
            ОТКРЫТЬ ПРОЕКТ
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(status)}`}
          >
            {status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-xs font-mono">
            {category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-green-500 font-bold text-lg glow-green">
            <span className="text-cyan-400">[</span>
            {title}
            <span className="text-cyan-400">]</span>
          </h3>
          <span className="text-xs text-gray-400 font-mono">
            {new Date(dateCreated).toLocaleDateString("ru-RU")}
          </span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-1">
          <p className="text-cyan-400 text-xs font-mono">ОСОБЕННОСТИ:</p>
          <div className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <p key={index} className="text-gray-400 text-xs">
                <span className="text-cyan-400 mr-1">→</span>
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 border-t border-gray-700/50">
          <button
            onClick={() => onOpen(htmlUrl, title)}
            className="flex-1 hacker-btn text-xs py-2"
          >
            ПРОСМОТР
          </button>
          {githubUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, "_blank");
              }}
              className="px-3 py-2 bg-gray-800/50 border border-gray-600 text-gray-300 rounded text-xs hover:border-cyan-500 hover:text-cyan-400 transition-colors font-mono"
              title="Исходный код"
            >
              CODE
            </button>
          )}
          {demoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(demoUrl, "_blank");
              }}
              className="px-3 py-2 bg-gray-800/50 border border-gray-600 text-gray-300 rounded text-xs hover:border-green-500 hover:text-green-400 transition-colors font-mono"
              title="Живая демонстрация"
            >
              DEMO
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
