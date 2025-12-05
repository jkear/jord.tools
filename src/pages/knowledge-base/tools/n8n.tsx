import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function N8nPage() {
    return (
        <FrameworkPage
            title="n8n"
            description="Workflow automation tool."
            framework="n8n"
            experience="The backbone of my automation tasks. Its recent AI agent nodes make it incredibly powerful for integrating LLMs into business processes."
            quickStart="npx n8n start"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Fair-code licensed workflow automation</li>
                    <li>Native AI/LLM integration nodes</li>
                    <li>Self-hostable</li>
                    <li>Visual workflow editor</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
