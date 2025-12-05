import React from 'react';
import { GlassCard } from './GlassCard';
import { DocumentationLink } from './DocumentationLink';

interface FrameworkPageProps {
    title: string;
    description: string;
    framework: string;
    experience?: string;
    quickStart?: string;
    children?: React.ReactNode;
}

export function FrameworkPage({
    title,
    description,
    framework,
    experience,
    quickStart,
    children
}: FrameworkPageProps) {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentationLink framework={framework} type="docs" label="Official Documentation" />
                <DocumentationLink framework={framework} type="api" label="API Reference" />
                <DocumentationLink framework={framework} type="devkit" label="Getting Started" />
                <DocumentationLink framework={framework} type="github" label="GitHub Repository" />
            </div>

            {experience && (
                <GlassCard>
                    <h2 className="text-2xl font-semibold mb-4">My Experience</h2>
                    <div className="prose prose-invert max-w-none">
                        <p>{experience}</p>
                    </div>
                </GlassCard>
            )}

            {quickStart && (
                <GlassCard>
                    <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                    <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-green-400">{quickStart}</code>
                    </pre>
                </GlassCard>
            )}

            {children}
        </div>
    );
}
