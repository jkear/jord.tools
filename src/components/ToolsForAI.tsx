import type { ComponentType } from "react";

import {
  ExternalLink,
  Brain,
  Code,
  Workflow,
  GitBranch,
  Flame,
  Palette,
  FileCode,
  Network,
  Database,
  CircuitBoard,
  FolderTree,
  ChartBar,
  Zap,
  MessageSquare,
  Sparkles,
  Image,
  Video,
  Music
} from "lucide-react";
import { GlassCard } from "./GlassCard";

interface Tool {
  name: string;
  description: string;
  category: string;
  icon: ComponentType<{ className?: string }>;
  url: string;
}

export function ToolsForAI() {
  const aiTools: Tool[] = [
    {
      name: "Python",
      description: "Reliable glue language for experiments, automation, and production workloads.",
      category: "Languages & Libraries",
      icon: Code,
      url: "#"
    },
    {
      name: "Torch (PyTorch)",
      description: "Deep learning framework I reach for when shaping and deploying models.",
      category: "Languages & Libraries",
      icon: Flame,
      url: "#"
    },
    {
      name: "LangChain",
      description: "Orchestration layer for retrieval-augmented generation and agentic patterns.",
      category: "Orchestration & Agents",
      icon: Workflow,
      url: "#"
    },
    {
      name: "LangGraph",
      description: "Graph-based execution for building stateful multi-agent workflows.",
      category: "Orchestration & Agents",
      icon: GitBranch,
      url: "#"
    },
    {
      name: "Context7",
      description: "MCP-powered coordinator that connects tools and LLMs across projects.",
      category: "Orchestration & Agents",
      icon: CircuitBoard,
      url: "#"
    },
    {
      name: "LangFuse",
      description: "Observability stack for tracing prompts, runs, and business metrics.",
      category: "Observability & Analytics",
      icon: ChartBar,
      url: "#"
    },
    {
      name: "Neo4j Knowledge Graphs",
      description: "Graph database that grounds AI agents in structured, queryable context.",
      category: "Observability & Analytics",
      icon: Network,
      url: "#"
    },
    {
      name: "ComfyUI",
      description: "Visual node editor for rapidly prototyping diffusion and generative pipelines.",
      category: "Creative & Prototyping",
      icon: Palette,
      url: "#"
    },
    {
      name: "GitHub's Spec Kit",
      description: "Opinionated templates that keep product and engineering aligned on delivery.",
      category: "Creative & Prototyping",
      icon: FileCode,
      url: "#"
    },
    {
      name: "Redis",
      description: "Low-latency datastore for caching context, queues, and feature flags.",
      category: "Infrastructure & Data",
      icon: Database,
      url: "#"
    },
    {
      name: "Filesystem MCP",
      description: "MCP tool for navigating and editing local projects inside agent workflows.",
      category: "Infrastructure & Data",
      icon: FolderTree,
      url: "#"
    }
  ];

  const platforms: Tool[] = [
    {
      name: "OpenAI ChatGPT",
      description: "Conversational assistant I depend on for ideation, coding, and research.",
      category: "Conversational AI",
      icon: MessageSquare,
      url: "#"
    },
    {
      name: "Anthropic Claude",
      description: "High-context reasoning partner for complex planning and analysis.",
      category: "Conversational AI",
      icon: Sparkles,
      url: "#"
    },
    {
      name: "GitHub Copilot",
      description: "Inline coding copilot that accelerates implementation and refactors.",
      category: "Developer Tools",
      icon: Code,
      url: "#"
    },
    {
      name: "Gemini-CLI",
      description: "Command-line interface for interacting with Gemini AI models and tools.",
      category: "Developer Tools",
      icon: Code,
      url: "#"
    },
    {
      name: "Claude Code",
      description: "AI coding assistant focused on conversational code generation and project analysis.",
      category: "Developer Tools",
      icon: Code,
      url: "#"
    },
    {
      name: "Midjourney",
      description: "Best-in-class imagery generation for mood boards and concept art.",
      category: "Generative Media",
      icon: Image,
      url: "#"
    },
    {
      name: "Runway ML",
      description: "Video creation and editing suite powered by generative models.",
      category: "Generative Media",
      icon: Video,
      url: "#"
    },
    {
      name: "Suno AI",
      description: "Music co-creation platform for demos, jingles, and sonic experiments.",
      category: "Generative Media",
      icon: Music,
      url: "#"
    }
  ];

  const toolCategories = [...new Set(aiTools.map(tool => tool.category))];
  const platformCategories = [...new Set(platforms.map(tool => tool.category))];

  return (
    <div className="flex flex-col gap-10 mb-10">
      <GlassCard className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-2xl">Tools for AI</h2>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The stack I lean on to design, build, and ship AI-native products—from orchestration layers to
          observability and infrastructure.
        </p>

        <div className="space-y-6">
          {toolCategories.map((category) => (
            <div key={category}>
              <h3 className="text-lg mb-3 text-primary">{category}</h3>
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {aiTools
                  .filter(tool => tool.category === category)
                  .map((tool) => (
                    <GlassCard key={tool.name} hoverEffect className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{tool.name}</h4>
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="text-xl">Platforms</h3>
        </div>
        <p className="text-muted-foreground mb-5 text-sm">
          Hosted assistants and creative suites that pair with the toolkit above for day-to-day production work.
        </p>
        <div className="space-y-6">
          {platformCategories.map((category) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/80 mb-3">{category}</h4>
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {platforms
                  .filter(tool => tool.category === category)
                  .map((tool) => (
                    <GlassCard key={tool.name} hoverEffect className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center">
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{tool.name}</h4>
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-sm text-muted-foreground text-center">
            Have a tool suggestion? <a href="#" className="text-primary hover:underline">Let me know</a>
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
