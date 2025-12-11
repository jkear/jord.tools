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
flowchart LR
  %% Nodes & Subgraphs
  subgraph DataLayer [Data Ingestion]
    direction TB
    Data[("Your Sales Logs/Data")]
  end

  subgraph PrepLayer [Processing]
    direction TB
    Prep["Marker / Textract<br/>(OCR & Processing)"]
  end

  subgraph TrainLayer [Training Loop]
    direction TB
    Train["PyTorch / TensorFlow<br/>(Training Frameworks)"]
    Track["Weights & Biases / MLflow<br/>(Experiment Tracking)"]
  end

  subgraph ModelLayer [Model Registry]
    direction TB
    Model[("HuggingFace Hub<br/>(Model Artifact)")]
  end

  %% Flow
  Data --> Prep
  Prep --> Train
  Train <--> Track
  Train --> Model

  %% Styling
  classDef default fill:#18181b,stroke:#52525b,stroke-width:1px,color:#fff;
  classDef cluster fill:#27272a,stroke:#3f3f46,stroke-width:1px,color:#e4e4e7,rx:10,ry:10;
  
  %% Apply styles
  class DataLayer,PrepLayer,TrainLayer,ModelLayer cluster;
  `;
    return <MermaidChart chart={chart} id="chart-training" />;
};

export const EvaluationChart = () => {
    const chart = `
graph TD
  %% Nodes
  Model[Trained Model]
  AutoEval[Ragas / DeepEval<br/>Automated Eval]
  Safety[Guardrails AI<br/>Safety Guardrails]
  Human[Label Studio<br/>Human Review]
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
sequenceDiagram
    autonumber
    actor User
    participant Orch as Orchestration<br/>(LangChain/LangGraph)
    participant Guard as Guardrails<br/>(Guardrails AI)
    participant RAG as Context<br/>(Neo4j/Pinecone)
    participant MCP as Tools<br/>(MCP Gateway)
    participant LLM as Inference<br/>(vLLM/Ollama)
    participant Obs as Observability<br/>(LangFuse)

    User->>Orch: Query
    
    rect rgb(39, 39, 42)
        note right of Orch: Input Validation
        Orch->>Guard: Validate Input
        Guard-->>Orch: Input Safe
    end

    Orch->>RAG: Retrieve Context
    RAG-->>Orch: Context Documents

    Orch->>MCP: Execute Tools (JSON-RPC)
    MCP-->>Orch: Tool Results

    Orch->>LLM: Generate Response
    LLM-->>Orch: Completion

    rect rgb(39, 39, 42)
        note right of Orch: Output Validation
        Orch->>Guard: Validate Output
        Guard-->>Orch: Output Safe
    end

    Orch->>User: Response
    Orch--)Obs: Log Trace (Async)`;
    return <MermaidChart chart={chart} id="chart-app" />;

};