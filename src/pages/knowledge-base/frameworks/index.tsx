import { GlassCard } from "../../../components/GlassCard";
import { Link } from "react-router-dom";
import { DocumentationLink } from "../../../components/DocumentationLink";

export default function FrameworksIndex() {
    const frameworks = [
        { id: "pytorch", name: "PyTorch", description: "Open source machine learning framework that accelerates the path from research prototyping to production deployment." },
        { id: "tensorflow", name: "TensorFlow", description: "An end-to-end open source platform for machine learning." },
        { id: "mlx", name: "MLX", description: "An array framework for machine learning on Apple silicon." },
        { id: "langchain", name: "LangChain", description: "Building applications with LLMs through composability." },
        { id: "langgraph", name: "LangGraph", description: "Building stateful, multi-actor applications with LLMs." },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Frameworks</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {frameworks.map((fw) => (
                    <Link key={fw.id} to={`/knowledge-base/frameworks/${fw.id}`}>
                        <GlassCard hoverEffect className="h-full flex flex-col">
                            <h2 className="text-2xl font-semibold mb-2">{fw.name}</h2>
                            <p className="text-muted-foreground mb-4 flex-grow">{fw.description}</p>
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
