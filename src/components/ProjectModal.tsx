import { useEffect } from "react";
import Icon from "@/components/ui/icon";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectUrl: string;
  projectTitle: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  projectUrl,
  projectTitle,
}: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="modal-content w-full max-w-6xl h-full max-h-[90vh] rounded-lg overflow-hidden">
        <div className="bg-black/90 p-4 flex items-center justify-between border-b border-green-500/30">
          <h2 className="text-green-500 font-bold glow-green">
            <span className="text-cyan-400">[</span>
            {projectTitle}
            <span className="text-cyan-400">]</span>
          </h2>

          <div className="flex space-x-2">
            <button
              onClick={() => window.open(projectUrl, "_blank")}
              className="hacker-btn text-sm"
              title="Открыть в новой вкладке"
            >
              <Icon name="ExternalLink" size={16} />
            </button>
            <button
              onClick={onClose}
              className="hacker-btn text-sm"
              title="Закрыть (ESC)"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
        </div>

        <div className="h-full">
          <iframe
            src={projectUrl}
            className="w-full h-full border-none"
            title={projectTitle}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
