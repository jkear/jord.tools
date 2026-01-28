import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function MarkerMCPPage() {
    return (
        <ProjectDetailPage
            title="Marker MCP Server"
            description="Advanced PDF to Markdown conversion with AI enhancement and layout refinement."
            framework="python"
            experience="Production-ready document processing with AI-driven layout analysis surpassing original capabilities."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Enhancements</h3>
                <ul>
                    <li>Batch processing capabilities for multiple documents</li>
                    <li>Chunked conversion for large document handling</li>
                    <li>LLM-powered layout refinement and correction</li>
                    <li>Enhanced table extraction and formatting</li>
                    <li>Custom preprocessing for improved accuracy</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>Marker library</li>
                    <li>Surya OCR</li>
                    <li>Multiple LLM services</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
