import { useState } from "react";
import HackerNavigation from "@/components/HackerNavigation";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Реальные проекты - расширенный список с категориями
  const projects = [
    {
      id: 1,
      title: "HTML Snake Game",
      description:
        "Классическая игра Змейка с Matrix-дизайном и неоновой подсветкой. Полностью адаптивная с возможностью управления как с клавиатуры, так и с мобильных устройств.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      category: "Игры",
      status: "Завершен",
      screenshot:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
      htmlUrl: "/snake-game.html",
      demoUrl: "https://snake-demo.com",
      githubUrl: "https://github.com/user/snake-game",
      features: ["Система счета", "Сохранение рекордов", "Адаптивный дизайн"],
      dateCreated: "2024-01-15",
    },
    {
      id: 2,
      title: "HTML Tetris Game",
      description:
        "Полнофункциональный Тетрис с хакерской темой и счетом. Включает все классические фигуры и механики оригинальной игры.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      category: "Игры",
      status: "Завершен",
      screenshot:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
      htmlUrl: "/tetris-game.html",
      demoUrl: "https://tetris-demo.com",
      githubUrl: "https://github.com/user/tetris-game",
      features: ["7 типов фигур", "Увеличение скорости", "Таблица рекордов"],
      dateCreated: "2024-02-20",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Интерактивная панель погоды с красивой анимацией и подробными прогнозами на несколько дней вперед.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      category: "Веб-приложения",
      status: "В разработке",
      screenshot:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      htmlUrl: "/weather-app.html",
      demoUrl: "https://weather-demo.com",
      githubUrl: "https://github.com/user/weather-app",
      features: ["5-дневный прогноз", "Геолокация", "Анимированные иконки"],
      dateCreated: "2024-03-10",
    },
    {
      id: 4,
      title: "Task Manager",
      description:
        "Минималистичный менеджер задач с возможностью создания, редактирования и удаления задач. Поддержка категорий и приоритетов.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      category: "Веб-приложения",
      status: "Завершен",
      screenshot:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      htmlUrl: "/task-manager.html",
      demoUrl: "https://tasks-demo.com",
      githubUrl: "https://github.com/user/task-manager",
      features: ["Drag & Drop", "Фильтры", "Экспорт данных"],
      dateCreated: "2024-01-28",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const categories = [
    "Все",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "Все"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            <span className="typing-effect">HTML PORTFOLIO</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="text-cyan-400">&gt;</span> Коллекция моих HTML
            проектов
            <br />
            <span className="text-cyan-400">&gt;</span> От простых сайтов до
            интерактивных приложений
            <br />
            <span className="text-cyan-400">&gt;</span> Каждый проект доступен
            для просмотра и изучения
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-block border-glow-cyan p-3 rounded-lg">
              <p className="text-cyan-400 font-mono text-sm">
                ПРОЕКТОВ: <span className="glow-cyan">{projects.length}</span>
              </p>
            </div>
            <div className="inline-block border-glow-green p-3 rounded-lg">
              <p className="text-green-400 font-mono text-sm">
                КАТЕГОРИЙ:{" "}
                <span className="glow-green">{categories.length - 1}</span>
              </p>
            </div>
            <div className="inline-block border-glow p-3 rounded-lg">
              <p className="text-yellow-400 font-mono text-sm">
                STATUS:{" "}
                <span className="text-green-400 glow-green">АКТИВЕН</span>
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-500 glow-green mb-4">
              <span className="text-cyan-400">[</span>ФИЛЬТР КАТЕГОРИЙ
              <span className="text-cyan-400">]</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 font-mono text-sm ${
                  selectedCategory === category
                    ? "bg-green-500/20 border-green-500 text-green-400 glow-green"
                    : "bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                }`}
              >
                <span className="text-cyan-400 mr-1">&gt;</span>
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-500 glow-green mb-4">
              <span className="text-cyan-400">[</span>
              МОИ ПРОЕКТЫ
              <span className="text-cyan-400">]</span>
            </h2>
            <p className="text-gray-300">
              <span className="text-cyan-400">&gt;</span> Найдено проектов:{" "}
              {filteredProjects.length}
              <br />
              <span className="text-cyan-400">&gt;</span> Нажми на проект для
              детального просмотра
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onOpen={handleProjectOpen}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="border-glow-cyan p-8 rounded-lg max-w-md mx-auto">
                <p className="text-cyan-400 font-mono text-lg mb-4">
                  <span className="text-red-400">[ERROR]</span> Проекты не
                  найдены
                </p>
                <p className="text-gray-400 text-sm">
                  Попробуйте выбрать другую категорию
                </p>
              </div>
            </div>
          )}
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
