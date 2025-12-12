import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function MarkerPage() {
    return (
        <FrameworkDetailPage
            title="Marker"
            description="Convert PDF to markdown quickly and accurately."
            framework="marker"
            experience="Essential for my RAG pipelines. It handles equations and tables much better than standard PDF extractors."
            quickStart="pip install marker-pdf"
            githubUrl="https://github.com/VikParuchuri/marker"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Deep learning based layout analysis</li>
                    <li>LaTeX equation extraction</li>
                    <li>Table recognition and formatting</li>
                    <li>High accuracy text extraction</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Marker MCP Server</strong>: An MCP server wrapper around Marker for on-demand conversion.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://github.com/VikParuchuri/marker/issues">Marker GitHub Issues</a></li>
                </ul>
            </div>
        </FrameworkDetailPage>
    );
}
