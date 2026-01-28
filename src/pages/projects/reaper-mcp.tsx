import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function ReaperMCPPage() {
    return (
        <ProjectDetailPage
            title="Reaper MCP Server"
            description="Digital Audio Workstation project management and analysis."
            framework="python"
            experience="Enables AI assistants to analyze and provide insights about Reaper music production projects."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Project discovery and cataloging</li>
                    <li>Project file parsing and data extraction</li>
                    <li>Session analysis and metadata processing</li>
                    <li>Track and effect information retrieval</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>Reaper project parsing libraries</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
