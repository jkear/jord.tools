import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "./GlassCard";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="mb-8">
      <GlassCard className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4 shrink-0">
          <Link to="/" className="text-title-3 font-semibold tracking-tight">jord.tools knowledge base</Link>
        </div>

        <div className="flex-1 max-w-md hidden md:block">
          <Search />
        </div>

        <nav className="flex items-center space-x-2 lg:space-x-6 shrink-0">
          <Link to="/" className="text-subhead font-medium hover:text-primary transition-colors hidden sm:block">Home</Link>
          <Link to="/knowledge-base/frameworks" className="text-subhead font-medium hover:text-primary transition-colors hidden sm:block">Frameworks</Link>
          <Link to="/knowledge-base/tools" className="text-subhead font-medium hover:text-primary transition-colors hidden sm:block">Tools</Link>
          <Link to="/knowledge-base/projects" className="text-subhead font-medium hover:text-primary transition-colors hidden sm:block">Projects</Link>

          <div className="flex items-center gap-2 ml-2">
            <Button variant="outline" size="icon" className="glass-hover h-9 w-9" asChild>
              <a href="https://github.com/jordankearfott" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="glass-hover h-9 w-9" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
      </GlassCard>
    </header>
  );
}