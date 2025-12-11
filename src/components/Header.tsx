import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

export function Header() {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/frameworks", label: "Frameworks" },
    { href: "/tools", label: "Tools" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container flex h-16 max-w-5xl mx-auto items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-lg font-bold tracking-widest text-white/90 uppercase hover:text-white transition-colors">
            jord.tools
          </Link>
        </div>

        {/* Main Navigation - Hidden on mobile, visible on md+ */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
            >
              <Button
                variant="ghost"
                className={cn(
                  "text-white/70 hover:text-white hover:bg-white/10 h-8 px-4 rounded-full text-sm font-medium transition-colors",
                  location.pathname === item.href && "text-white bg-white/10"
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-9 h-9" asChild>
            <a href="https://github.com/jkear" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-9 h-9" asChild>
            <a href="https://linkedin.com/in/jordankearfott" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}