import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
    chart: string;
    id: string;
}

const MermaidChart = ({ chart, id }: MermaidChartProps) => {
    const [svg, setSvg] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                darkMode: true,
                background: '#18181b',
                primaryColor: '#27272a',
                lineColor: '#a1a1aa',
                textColor: '#e4e4e7',
                mainBkg: '#18181b',
                nodeBorder: '#3f3f46',
                clusterBkg: '#18181b',
                clusterBorder: '#52525b',
            },
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            securityLevel: 'loose'
        });

        const renderChart = async () => {
            try {
                // Ensure unique ID for every render attempt to avoid collisions
                const uniqueId = `${id}-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(uniqueId, chart);
                setSvg(svg);
                setError(null);
            } catch (err: any) {
                console.error(`Failed to render mermaid chart ${id}:`, err);
                setError(err.message || 'Failed to render chart');
            }
        };

        renderChart();
    }, [chart, id]);

    if (error) {
        return (
            /* 
               tailwind: red background with 20% opacity, border, red border with 50% opacity, padding 1rem, rounded corners, red text (shade 200), small text, monospace font
               .css: background-color: rgb(127 29 29 / 0.2); border-width: 1px; border-color: rgb(239 68 68 / 0.5); padding: 1rem; border-radius: 0.5rem; color: rgb(254 202 202); font-size: 0.875rem; line-height: 1.25rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            */
            <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg text-red-200 text-sm font-mono">
                Mermaid Error: {error}
                {/* 
                   tailwind: margin top 0.5rem, extra small text, 50% opacity, auto horizontal overflow
                   .css: margin-top: 0.5rem; font-size: 0.75rem; line-height: 1rem; opacity: 0.5; overflow-x: auto;
                */}
                <pre className="mt-2 text-xs opacity-50 overflow-x-auto">{chart}</pre>
            </div>
        );
    }

    if (!svg) {
        /* 
           tailwind: pulse animation, zinc background (shade 800), height 8rem, full width, rounded corners
           .css: animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; background-color: rgb(39 39 42); height: 8rem; width: 100%; border-radius: 0.5rem;
        */
        return <div className="animate-pulse bg-zinc-800 h-32 w-full rounded-lg" />;
    }

    return (
        /* 
           tailwind: zinc background (shade 900), padding 1.5rem, rounded corners, border, zinc border (shade 800), flex container, justify center, full width, hide overflow
           .css: background-color: rgb(24 24 27); padding: 1.5rem; border-radius: 0.5rem; border-width: 1px; border-color: rgb(39 39 42); display: flex; justify-content: center; width: 100%; overflow: hidden;
        */
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex justify-center w-full overflow-hidden">
            {/* 
               tailwind: full width, flex container, justify center
               .css: width: 100%; display: flex; justify-content: center;
            */}
            <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className="w-full flex justify-center mermaid-svg-container"
            />
        </div>
    );
};

export const TrainingPipelineChart = () => {
    const chart = `
graph LR
  %% Nodes
  Data[Raw Data Sources]
  Prep[Data Prep<br/>HF Datasets / Pandas]
  Train[(Training Frameworks<br/>PyTorch / MLX / TensorFlow)]
  Track[Experiment Tracking<br/>Weights & Biases / MLflow]
  Model[Model Artifact<br/>HuggingFace Hub]

  %% Flow
  Data --> Prep
  Prep --> Train
  Train --> Track
  Train --> Model

  %% Styling
  classDef default fill:#18181b,stroke:#52525b,stroke-width:1px,color:#fff;
  `;
    return <MermaidChart chart={chart} id="chart-training" />;
};

export const EvaluationChart = () => {
    const chart = `
graph TD
  %% Nodes
  Model[Trained Model]
  AutoEval[Automated Eval<br/>Ragas / DeepEval / lm-eval]
  Safety[Safety Guardrails<br/>Guardrails AI / NeMo]
  Human[Human Review<br/>Label Studio / Prodigy]
  Prod[Production Ready]

  %% Flow
  Model --> AutoEval
  AutoEval --> Safety
  Safety --> Human
  Human --> Prod

  %% Styling
  classDef default fill:#18181b,stroke:#52525b,stroke-width:1px,color:#fff;
  `;
    return <MermaidChart chart={chart} id="chart-eval" />;
};

export const ApplicationChart = () => {
    const chart = `
graph LR
  %% Nodes
  User((User Input))
  Orch[Orchestration<br/>LangChain / LangGraph]
  (Graph)RAG[Context / Memory<br/>(Neo4j)/ Pinecone / ChromaDB]
  Infer[Inference Engine<br/>vLLM / Ollama / TGI]
  Response((Response))

  %% Flow
  User --> Orch
  Orch <--> RAG
  Orch --> Infer
  Infer --> Orch
  Orch --> Response

  %% Styling
  classDef default fill:#18181b,stroke:#52525b,stroke-width:1px,color:#fff;
  `;
    return <MermaidChart chart={chart} id="chart-app" />;
};