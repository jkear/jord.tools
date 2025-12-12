import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";

interface Tool {
    id: string;
    name: string;
    description: string;
    href?: string;
}

const apps: Tool[] = [
    { id: "flowise", name: "Flowise", description: "Drag & drop UI to build your customized LLM flow." },
    { id: "n8n", name: "n8n", description: "Workflow automation tool." },
    { id: "comfyui", name: "ComfyUI", description: "The most powerful and modular stable diffusion GUI." },
    { id: "label-studio", name: "Label Studio", description: "Open source data labeling tool for all data types." },
];

const platforms: Tool[] = [
    {
        id: "chatgpt",
        name: "OpenAI ChatGPT",
        description: "Hosted assistant for research, planning, and day-to-day production work.",
        href: "https://chatgpt.com/",
    },
    {
        id: "claude-desktop",
        name: "Anthropic Claude Desktop",
        description: "Desktop client for Claude, often paired with MCP servers.",
        href: "https://claude.ai/download",
    },
];

const cli: Tool[] = [
    {
        id: "copilot-cli",
        name: "GitHub Copilot CLI",
        description: "CLI-assisted coding workflows via the gh extension.",
        href: "https://github.com/github/gh-copilot",
    },
    {
        id: "gemini-cli",
        name: "Gemini-CLI",
        description: "Command-line interface for interacting with Gemini models and tools.",
        href: "https://github.com/google-gemini/gemini-cli",
    },
    {
        id: "claude-code",
        name: "Claude Code",
        description: "CLI-focused coding assistant for working directly in repos.",
        href: "https://docs.anthropic.com/en/docs/claude-code",
    },
];

function ToolSection({ title, tools }: { title: string, tools: Tool[] }) {
    if (tools.length === 0) return null;
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                    tool.href ? (
                        <a key={tool.id} href={tool.href} target="_blank" rel="noreferrer" className="block">
                            <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="h-full flex flex-col p-6">
                                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                                <div className="text-primary text-sm font-medium mt-auto">
                                    Open →
                                </div>
                            </LiquidGlass>
                        </a>
                    ) : (
                        <Link key={tool.id} to={`/tools/${tool.id}`}>
                            <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="h-full flex flex-col p-6">
                                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                                <div className="text-primary text-sm font-medium mt-auto">
                                    View Details →
                                </div>
                            </LiquidGlass>
                        </Link>
                    )
                ))}
            </div>
        </section>
    );
}

export default function ToolsIndex() {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl font-bold">Tools Catalog</h1>
            <ToolSection title="Applications" tools={apps} />
            <ToolSection title="Platforms" tools={platforms} />
            <ToolSection title="CLI Tools" tools={cli} />
        </div>
    );
}
