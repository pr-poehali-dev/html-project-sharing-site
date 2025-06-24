import { Link, useLocation } from "react-router-dom";

const HackerNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: ">" },
    { path: "/projects", label: "Projects", icon: "//" },
    { path: "/contact", label: "Contact", icon: "@" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-green-500 font-bold text-lg glow-green">
            <span className="text-cyan-400">[</span>
            HACKER
            <span className="text-cyan-400">]</span>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <span className="text-cyan-400 mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HackerNavigation;
