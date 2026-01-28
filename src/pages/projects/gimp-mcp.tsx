import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function GimpMCPPage() {
    return (
        <ProjectDetailPage
            title="GIMP MCP Server"
            description="AI-powered image editing integration with GIMP."
            framework="python"
            experience="Bringing advanced AI capabilities to the open-source GIMP image editor through MCP integration."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>AI-driven background removal and object segmentation</li>
                    <li>Intelligent inpainting and content restoration</li>
                    <li>Object recognition and automated masking</li>
                    <li>Style transfer and artistic effect application</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>GIMP plugin architecture</li>
                    <li>AI models</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
