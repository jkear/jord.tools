import { ProjectShowcase } from "../../../components/ProjectShowcase";

export default function ProjectsIndex() {
    const projects = [
        {
            title: "Agent Dojo",
            description: "AI agent orchestration framework with MCP integration.",
            technologies: ["FastAPI", "LangChain", "LangGraph", "MCP"],
            githubUrl: "https://github.com/jkear/Agent_Dojo",
            status: "active" as const
        },
        {
            title: "Kuzu Memory Graph MCP",
            description: "MCP server for Kuzu graph database memory. KUZU is the ancient Sumarian word for wisdom. This db works like SQLite, a compiled package without a bulky application. It can manage multi-hop graph traversal like Neo4j but without the clunky desktop application.",
            technologies: ["MCP", "Kuzu", "GraphDB"],
            githubUrl: "https://github.com/jkear/kuzu-memory-graph-mcp",
            status: "active" as const
        },
        {
            title: "Reaper MCP Server",
            description: "MCP server for Reaper to give audio engineering advice as well as insert particular frequiencies and intervals outlined in declasified CIA documents that are said to have mind altering effects. Some some invoke malleability and calmness others determination and anger. This needs a model trained for this purpose, not a foundation LLM model.",
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
            title: "Trace Dark Money to it's political recipients",
            description: "FEC data parser and Neo4j uploader tool. To trace dark money from corporations to shell companies and then to politicians that do their bidding. AKA political finance analysis.",
            technologies: ["Python", "Neo4j", "FEC API"],
            githubUrl: "https://github.com/jkear/FEC-data-and-HR1-199-neo4j-dump.git",
            status: "active" as const
        },
        {
            title: "Startup CRM",
            description: "Added features for Backflip.Media to BottleCRM: Free and Open Source Customer Relationship Management.",
            technologies: ["SvelteKit", "TailwindCSS", "Prisma"],
            githubUrl: "https://github.com/jkear/startup-crm.git",
            status: "active" as const
        },
        {
            title: "MacOS Agent Builder",
            description: "Swift based agent builder for macOS. In development but, does the world need another agent builder?",
            technologies: ["React", "Vite", "TypeScript", "Tailwind"],
            status: "in-progress" as const
        },
        {
            title: "LongPDFsplitter",
            description: "PDF Text splitter using pdfplumber or PyPDF2. I use this to split textbooks and other big pdf files.",
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
