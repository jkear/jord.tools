import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function LangGraphPage() {
    return (
        <FrameworkDetailPage
            title="LangGraph"
            description="Building stateful, multi-actor applications with LLMs."
            framework="langgraph"
            experience="Moving beyond simple chains, LangGraph allows for complex, cyclic workflows which are crucial for building robust agents."
            quickStart="pip install langgraph"
            githubUrl="https://github.com/langchain-ai/langgraph"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Stateful graph-based orchestration</li>
                    <li>Support for cyclic flows (loops)</li>
                    <li>Built on top of LangChain</li>
                    <li>Ideal for multi-agent systems</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Agent Dojo</strong>: The core orchestration engine is transitioning to LangGraph.</li>
                    <li><strong>Sequential Thinking MCP</strong>: Implements cyclic thought processes using graph-based state.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://langchain-ai.github.io/langgraph/tutorials/">LangGraph Tutorials</a></li>
                </ul>
            </div>
        </FrameworkDetailPage>
    );
}
