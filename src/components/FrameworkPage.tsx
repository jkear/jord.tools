import React from 'react';
import { LiquidGlass } from "@liquidglass/react";
import { DocumentationLink } from './DocumentationLink';

interface FrameworkPageProps {
    title: string;
    description: string;
    framework: string;
    experience?: string;
    quickStart?: string;
    githubUrl: string;
    children?: React.ReactNode;
}

export function FrameworkPage({
    title,
    description,
    framework,
    experience,
    quickStart,
    githubUrl,
    children
}: FrameworkPageProps) {
    return (
        /* 
           tailwind: vertical space between children 2rem, max width 4xl, auto horizontal margin
           .css: margin-top: 2rem (for children); max-width: 56rem; margin-left: auto; margin-right: auto;
        */
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* 
               tailwind: vertical space between children 1rem
               .css: margin-top: 1rem (for children);
            */}
            <div className="space-y-4">
                {/* 
                   tailwind: 4xl text size, bold font, tight letter spacing, foreground text color
                   .css: font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; letter-spacing: -0.025em; color: hsl(var(--foreground));
                */}
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
                {/* 
                   tailwind: xl text size, muted foreground color
                   .css: font-size: 1.25rem; line-height: 1.75rem; color: hsl(var(--muted-foreground));
                */}
                <p className="text-xl text-muted-foreground">{description}</p>
            </div>

            {/* 
               tailwind: grid layout, 1 column, 2 columns on medium screens, gap 1rem
               .css: display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); grid-template-columns: repeat(2, minmax(0, 1fr)) (on md); gap: 1rem;
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentationLink framework={framework} type="docs" label="Official Documentation" />
                <DocumentationLink framework={framework} type="api" label="API Reference" />
                <DocumentationLink framework={framework} type="devkit" label="Getting Started" />
                <DocumentationLink framework={framework} type="github" label="GitHub Repository" url={githubUrl} />
            </div>

            {experience && (
                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    {/* 
                       tailwind: 2xl text size, semi-bold font, margin bottom 1rem
                       .css: font-size: 1.5rem; line-height: 2rem; font-weight: 600; margin-bottom: 1rem;
                    */}
                    <h2 className="text-2xl font-semibold mb-4">My Experience</h2>
                    {/* 
                       tailwind: prose typography plugin, inverted colors, no max width
                       .css: (typography styles); color: var(--tw-prose-invert-body); max-width: none;
                    */}
                    <div className="prose prose-invert max-w-none">
                        <p>{experience}</p>
                    </div>
                </LiquidGlass>
            )}

            {quickStart && (
                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                    {/* 
                       tailwind: black background with 50% opacity, padding 1rem, rounded corners, auto horizontal overflow
                       .css: background-color: rgb(0 0 0 / 0.5); padding: 1rem; border-radius: 0.5rem; overflow-x: auto;
                    */}
                    <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                        {/* 
                           tailwind: small text size, monospace font, green text color (shade 400)
                           .css: font-size: 0.875rem; line-height: 1.25rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; color: rgb(74 222 128);
                        */}
                        <code className="text-sm font-mono text-green-400">{quickStart}</code>
                    </pre>
                </LiquidGlass>
            )}

            {children}
        </div>
    );
}
