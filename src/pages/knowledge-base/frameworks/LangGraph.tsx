import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function LangGraphPage() {
    return (
        <FrameworkPage
            title="LangGraph"
            description="Building stateful, multi-actor applications with LLMs."
            framework="langgraph"
            experience="Moving beyond simple chains, LangGraph allows for complex, cyclic workflows which are crucial for building robust agents."
            quickStart="pip install langgraph"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Stateful graph-based orchestration</li>
                    <li>Support for cyclic flows (loops)</li>
                    <li>Built on top of LangChain</li>
                    <li>Ideal for multi-agent systems</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
