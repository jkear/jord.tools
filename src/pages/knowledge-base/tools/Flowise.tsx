import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function FlowisePage() {
    return (
        <FrameworkPage
            title="Flowise"
            description="Drag & drop UI to build your customized LLM flow."
            framework="flowise"
            experience="Great for rapid prototyping of LLM chains without writing code. I use it to visualize complex logic before implementing in LangChain."
            quickStart="npx flowise start"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Visual drag-and-drop interface</li>
                    <li>Built on LangChain</li>
                    <li>Marketplace of templates</li>
                    <li>API endpoint generation</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
