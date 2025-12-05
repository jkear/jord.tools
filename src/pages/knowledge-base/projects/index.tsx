import { ProjectShowcase } from "../../../components/ProjectShowcase";

export default function ProjectsIndex() {
    const projects = [
        {
            title: "Agent Dojo",
            description: "AI agent orchestration framework with MCP integration.",
            technologies: ["FastAPI", "LangChain", "LangGraph", "MCP"],
            githubUrl: "https://github.com/jordankearfott/Agent_Dojo",
            status: "active" as const
        },
        {
            title: "Kuzu Memory Graph MCP",
            description: "MCP server for Kuzu graph database memory.",
            technologies: ["MCP", "Kuzu", "GraphDB"],
            status: "active" as const
        },
        {
            title: "Reaper MCP Server",
            description: "MCP server for Reaper project integration.",
            technologies: ["MCP", "Python", "Reaper"],
            status: "active" as const
        },
        {
            title: "ExPatPlan",
            description: "AI-powered job search for HSM visa sponsorship in the Netherlands.",
            technologies: ["Next.js", "LangChain", "Supabase", "OpenAI"],
            githubUrl: "https://github.com/jkear/exp4t",
            status: "archived" as const
        },
        {
            title: "SPOT-Light",
            description: "Illuminating political influence through data analysis.",
            technologies: ["Python", "Neo4j", "Streamlit", "OpenAI"],
            status: "active" as const
        },
        {
            title: "FEC Data Parse 2 Neo4j",
            description: "FEC data parser and Neo4j uploader for political finance analysis.",
            technologies: ["Python", "Neo4j", "FEC"],
            status: "active" as const
        },
        {
            title: "Startup CRM",
            description: "BottleCRM: Free and Open Source Customer Relationship Management.",
            technologies: ["SvelteKit", "TailwindCSS", "Prisma"],
            status: "active" as const
        },
        {
            title: "MacOS Agent Builder",
            description: "React/Vite based agent builder for macOS.",
            technologies: ["React", "Vite", "TypeScript", "Tailwind"],
            status: "in-progress" as const
        },
        {
            title: "LongPDFsplitter",
            description: "PDF Text splitter for OpenAI-TTS using pdfplumber or PyPDF2.",
            technologies: ["Python", "PDF", "OpenAI"],
            status: "active" as const
        }
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectShowcase key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}
