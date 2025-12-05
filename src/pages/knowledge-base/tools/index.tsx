import { GlassCard } from "../../../components/GlassCard";
import { Link } from "react-router-dom";

export default function ToolsIndex() {
    const tools = [
        { id: "mcp", name: "Model Context Protocol", description: "Standard for connecting AI assistants to systems." },
        { id: "flowise", name: "Flowise", description: "Drag & drop UI to build your customized LLM flow." },
        { id: "n8n", name: "n8n", description: "Workflow automation tool." },
        { id: "comfyui", name: "ComfyUI", description: "The most powerful and modular stable diffusion GUI." },
        { id: "marker", name: "Marker", description: "Convert PDF to markdown quickly and accurately." },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Tools</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                    <Link key={tool.id} to={`/knowledge-base/tools/${tool.id}`}>
                        <GlassCard hoverEffect className="h-full flex flex-col">
                            <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
                            <p className="text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                            <div className="text-primary text-sm font-medium mt-auto">
                                View Details →
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
}
