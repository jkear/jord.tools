import { LiquidGlass } from "@liquidglass/react";

const tools = [
    {
        name: "Neo4j",
        description: "The Graph Database is the tool to rule them all. Knwoldege, understanding, defined decision trees, security, and information discovery.",
        icon: "/images/icons/neo4j-liquid-glass.png",
        url: "#"
    },
    {
        name: "MCP",
        description: "Model Context Protocol to connect LLMs to any API, store prompts, and use hooks. Serena, Graph Algorithms,  ",
        icon: "/images/icons/mcp-glass-icon.png",
        url: "#"
    },
    {
        name: "Marker",
        description: "PDF to Markdown Converter to give AI perfect vision of any PDF before it goes into a graph database",
        icon: "/images/icons/langs_libraries_icon.png",
        url: "#"
    },
    {
        name: "n8n",
        description: "Everyone's go-to automation platform with langchain's tools built-in",
        icon: "/images/icons/n8n-glass-icon1.png",
        url: "#"
    },
    {
        name: "Flowise",
        description: "Low-code orchestration platform enabling workflow whiteboarding and easy creation.",
        icon: "/images/icons/flowise-glass-icon.png",
        url: "#"
    },
    {
        name: "ComfyUI",
        description: "AI Image Generation workflow platform",
        icon: "/images/icons/comfyUI-glass-icon.png",
        url: "#"
    },
];

export function ToolsFeature() {
    return (
        <div className="w-full" id="tools">
            <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                <div className="w-full px-10 py-12 space-y-7">
                    <h2 className="text-4xl font-semibold text-white/90 drop-shadow-md">Favorite AI Tools</h2>
                    <div className="space-y-5">
                        {tools.map((tool) => (
                            <a
                                key={tool.name}
                                className="flex items-center gap-6 rounded-2xl border border-white/18 px-6 py-5 transition hover:border-white/35"
                                href={tool.url}
                            >
                                <div className="relative h-14 w-14 flex-shrink-0">
                                    <img
                                        src={tool.icon}
                                        alt={`${tool.name} icon`}
                                        title={`${tool.name} — ${tool.description}`}
                                        className="h-14 w-14 object-contain drop-shadow-lg"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-semibold text-white/90 leading-snug">{tool.name}</h3>
                                    <p className="text-base text-white/75 leading-relaxed">{tool.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </LiquidGlass>
        </div>
    );
}
