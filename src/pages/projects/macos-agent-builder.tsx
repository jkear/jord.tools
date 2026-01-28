import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function MacOSAgentBuilderPage() {
    return (
        <ProjectDetailPage
            title="MacOS Agent Builder"
            description="Swift based agent builder for macOS."
            framework="react"
            experience="Framework for building automation agents for macOS environments."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Purpose</h3>
                <p>In development but, does the world need another agent builder?</p>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Vite</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Supabase</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
