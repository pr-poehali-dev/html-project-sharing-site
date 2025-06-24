import { useState } from "react";
import HackerNavigation from "@/components/HackerNavigation";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Демо-проекты
  const projects = [
    {
      title: "Личный сайт",
      description: "Современный портфолио с анимациями и адаптивным дизайном",
      technologies: ["HTML", "CSS", "JavaScript"],
      screenshot:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      htmlUrl: "https://example.com/project1",
    },
    {
      title: "Интернет-магазин",
      description: "E-commerce платформа с корзиной и системой оплаты",
      technologies: ["React", "Node.js", "MongoDB"],
      screenshot:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      htmlUrl: "https://example.com/project2",
    },
    {
      title: "Админ-панель",
      description: "Система управления контентом с аналитикой",
      technologies: ["Vue.js", "PHP", "MySQL"],
      screenshot:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      htmlUrl: "https://example.com/project3",
    },
  ];

  const handleProjectOpen = (url: string, title: string) => {
    setSelectedProject({ url, title });
  };

  return (
    <div className="min-h-screen">
      <div className="matrix-bg"></div>
      <HackerNavigation />

      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold mb-6 glow-green">
            <span className="typing-effect">HACKER PORTFOLIO</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            <span className="text-cyan-400">&gt;</span> Добро пожаловать в мой
            цифровой мир
            <br />
            <span className="text-cyan-400">&gt;</span> Здесь живут мои проекты
            и идеи
          </p>
          <div className="inline-block border-glow-cyan p-4 rounded-lg">
            <p className="text-cyan-400 font-mono">
              STATUS: <span className="glow-cyan">ONLINE</span>
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-500 glow-green mb-4">
              <span className="text-cyan-400">[</span>
              МОИ РАБОТЫ
              <span className="text-cyan-400">]</span>
            </h2>
            <p className="text-gray-300">
              <span className="text-cyan-400">&gt;</span> Нажми на любой проект
              чтобы открыть его
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                screenshot={project.screenshot}
                htmlUrl={project.htmlUrl}
                onOpen={handleProjectOpen}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-center">
          <div className="border-glow p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-green-500 glow-green mb-6">
              <span className="text-cyan-400">[</span>
              СВЯЗЬ
              <span className="text-cyan-400">]</span>
            </h2>
            <div className="space-y-4 font-mono">
              <p className="text-gray-300">
                <span className="text-cyan-400">&gt;</span> EMAIL:
                hacker@example.com
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400">&gt;</span> TELEGRAM:
                @hacker_dev
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400">&gt;</span> GITHUB:
                github.com/hacker
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        projectUrl={selectedProject?.url || ""}
        projectTitle={selectedProject?.title || ""}
      />
    </div>
  );
};

export default Index;
