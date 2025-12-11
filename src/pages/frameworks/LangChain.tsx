import React from 'react';
import { FrameworkPage } from '../../components/FrameworkPage';

export default function LangChainPage() {
    return (
        <FrameworkPage
            title="LangChain"
            description="Building applications with LLMs through composability."
            framework="langchain"
            experience="Essential for building RAG applications and agentic workflows. The abstraction layer simplifies connecting to various LLM providers and vector stores."
            quickStart="pip install langchain"
            githubUrl="https://github.com/langchain-ai/langchain"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Chain interface for sequencing calls</li>
                    <li>Integrations with 100+ tools and data sources</li>
                    <li>Memory management for conversational context</li>
                    <li>Agents for dynamic decision making</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Agent Dojo</strong>: Heavily relies on LangChain for agent orchestration.</li>
                    <li><strong>ExPatPlan</strong>: Uses LangChain for processing job descriptions and matching.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://blog.langchain.dev/">LangChain Blog</a></li>
                    <li><a href="https://discord.gg/langchain">LangChain Discord</a></li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
