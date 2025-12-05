import { GlassCard } from "../../components/GlassCard";
import { ProjectShowcase } from "../../components/ProjectShowcase";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Code, Terminal, Database, Cpu, Layers } from "lucide-react";
import projectCatalog from "~/project-catalog.json";

export default function KnowledgeBase() {
    const { projects } = projectCatalog;
    const featuredProjects = projects.personal.filter(p => p.featured);

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10" />
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        AI Knowledge Base
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A comprehensive catalog of AI frameworks, tools, and personal projects.
                        Documenting the journey through the evolving landscape of artificial intelligence.
                    </p>
                </div>
            </section>

            {/* Featured Projects */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Featured Projects</h2>
                    <Link to="/knowledge-base/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
                        View all <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectShowcase
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubUrl={project.github}
                            status={project.status as any}
                        />
                    ))}
                </div>
            </section>

            {/* Categories Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-8 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Frameworks</h3>
                            <p className="text-sm text-muted-foreground">Core ML libraries and orchestration</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to="/knowledge-base/frameworks/pytorch" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">PyTorch</div>
                            <div className="text-xs text-muted-foreground">Deep Learning</div>
                        </Link>
                        <Link to="/knowledge-base/frameworks/tensorflow" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">TensorFlow</div>
                            <div className="text-xs text-muted-foreground">End-to-end ML</div>
                        </Link>
                        <Link to="/knowledge-base/frameworks/langchain" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">LangChain</div>
                            <div className="text-xs text-muted-foreground">Orchestration</div>
                        </Link>
                        <Link to="/knowledge-base/frameworks/mlx" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">MLX</div>
                            <div className="text-xs text-muted-foreground">Apple Silicon</div>
                        </Link>
                    </div>
                    <Link to="/knowledge-base/frameworks" className="inline-flex items-center text-sm text-primary hover:underline">
                        Explore all frameworks <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </GlassCard>

                <GlassCard className="p-8 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                            <Layers className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Tools</h3>
                            <p className="text-sm text-muted-foreground">Utilities and platforms</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to="/knowledge-base/tools/mcp" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">MCP</div>
                            <div className="text-xs text-muted-foreground">Context Protocol</div>
                        </Link>
                        <Link to="/knowledge-base/tools/n8n" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">n8n</div>
                            <div className="text-xs text-muted-foreground">Automation</div>
                        </Link>
                        <Link to="/knowledge-base/tools/comfyui" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">ComfyUI</div>
                            <div className="text-xs text-muted-foreground">Generative AI</div>
                        </Link>
                        <Link to="/knowledge-base/tools/marker" className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="font-medium">Marker</div>
                            <div className="text-xs text-muted-foreground">PDF to MD</div>
                        </Link>
                    </div>
                    <Link to="/knowledge-base/tools" className="inline-flex items-center text-sm text-primary hover:underline">
                        Explore all tools <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </GlassCard>
            </section>
        </div>
    );
}
