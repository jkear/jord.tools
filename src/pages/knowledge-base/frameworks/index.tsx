import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";
import { TrainingPipelineChart, EvaluationChart, ApplicationChart } from "../../../components/LLMToolchainChart";

export default function FrameworksIndex() {
    const frameworks = [
        { id: "pytorch", name: "PyTorch", description: "Open source machine learning framework that accelerates the path from research prototyping to production deployment." },
        { id: "tensorflow", name: "TensorFlow", description: "An end-to-end open source platform for machine learning." },
        { id: "mlx", name: "MLX", description: "An array framework for machine learning on Apple silicon." },
        { id: "langchain", name: "LangChain", description: "Building applications with LLMs through composability." },
        { id: "langgraph", name: "LangGraph", description: "Building stateful, multi-actor applications with LLMs." },
    ];

    return (
        <div className="relative z-10 p-8 rounded-lg bg-black/60 backdrop-blur-sm space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">AI Frameworks & Toolchains</h1>
                <p className="text-xl text-muted-foreground">
                    Building a Generative AI application isn't just about picking a model. It's about constructing a reliable pipeline that moves from raw data to a production-ready user experience.
                </p>
            </div>

            {/* Stage 1: Training */}
            <section className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                    <h2 className="text-2xl font-semibold">Step 1: Training & Fine-Tuning</h2>
                    <p className="text-muted-foreground mt-2">
                        Before an application exists, the model must be prepared. Whether you are pre-training from scratch or (more likely) fine-tuning a foundation model, this stage is dominated by heavy compute and data processing.
                    </p>
                </div>
                
                <TrainingPipelineChart />

                <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground pt-4">
                    <div>
                        <strong className="text-foreground">Key Tools:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><span className="text-zinc-200">PyTorch / TensorFlow / MLX</span>: The core engines for gradient descent.</li>
                            <li><span className="text-zinc-200">HuggingFace Datasets</span>: The standard for loading and processing large text corpora.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-foreground">Goal:</strong>
                        <p className="mt-2">Produce a "Model Artifact" (usually a `.safetensors` file) that captures the desired knowledge or behavior pattern.</p>
                    </div>
                </div>
            </section>

            {/* Stage 2: Evaluation */}
            <section className="space-y-6">
                 <div className="border-l-4 border-purple-500 pl-6">
                    <h2 className="text-2xl font-semibold">Step 2: Evaluation & Safety</h2>
                    <p className="text-muted-foreground mt-2">
                        A model file is not a product. It needs rigorous testing to ensure it doesn't hallucinate, output harmful content, or regress on key metrics.
                    </p>
                </div>

                <EvaluationChart />

                 <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground pt-4">
                    <div>
                        <strong className="text-foreground">Key Tools:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><span className="text-zinc-200">Ragas / DeepEval</span>: Specialized frameworks for evaluating RAG pipelines (retrieval accuracy, faithfulness).</li>
                            <li><span className="text-zinc-200">Guardrails AI</span>: Runtime and build-time checks for output structure and safety.</li>
                        </ul>
                    </div>
                    <div>
                         <strong className="text-foreground">Goal:</strong>
                        <p className="mt-2">Gain statistical confidence that the model performs well on your specific use cases before users see it.</p>
                    </div>
                </div>
            </section>

             {/* Stage 3: Application */}
             <section className="space-y-6">
                 <div className="border-l-4 border-green-500 pl-6">
                    <h2 className="text-2xl font-semibold">Step 3: Orchestration & Serving</h2>
                    <p className="text-muted-foreground mt-2">
                        Finally, the model is integrated into a live application. This is where "Agents" live—managing state, memory, and tool execution.
                    </p>
                </div>

                <ApplicationChart />

                 <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground pt-4">
                    <div>
                        <strong className="text-foreground">Key Tools:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><span className="text-zinc-200">LangChain / LangGraph</span>: The logic layer that connects LLMs to the outside world.</li>
                            <li><span className="text-zinc-200">vLLM / Ollama</span>: High-performance inference engines that serve the model via API.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-foreground">Goal:</strong>
                        <p className="mt-2">Deliver a responsive, context-aware user experience that solves a real problem.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6 pt-12">
                 <h2 className="text-2xl font-semibold">Explore Frameworks</h2>
                 <p className="text-muted-foreground">Detailed guides on the specific tools powering these pipelines.</p>
                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {frameworks.map((fw) => (
                        <Link key={fw.id} to={`/knowledge-base/frameworks/${fw.id}`} className="block h-full">
                            <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="h-full hover:brightness-110 transition-all">
                                <div className="flex flex-col h-full p-6">
                                    <h2 className="text-2xl font-semibold mb-2">{fw.name}</h2>
                                    <p className="text-muted-foreground mb-4 flex-grow">{fw.description}</p>
                                    <div className="text-primary text-sm font-medium mt-auto">
                                        View Details →
                                    </div>
                                </div>
                            </LiquidGlass>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
