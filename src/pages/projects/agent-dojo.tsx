import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function AgentDojoPage() {
    return (
        <ProjectDetailPage
            title="Agent Dojo"
            description="A modern AI agent orchestration framework combining CrewAI concepts with LangGraph workflows."
            framework="langgraph"
            experience="Designed for both desktop and production deployment. Significant original architecture combining multiple AI frameworks into a cohesive system."
            quickStart="git clone https://github.com/jkear/Agent_Dojo.git"
            githubUrl="https://github.com/jkear/Agent_Dojo"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Drag-and-drop canvas interface for workflow creation</li>
                    <li>Multi-agent orchestration with roles and goals</li>
                    <li>Model Context Protocol (MCP) tool integration</li>
                    <li>Real-time collaboration and observability via Langfuse</li>
                    <li>App integrations through Composio OAuth connections</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>FastAPI</li>
                    <li>React 18+</li>
                    <li>TypeScript</li>
                    <li>Material-UI</li>
                    <li>LangGraph</li>
                    <li>Composio</li>
                    <li>SQLite</li>
                    <li>Langfuse</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
