import { ExternalLink, Book, Code, Box, Github } from "lucide-react";
import { cn } from "./ui/utils";

interface DocumentationLinkProps {
    framework: string;
    type: "docs" | "api" | "devkit" | "github";
    label: string;
    url?: string;
}

export function DocumentationLink({ framework, type, label, url }: DocumentationLinkProps) {
    const getIcon = () => {
        switch (type) {
            /* 
               tailwind: width 1rem, height 1rem
               .css: width: 1rem; height: 1rem;
            */
            case "docs": return <Book className="w-4 h-4" />;
            case "api": return <Code className="w-4 h-4" />;
            case "devkit": return <Box className="w-4 h-4" />;
            case "github": return <Github className="w-4 h-4" />;
            default: return <ExternalLink className="w-4 h-4" />;
        }
    };

    const frameworkUrls: Record<string, Record<string, string>> = {
        pytorch: {
            docs: "https://pytorch.org/docs/stable/",
            api: "https://docs.pytorch.org/docs/stable/pytorch-api.html",
            devkit: "https://pytorch.org/get-started/locally/",
            github: "https://github.com/pytorch/pytorch"
        },
        tensorflow: {
            docs: "https://www.tensorflow.org/guide",
            api: "https://www.tensorflow.org/api_docs",
            devkit: "https://www.tensorflow.org/install",
            github: "https://github.com/tensorflow/tensorflow"
        },
        mlx: {
            docs: "https://ml-explore.github.io/mlx/build/html/index.html",
            api: "https://ml-explore.github.io/mlx/build/html/python/index.html",
            devkit: "https://ml-explore.github.io/mlx/build/html/install.html",
            github: "https://github.com/ml-explore/mlx"
        },
        langchain: {
            docs: "https://python.langchain.com/docs/",
            api: "https://python.langchain.com/api_reference/",
            devkit: "https://python.langchain.com/docs/get_started/installation",
            github: "https://github.com/langchain-ai/langchain"
        },
        langgraph: {
            docs: "https://langchain-ai.github.io/langgraph/",
            api: "https://langchain-ai.github.io/langgraph/reference/",
            devkit: "https://langchain-ai.github.io/langgraph/tutorials/introduction/",
            github: "https://github.com/langchain-ai/langgraph"
        },
        python: {
            docs: "https://docs.python.org/3/",
            api: "https://docs.python.org/3/library/",
            devkit: "https://docs.python.org/3/tutorial/",
            github: "https://github.com/python/cpython"
        },
        mcp: {
            docs: "https://modelcontextprotocol.io/",
            api: "https://modelcontextprotocol.io/docs/concepts/",
            devkit: "https://modelcontextprotocol.io/quickstart",
            github: "https://github.com/modelcontextprotocol"
        },
        marker: {
            docs: "https://github.com/VikParuchuri/marker",
            api: "https://github.com/VikParuchuri/marker",
            devkit: "https://github.com/VikParuchuri/marker#installation",
            github: "https://github.com/VikParuchuri/marker"
        },
        "label-studio": {
            docs: "https://labelstud.io/guide/",
            api: "https://labelstud.io/api/",
            devkit: "https://labelstud.io/guide/install",
            github: "https://github.com/heartexlabs/label-studio"
        },
        flowise: {
            docs: "https://docs.flowiseai.com/",
            api: "https://docs.flowiseai.com/api-reference",
            devkit: "https://docs.flowiseai.com/getting-started",
            github: "https://github.com/FlowiseAI/Flowise"
        },
        n8n: {
            docs: "https://docs.n8n.io/",
            api: "https://docs.n8n.io/api/",
            devkit: "https://docs.n8n.io/hosting/",
            github: "https://github.com/n8n-io/n8n"
        },
        comfyui: {
            docs: "https://docs.comfy.org/",
            api: "https://docs.comfy.org/essentials/custom_node_overview",
            devkit: "https://docs.comfy.org/get_started/gettingstarted",
            github: "https://github.com/comfyanonymous/ComfyUI"
        }
    };

    const resolvedUrl = url || frameworkUrls[framework]?.[type] || "#";

    return (
        /* 
           tailwind: glass effect (custom), inline flex, align center, gap 0.5rem, padding x 1rem, padding y 0.5rem, rounded corners, small text, medium font weight, transition all
           .css: display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; transition-property: all;
           
           tailwind: hover: primary text color, hover: primary border color with 50% opacity
           .css: color: hsl(var(--primary)) (on hover); border-color: rgb(var(--primary) / 0.5) (on hover);
        */
        <a
            href={resolvedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "glass glass-hover inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                "hover:text-primary hover:border-primary/50"
            )}
        >
            {getIcon()}
            {label}
            {/* 
               tailwind: width 0.75rem, height 0.75rem, 50% opacity
               .css: width: 0.75rem; height: 0.75rem; opacity: 0.5;
            */}
            <ExternalLink className="w-3 h-3 opacity-50" />
        </a>
    );
}
