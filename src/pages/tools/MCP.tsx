import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function MCPPage() {
    return (
        <FrameworkDetailPage
            title="Model Context Protocol"
            description="A standard for connecting AI assistants to systems."
            framework="mcp"
            experience="I've built several MCP servers to connect to local databases and tools. After additional security layers, it'll be the future of agentic interoperability."
            quickStart="npm install @modelcontextprotocol/sdk"
            githubUrl="https://github.com/modelcontextprotocol"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Standardized interface for AI tools</li>
                    <li>Client-Host-Server architecture</li>
                    <li>Support for resources, prompts, and tools</li>
                    <li>Language agnostic protocol</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>kuzu-memory-graph-mcp</strong>: A custom MCP server for graph memory.</li>
                    <li><strong>reaper-mcp-server</strong>: Controlling the Reaper DAW via MCP.</li>
                    <li><strong>Agent Dojo</strong>: Consumes MCP servers to empower agents.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://discord.gg/mcp">MCP Discord</a></li>
                </ul>
            </div>
        </FrameworkDetailPage>
    );
}
