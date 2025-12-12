import React from 'react';
import { ToolDetailPage } from '../../components/ToolDetailPage';

export default function N8nPage() {
    return (
        <ToolDetailPage
            title="n8n"
            description="Workflow automation tool."
            framework="n8n"
            experience="The backbone of my automation tasks. Its recent AI agent nodes make it incredibly powerful for integrating LLMs into business processes."
            quickStart="npx n8n start"
            githubUrl="https://github.com/n8n-io/n8n"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Fair-code licensed workflow automation</li>
                    <li>Native AI/LLM integration nodes</li>
                    <li>Self-hostable</li>
                    <li>Visual workflow editor</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Automation</strong>: Automating content publishing and social media updates.</li>
                    <li><strong>Data Pipelines</strong>: Moving data between databases and AI processing steps.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://community.n8n.io/">n8n Forum</a></li>
                </ul>
            </div>
        </ToolDetailPage>
    );
}
