import { LiquidGlass } from "@liquidglass/react";
import { BlogFeature } from "./blog-feature";
import { ToolsFeature } from "./tools-feature";
import { ProjectsFeature } from "./projects-feature";

export default function HomePage() {
    return (
        <div
            className="min-h-screen w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16"
        >
            <div className="w-full max-w-screen-2xl">
                <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                    <div className="w-full px-8 sm:px-14 py-14 flex flex-col gap-7">
                        <div className="flex flex-col gap-4">
                            <span className="text-xl uppercase font-bold tracking-[0.45em] text-white/55">jord.tools</span>
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white/90 leading-tight drop-shadow-lg">
                                    AI/ML dev journal
                                </h1>
                                <p className="text-xl sm:text-2xl text-white/80 max-w-4xl">
                                    documenting libs/langs, tools, and projects
                                </p>
                            </div>
                        </div>
                    </div>
                </LiquidGlass>
            </div>

            <div className="w-full max-w-screen-2xl flex flex-col gap-12">
                <ProjectsFeature />
                <ToolsFeature />
                <BlogFeature />
            </div>

            <div className="w-full max-w-screen-xl">
                <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                    <div className="w-full px-10 sm:px-14 py-12 flex flex-col items-center gap-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white/90 drop-shadow-md">Explore Deeper</h2>
                        <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
                            Curated walkthroughs, implementation notes, and experiments land here first. Jump into the frameworks, tools, or projects catalog to keep building.
                        </p>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-white/35 px-9 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-white/85 transition hover:border-white hover:text-white"
                            href="/knowledge-base"
                        >
                            Open the knowledge base
                        </a>
                    </div>
                </LiquidGlass>
            </div>
        </div>
    );
}

