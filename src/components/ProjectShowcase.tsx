import { GlassCard } from "./GlassCard";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectShowcaseProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    status?: "active" | "archived" | "in-progress";
}

export function ProjectShowcase({ title, description, technologies, githubUrl, demoUrl, status }: ProjectShowcaseProps) {
    return (
        <GlassCard hoverEffect className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                {status && (
                    <span className={`text-xs px-2 py-1 rounded-full border ${status === 'active' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                        status === 'in-progress' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/10 border-gray-500/20 text-gray-400'
                        }`}>
                        {status}
                    </span>
                )}
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-3 mt-auto">
                {githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" /> Code
                        </a>
                    </Button>
                )}
                {demoUrl && (
                    <Button size="sm" className="flex-1 gap-2" asChild>
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                    </Button>
                )}
            </div>
        </GlassCard>
    );
}
