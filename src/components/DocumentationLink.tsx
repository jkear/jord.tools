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
            case "docs": return <Book className="w-4 h-4" />;
            case "api": return <Code className="w-4 h-4" />;
            case "devkit": return <Box className="w-4 h-4" />;
            case "github": return <Github className="w-4 h-4" />;
            default: return <ExternalLink className="w-4 h-4" />;
        }
    };

    const frameworkUrls: Record<string, Record<string, string>> = {
        pytorch: {
            docs: "https://pytorch.org/docs/",
            api: "https://pytorch.org/docs/stable/index.html",
            devkit: "https://pytorch.org/get-started/locally/",
            github: "https://github.com/pytorch/pytorch"
        },
        tensorflow: {
            docs: "https://www.tensorflow.org/learn",
            api: "https://www.tensorflow.org/api_docs",
            devkit: "https://www.tensorflow.org/install",
            github: "https://github.com/tensorflow/tensorflow"
        },
        langchain: {
            docs: "https://python.langchain.com/docs/get_started/introduction",
            api: "https://api.python.langchain.com/en/latest/",
            devkit: "https://python.langchain.com/docs/get_started/installation",
            github: "https://github.com/langchain-ai/langchain"
        },
        mlx: {
            docs: "https://ml-explore.github.io/mlx/build/html/index.html",
            api: "https://ml-explore.github.io/mlx/build/html/python/index.html",
            devkit: "https://github.com/ml-explore/mlx#installation",
            github: "https://github.com/ml-explore/mlx"
        },
        langgraph: {
            docs: "https://python.langchain.com/docs/langgraph",
            api: "https://python.langchain.com/docs/langgraph/reference",
            devkit: "https://python.langchain.com/docs/langgraph#installation",
            github: "https://github.com/langchain-ai/langgraph"
        },
        mcp: {
            docs: "https://modelcontextprotocol.io/introduction",
            api: "https://modelcontextprotocol.io/docs/concepts/architecture",
            devkit: "https://github.com/modelcontextprotocol/typescript-sdk",
            github: "https://github.com/modelcontextprotocol"
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
            docs: "https://github.com/comfyanonymous/ComfyUI",
            api: "https://github.com/comfyanonymous/ComfyUI",
            devkit: "https://github.com/comfyanonymous/ComfyUI#installing",
            github: "https://github.com/comfyanonymous/ComfyUI"
        },
        marker: {
            docs: "https://github.com/VikParuchuri/marker",
            api: "https://github.com/VikParuchuri/marker",
            devkit: "https://github.com/VikParuchuri/marker#installation",
            github: "https://github.com/VikParuchuri/marker"
        }
    };

    const resolvedUrl = url || frameworkUrls[framework]?.[type] || "#";

    return (
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
            <ExternalLink className="w-3 h-3 opacity-50" />
        </a>
    );
}
