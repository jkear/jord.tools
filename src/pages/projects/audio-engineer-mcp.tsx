import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function AudioEngineerMCPPage() {
    return (
        <ProjectDetailPage
            title="Audio Engineer MCP Suite"
            description="Comprehensive audio engineering toolkit for music production."
            framework="python"
            experience="Professional audio workflow automation for Reaper DAW users with AI-enhanced processing."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Components</h3>
                <ul>
                    <li><strong>13 Specialized Tools:</strong> Binaural beat generation, spatial audio processing, vocal doubling</li>
                    <li><strong>Mix Management:</strong> Snapshot saving/recall, session statistics, automation tools</li>
                    <li><strong>Audio Analysis:</strong> Frequency analysis, loudness measurement, phase correlation</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Lua (ReaScript)</li>
                    <li>Python</li>
                    <li>Audio processing libraries</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
