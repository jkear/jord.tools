import React from 'react';
import { LiquidGlass } from "@liquidglass/react";
import { DocumentationLink } from './DocumentationLink';

interface ProjectDetailPageProps {
    title: string;
    description: string;
    framework: string;
    experience?: string;
    quickStart?: string;
    githubUrl: string;
    children?: React.ReactNode;
}

export function ProjectDetailPage({
    title,
    description,
    framework,
    experience,
    quickStart,
    githubUrl,
    children
}: ProjectDetailPageProps) {
    return (
        /* 
           tailwind: vertical space between children 2rem, max width 4xl, auto horizontal margin, horizontal padding
           .css: max-width: 56rem; margin-left: auto; margin-right: auto; padding-left/right applied by Tailwind;
        */
        <div className="space-y-8 max-w-4xl mx-auto px-6 sm:px-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentationLink framework={framework} type="docs" label="Official Documentation" />
                <DocumentationLink framework={framework} type="api" label="API Reference" />
                <DocumentationLink framework={framework} type="devkit" label="Getting Started" />
                <DocumentationLink framework={framework} type="github" label="GitHub Repository" url={githubUrl} />
            </div>

            {experience && (
                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    <h2 className="text-2xl font-semibold mb-4">My Experience</h2>
                    <div className="prose prose-invert max-w-none">
                        <p>{experience}</p>
                    </div>
                </LiquidGlass>
            )}

            {quickStart && (
                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                    <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-green-400">{quickStart}</code>
                    </pre>
                </LiquidGlass>
            )}

            {children}
        </div>
    );
}
