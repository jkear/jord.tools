import { ProjectShowcase } from "../components/ProjectShowcase";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Project {
    id: string | number;
    title?: string;
    description?: string;
    technologies?: string[];
    github?: string;
}

export function ProjectsFeature() {
    const featuredProjects: Project[] = [
        {
            id: 1,
            title: "Trace Dark Money to it's political recipients",
            description: "FEC data parser and Neo4j uploader tool. To trace dark money from corporations to shell companies and then to politicians that do their bidding. AKA political finance analysis.",
            technologies: ["Python", "Neo4j", "FEC API"],
            github: "https://github.com/jkear/FEC-data-and-HR1-199-neo4j-dump"
        },
        {
            id: 2,
            title: "Kuzu Memory Graph MCP",
            description: "MCP server for Kuzu graph database memory. Works like SQLite but for graphs.",
            technologies: ["MCP", "Kuzu", "GraphDB"],
            github: "https://github.com/jkear/kuzu-memory-graph-mcp"
        },
        {
            id: 3,
            title: "ExPatPlan",
            description: "AI-powered job search I made for a friend to help get a Highly Skilled Migrant Visa sponsorship in the Netherlands.",
            technologies: ["Next.js", "LangChain", "Supabase", "OpenAI"],
            github: "https://github.com/jkear/exp4t"
        }
    ];

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <Link to="/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
                    View all <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project: Project) => (
                    <ProjectShowcase
                        key={project.id}
                        title={project.title || ""}
                        description={project.description || ""}
                        technologies={project.technologies || []}
                        githubUrl={project.github}
                    />
                ))}
            </div>
        </section>
    );
}
