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
import { LiquidGlass } from "@liquidglass/react";

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
    /* 
       tailwind: flex container, column layout, gap 2.5rem, margin bottom 2.5rem
       .css: display: flex; flex-direction: column; gap: 2.5rem; margin-bottom: 2.5rem;
    */
    <div className="flex flex-col gap-10 mb-10">
      {/* 
         tailwind: padding 1.5rem, margin bottom 1.5rem
         .css: padding: 1.5rem; margin-bottom: 1.5rem;
      */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6 mb-6">
        {/* 
           tailwind: flex container, align items center, gap 0.75rem, margin bottom 1rem
           .css: display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;
        */}
        <div className="flex items-center gap-3 mb-4">
          {/* 
             tailwind: height 1.25rem, width 1.25rem, primary text color
             .css: height: 1.25rem; width: 1.25rem; color: hsl(var(--primary));
          */}
          <Brain className="h-5 w-5 text-primary" />
          {/* 
             tailwind: xl text size
             .css: font-size: 1.25rem; line-height: 1.75rem;
          */}
          <h3 className="text-xl">Stack</h3>
        </div>
        {/* 
           tailwind: muted foreground color, margin bottom 1.5rem, relaxed line height
           .css: color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; line-height: 1.625;
        */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The stack I lean on to design, build, and ship AI-native products—from orchestration layers to
          observability and infrastructure.
        </p>

        {/* 
           tailwind: vertical space between children 1.5rem
           .css: margin-top: 1.5rem (for children);
        */}
        <div className="space-y-6">
          {toolCategories.map((category) => (
            <div key={category}>
              {/* 
                 tailwind: large text size, margin bottom 0.75rem, primary text color
                 .css: font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 0.75rem; color: hsl(var(--primary));
              */}
              <h3 className="text-lg mb-3 text-primary">{category}</h3>
              {/* 
                 tailwind: grid layout, gap 1rem, 2 columns on medium screens, gap 1.25rem on medium screens
                 .css: display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr)) (on md); gap: 1.25rem (on md);
              */}
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {aiTools
                  .filter(tool => tool.category === category)
                  .map((tool) => (
                    /* 
                       tailwind: padding 1rem
                       .css: padding: 1rem;
                    */
                    <LiquidGlass key={tool.name} borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-4">
                      {/* 
                         tailwind: flex container, align items start, gap 0.75rem
                         .css: display: flex; align-items: flex-start; gap: 0.75rem;
                      */}
                      <div className="flex items-start gap-3">
                        {/* 
                           tailwind: prevent shrink
                           .css: flex-shrink: 0;
                        */}
                        <div className="flex-shrink-0">
                          {/* 
                             tailwind: width 2.5rem, height 2.5rem, gradient background, rounded corners (xl), flex center
                             .css: width: 2.5rem; height: 2.5rem; background-image: linear-gradient(to bottom right, rgb(var(--primary) / 0.2), rgb(var(--secondary) / 0.2)); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;
                          */}
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                            {/* 
                               tailwind: height 1.25rem, width 1.25rem, primary text color
                               .css: height: 1.25rem; width: 1.25rem; color: hsl(var(--primary));
                            */}
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        {/* 
                           tailwind: flex grow 1, min width 0
                           .css: flex: 1 1 0%; min-width: 0;
                        */}
                        <div className="flex-1 min-w-0">
                          {/* 
                             tailwind: flex container, align items center, gap 0.5rem, margin bottom 0.25rem
                             .css: display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;
                          */}
                          <div className="flex items-center gap-2 mb-1">
                            {/* 
                               tailwind: medium font weight
                               .css: font-weight: 500;
                            */}
                            <h4 className="font-medium">{tool.name}</h4>
                            {/* 
                               tailwind: height 0.75rem, width 0.75rem, muted foreground color
                               .css: height: 0.75rem; width: 0.75rem; color: hsl(var(--muted-foreground));
                            */}
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </div>
                          {/* 
                             tailwind: small text, muted foreground color, relaxed line height
                             .css: font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--muted-foreground)); line-height: 1.625;
                          */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </LiquidGlass>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </LiquidGlass>

      {/* 
         tailwind: padding 1.5rem, margin top 1.5rem
         .css: padding: 1.5rem; margin-top: 1.5rem;
      */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="text-xl">Platforms</h3>
        </div>
        {/* 
           tailwind: muted foreground color, margin bottom 1.25rem, small text
           .css: color: hsl(var(--muted-foreground)); margin-bottom: 1.25rem; font-size: 0.875rem; line-height: 1.25rem;
        */}
        <p className="text-muted-foreground mb-5 text-sm">
          Hosted assistants and creative suites that pair with the toolkit above for day-to-day production work.
        </p>
        <div className="space-y-6">
          {platformCategories.map((category) => (
            <div key={category}>
              {/* 
                 tailwind: small text, semi-bold font, uppercase, wide letter spacing, primary text color with 80% opacity, margin bottom 0.75rem
                 .css: font-size: 0.875rem; line-height: 1.25rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.025em; color: rgb(var(--primary) / 0.8); margin-bottom: 0.75rem;
              */}
              <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/80 mb-3">{category}</h4>
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {platforms
                  .filter(tool => tool.category === category)
                  .map((tool) => (
                    <LiquidGlass key={tool.name} borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {/* 
                             tailwind: width 2.5rem, height 2.5rem, gradient background, rounded corners (xl), flex center
                             .css: width: 2.5rem; height: 2.5rem; background-image: linear-gradient(to bottom right, rgb(var(--secondary) / 0.2), rgb(var(--primary) / 0.2)); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;
                          */}
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
                    </LiquidGlass>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* 
           tailwind: margin top 1.5rem, padding top 1.5rem, top border, white border with 20% opacity
           .css: margin-top: 1.5rem; padding-top: 1.5rem; border-top-width: 1px; border-color: rgb(255 255 255 / 0.2);
        */}
        <div className="mt-6 pt-6 border-t border-white/20">
          {/* 
             tailwind: small text, muted foreground color, center text alignment
             .css: font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--muted-foreground)); text-align: center;
          */}
          <p className="text-sm text-muted-foreground text-center">
            {/* 
               tailwind: primary text color, hover: underline
               .css: color: hsl(var(--primary)); text-decoration: underline (on hover);
            */}
            Have a tool suggestion? <a href="#" className="text-primary hover:underline">Let me know</a>
          </p>
        </div>
      </LiquidGlass>
    </div>
  );
}
