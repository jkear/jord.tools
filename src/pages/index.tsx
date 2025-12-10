import { LiquidGlass } from "@liquidglass/react";

const blogPosts = [
    {
        id: "r37-healthcare-ai",
        title: "R37 Healthcare AI Study Guide",
        excerpt: "An interactive deep dive into healthcare AI applications.",
        date: "May 20, 2024",
        readTime: "10 min read",
    },
    {
        id: "ml-music",
        title: "Machine Learning Models in Music Composition",
        excerpt: "How transformer models generate original compositions.",
        date: "January 12, 2025",
        readTime: "7 min read",
    },
    {
        id: "political-discourse",
        title: "The Evolution of Political Discourse",
        excerpt: "Analyzing social media algorithms and democratic processes.",
        date: "January 10, 2025",
        readTime: "4 min read",
    },
];

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

export default function HomePage() {
    return (
        <div
            className="min-h-screen w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16"
        >
            <div className="w-full max-w-screen-2xl">
                <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                    <div className="w-full px-8 sm:px-14 py-14 flex flex-col gap-7">
                        <div className="flex flex-col gap-4">
                            <span className="text-xl uppercase font-bold tracking-[0.45em] text-white/55">jord.tools</span>
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white/90 leading-tight drop-shadow-lg">
                                    AI/ML dev journal
                                </h1>
                                <p className="text-xl sm:text-2xl text-white/80 max-w-4xl">
                                    documenting libs/langs, tools, and projects
                                </p>
                            </div>
                        </div>
                    </div>
                </LiquidGlass>
            </div>

            <div className="w-full max-w-screen-2xl flex flex-col gap-12" id="tools">
                <div className="w-full">
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

                <div className="w-full" id="posts">
                    <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                        <div className="w-full px-10 py-12 space-y-7">
                            <h2 className="text-4xl font-semibold text-white/90 drop-shadow-md">Latest Posts</h2>
                            <div className="space-y-5">
                                {blogPosts.map((post) => (
                                    <div key={post.id} className="space-y-2 border-b border-white/15 pb-5 last:border-b-0 last:pb-0">
                                        <h3 className="text-xl font-semibold text-white/85 leading-snug">{post.title}</h3>
                                        <p className="text-base text-white/75 leading-relaxed">{post.excerpt}</p>
                                        <p className="text-xs tracking-wide text-white/60 uppercase">{post.date} • {post.readTime}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </LiquidGlass>
                </div>
            </div>

            <div className="w-full max-w-screen-xl">
                <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                    <div className="w-full px-10 sm:px-14 py-12 flex flex-col items-center gap-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white/90 drop-shadow-md">Explore Deeper</h2>
                        <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
                            Curated walkthroughs, implementation notes, and experiments land here first. Jump into the frameworks, tools, or projects catalog to keep building.
                        </p>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-white/35 px-9 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-white/85 transition hover:border-white hover:text-white"
                            href="/knowledge-base"
                        >
                            Open the knowledge base
                        </a>
                    </div>
                </LiquidGlass>
            </div>
        </div>
    );
}
