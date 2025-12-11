import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";

interface Tool {
    id: string;
    name: string;
    description: string;
}

const protocols: Tool[] = [
    { id: "mcp", name: "Model Context Protocol", description: "Standard for connecting AI assistants to systems." },
];

const apps: Tool[] = [
    { id: "flowise", name: "Flowise", description: "Drag & drop UI to build your customized LLM flow." },
    { id: "n8n", name: "n8n", description: "Workflow automation tool." },
    { id: "comfyui", name: "ComfyUI", description: "The most powerful and modular stable diffusion GUI." },
    { id: "label-studio", name: "Label Studio", description: "Open source data labeling tool for all data types." },
];

const libraries: Tool[] = [
    { id: "marker", name: "Marker", description: "Convert PDF to markdown quickly and accurately." },
];

const cli: Tool[] = [
    // Add CLI tools if any, or leave empty for now
];

function ToolSection({ title, tools }: { title: string, tools: Tool[] }) {
    if (tools.length === 0) return null;
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                    <Link key={tool.id} to={`/tools/${tool.id}`}>
                        <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="h-full flex flex-col p-6">
                            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                            <div className="text-primary text-sm font-medium mt-auto">
                                View Details →
                            </div>
                        </LiquidGlass>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default function ToolsIndex() {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl font-bold">Tools Catalog</h1>
            <ToolSection title="Protocols" tools={protocols} />
            <ToolSection title="Applications" tools={apps} />
            <ToolSection title="Libraries" tools={libraries} />
            <ToolSection title="CLI Tools" tools={cli} />
        </div>
    );
}
