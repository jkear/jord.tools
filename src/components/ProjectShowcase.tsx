import { LiquidGlass } from "@liquidglass/react";
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
        /* 
           tailwind: flex container, column layout, full height
           .css: display: flex; flex-direction: column; height: 100%;
        */
        <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={4} elasticity={0.2} displacementScale={20} className="flex flex-col h-full">
            {/* 
               tailwind: inner padding to keep content inside rounded corners
               .css: padding: 2rem; (sm+) padding: 2.5rem;
            */}
            <div className="flex flex-col h-full p-8 sm:p-10">
                {/* 
                   tailwind: flex container, justify space between, align items start, margin bottom 1rem
                   .css: display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;
                */}
                <div className="flex justify-between items-start mb-4 gap-4">
                    {/* 
                       tailwind: xl text size, semi-bold font, high-contrast text, tighter leading
                       .css: font-size: 1.25rem; line-height: 1.75rem; font-weight: 600;
                    */}
                    <h3 className="text-xl font-semibold leading-snug text-white/90">{title}</h3>
                    {status && (
                        /* 
                           tailwind: extra small text, padding x 0.5rem, padding y 0.25rem, full rounded corners, border
                           .css: font-size: 0.75rem; line-height: 1rem; padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem; border-radius: 9999px; border-width: 1px;
                           
                           tailwind (active): green background with 10% opacity, green border with 20% opacity, green text (shade 400)
                           .css (active): background-color: rgb(34 197 94 / 0.1); border-color: rgb(34 197 94 / 0.2); color: rgb(74 222 128);
                           
                           tailwind (in-progress): yellow background with 10% opacity, yellow border with 20% opacity, yellow text (shade 400)
                           .css (in-progress): background-color: rgb(234 179 8 / 0.1); border-color: rgb(234 179 8 / 0.2); color: rgb(250 204 21);
                           
                           tailwind (default): gray background with 10% opacity, gray border with 20% opacity, gray text (shade 400)
                           .css (default): background-color: rgb(107 114 128 / 0.1); border-color: rgb(107 114 128 / 0.2); color: rgb(156 163 175);
                        */
                        <span className={`text-xs px-2 py-1 rounded-full border ${status === 'active' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                            status === 'in-progress' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                'bg-gray-500/10 border-gray-500/20 text-gray-400'
                            }`}>
                            {status}
                        </span>
                    )}
                </div>
                {/* 
                   tailwind: body text with consistent home-page tone and spacing
                   .css: margin-bottom: 1.5rem; flex-grow: 1;
                */}
                <p className="text-white/80 mb-6 flex-grow leading-relaxed">{description}</p>
                {/* 
                   tailwind: flex container, wrap items, gap 0.5rem, margin bottom 1.5rem
                   .css: display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;
                */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map(tech => (
                        /* 
                           tailwind: extra small text, padding x 0.5rem, padding y 0.25rem, full rounded corners, secondary background with 50% opacity, secondary foreground text
                           .css: font-size: 0.75rem; line-height: 1rem; padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem; border-radius: 9999px; background-color: hsl(var(--secondary) / 0.5); color: hsl(var(--secondary-foreground));
                        */
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
                            {tech}
                        </span>
                    ))}
                </div>
                {/* 
                   tailwind: flex container, gap 0.75rem, margin top auto (push to bottom)
                   .css: display: flex; gap: 0.75rem; margin-top: auto;
                */}
                <div className="flex gap-3 mt-auto">
                    {githubUrl && (
                        /* 
                           tailwind: flex grow 1, gap 0.5rem
                           .css: flex: 1 1 0%; gap: 0.5rem;
                        */
                        <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                {/* 
                                   tailwind: width 1rem, height 1rem
                                   .css: width: 1rem; height: 1rem;
                                */}
                                <Github className="w-4 h-4" /> Code
                            </a>
                        </Button>
                    )}
                    {demoUrl && (
                        /* 
                           tailwind: flex grow 1, gap 0.5rem
                           .css: flex: 1 1 0%; gap: 0.5rem;
                        */
                        <Button size="sm" className="flex-1 gap-2" asChild>
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                {/* 
                                   tailwind: width 1rem, height 1rem
                                   .css: width: 1rem; height: 1rem;
                                */}
                                <ExternalLink className="w-4 h-4" /> Demo
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </LiquidGlass>
    );
}
