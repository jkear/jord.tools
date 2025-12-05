import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function LangChainPage() {
    return (
        <FrameworkPage
            title="LangChain"
            description="Building applications with LLMs through composability."
            framework="langchain"
            experience="Essential for building RAG applications and agentic workflows. The abstraction layer simplifies connecting to various LLM providers and vector stores."
            quickStart="pip install langchain"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Chain interface for sequencing calls</li>
                    <li>Integrations with 100+ tools and data sources</li>
                    <li>Memory management for conversational context</li>
                    <li>Agents for dynamic decision making</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
