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
        // ...existing code...
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
