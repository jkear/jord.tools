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
                background: '#18181b2f',
                primaryColor: '#27272a',
                lineColor: '#a1a1aa',
                textColor: '#e4e4e7',
                mainBkg: '#18181b4b',
                nodeBorder: '#3f3f46',
                clusterBkg: '#18181b70',
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
                className="w-full flex mermaid-svg-container"
            />
        </div>
    );
};

export const TrainingPipelineChart = () => {
    const chart = `
flowchart TD
    %% Phase 1: Wrangle & Train
    subgraph Phase1 [Wrangle & Train]
        direction TB
        
        subgraph Ingestion [Data Ingestion]
            Data@{ shape: cyl, label: "Your Sales Logs/Data" }
        end

        subgraph Processing [Processing]
            Prep@{ shape: rounded, label: "Marker / Textract<br/>(OCR & Processing)" }
        end

        subgraph TrainLoop [Training Loop]
            Train@{ shape: rounded, label: "PyTorch / TensorFlow<br/>(Training Frameworks)" }
            Track@{ shape: rounded, label: "Weights & Biases / MLflow<br/>(Experiment Tracking)" }
            
            Train <==> Track
        end

        Ingestion ==> Processing
        Prep ====> TrainLoop
    end

    %% Phase 2: Registry & Eval
    subgraph Phase2 [Registry & Eval]
        direction TB

        subgraph Registry [Model Registry]
            Model@{ shape: cyl, label: "HuggingFace Hub<br/>(Model Artifact)" }
        end

        subgraph EvalSafety [Evaluation & Safety]
            AutoEval@{ shape: rounded, label: "Ragas / DeepEval<br/>Automated Eval" }
            Safety@{ shape: rounded, label: "Guardrails AI<br/>Safety Guardrails" }
            Human@{ shape: rounded, label: "Label Studio<br/>Human Review" }
            
            AutoEval ==> Safety ==> Human
        end

        Prod@{ shape: rounded, label: "Production Ready" }

        Registry --> EvalSafety
        Human ==> Prod
    end

    %% Force Layout: Phase 1 Left of Phase 2
    Phase2 ~~~ Phase2

    %% Connection between phases
    Train --> Registry
    
    %% Feedback loop
    Prep <-.- Human

    %% Styling
    classDef pad fill:none,stroke:none;
    
    %% Link Styles
    %% 0: Train <-> Track
    linkStyle 0 stroke:#22c55e,stroke-width:3px
    %% 1: Data -> Prep
    linkStyle 1 stroke:#eab308,stroke-width:3px
    %% 2: Prep -> Train
    linkStyle 2 stroke:#eab308,stroke-width:3px
    
    %% 3: AutoEval -> Safety
    linkStyle 3 stroke:#3b82f6,stroke-width:3px
    %% 4: Human <- Safety
    linkStyle 4 stroke:#3b82f6,stroke-width:3px
    
    %% 5: Model -> AutoEval
    linkStyle 5 stroke:#3b82f6,stroke-width:3px
    %% 6: Human -> Prod
    linkStyle 6 stroke:#3b82f6,stroke-width:3px
    
    %% 8: Train -> Registry
    linkStyle 8 stroke:#22c55e,stroke-width:3px
    %% 9: Prep <- Human
    linkStyle 9 stroke:#eab308,stroke-width:3px
  `;
    return <MermaidChart chart={chart} id="chart-training" />;
};

export const EvaluationChart = () => {
    const chart = `
flowchart TD
  %% Nodes
  Model@{ shape: rounded, label: "Trained Model" }
  AutoEval@{ shape: rounded, label: "Ragas / DeepEval<br/>Automated Eval" }
  Safety@{ shape: rounded, label: "Guardrails AI<br/>Safety Guardrails" }
  Human@{ shape: rounded, label: "Label Studio<br/>Human Review" }
  Prod@{ shape: rounded, label: "Production Ready" }

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
flowchart TD
    %% Subgraphs
    subgraph Interface [User Interface]
        direction LR
        User@{ shape: lean-r, label: "User" } ~~~ Response@{ shape: lean-r, label: "Response" }
    end

    subgraph AuthLayer [Identity & Access]
        direction TB
        Authn@{ shape: rounded, label: "Authentication<br/>JWT / OIDC / OAuth2" }
        Authz@{ shape: rounded, label: "Authorization<br/>RBAC" }
    end

    subgraph SafetyLayer [Safety Layer]
        Guard@{ shape: hex, label: "Input/Output Validation<br/>Guardrails AI" }
    end

    subgraph Agent [Agent Core]
        Orch@{ shape: stadium, label: "Orchestrator<br/>LangGraph / LangChain" }
        Infer@{ shape: proc, label: "Inference Engine<br/>vLLM / Ollama" }
        Mem@{ shape: cyl, label: "Working Memory & GraphRAG<br/>Vector DB / Graph DB" }
    end

    subgraph Tools [External Ecosystem]
        MCP@{ shape: notch-rect, label: "Secure MCP Gateway<br/>IBM ContextForge" }
        API@{ shape: cloud, label: "External APIs" }
    end

    subgraph Obs [Logging and Feedback]
        Log@{ shape: lean-r, label: "Observability<br/>LangSmith / LangFuse" }
    end
    
    Feedback@{ shape: comment, label: "User Feedback<br/>Back to Training" }

    %% Layout adjustments
    Interface ~~~ AuthLayer
    AuthLayer ~~~ SafetyLayer
    SafetyLayer ~~~ Agent
    
    %% Force Response to be at the top level with User
    Response ~~~ Authn

    %% Connections
    User ==> Authn
    Authn ==> Authz
    Authz ==> Guard
    Guard ==> Orch
    
    Orch <==> Infer
    Orch <==> Mem
    
    Orch <==> MCP
    MCP <==> API

    Orch -.-> Log
    Log -.-> Feedback

    Orch ==> Guard
    Guard ==> Response

    %% Styling
    classDef default fill:#18181b,stroke:#52525b,stroke-width:1px,color:#fff
    classDef cluster fill:#27272a,stroke:#3f3f46,stroke-width:2px,color:#fff,rx:5,ry:5
    
    %% Link Styles
    %% 0: User ~~~ Response (Invisible)
    %% 1: Interface ~~~ AuthLayer (Invisible)
    %% 2: AuthLayer ~~~ SafetyLayer (Invisible)
    %% 3: SafetyLayer ~~~ Agent (Invisible)
    %% 4: Response ~~~ Authn (Invisible)
    
    %% 5: User -> Authn (Yellow)
    linkStyle 5 stroke:#eab308,stroke-width:3px
    %% 6: Authn -> Authz (Yellow)
    linkStyle 6 stroke:#eab308,stroke-width:3px
    %% 7: Authz -> Guard (Yellow)
    linkStyle 7 stroke:#eab308,stroke-width:3px
    %% 8: Guard -> Orch (Yellow)
    linkStyle 8 stroke:#eab308,stroke-width:3px
    
    %% 9: Orch <-> Infer (Green)
    linkStyle 9 stroke:#22c55e,stroke-width:3px
    %% 10: Orch <-> Mem (Green)
    linkStyle 10 stroke:#22c55e,stroke-width:3px
    %% 11: Orch <-> MCP (Green)
    linkStyle 11 stroke:#22c55e,stroke-width:3px
    %% 12: MCP <-> API (Green)
    linkStyle 12 stroke:#22c55e,stroke-width:3px

    %% 13: Orch -> Log (Dotted)
    linkStyle 13 stroke:#71717a,stroke-width:2px,stroke-dasharray: 5 5
    %% 14: Log -> Feedback (Dotted)
    linkStyle 14 stroke:#71717a,stroke-width:2px,stroke-dasharray: 5 5

    %% 15: Orch -> Guard (Blue)
    linkStyle 15 stroke:#3b82f6,stroke-width:3px
    %% 16: Guard -> Response (Blue)
    linkStyle 16 stroke:#3b82f6,stroke-width:3px
  `;
    return <MermaidChart chart={chart} id="chart-app" />;
};
