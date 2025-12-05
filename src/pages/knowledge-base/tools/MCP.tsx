import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function MCPPage() {
    return (
        <FrameworkPage
            title="Model Context Protocol"
            description="A standard for connecting AI assistants to systems."
            framework="mcp"
            experience="I've built several MCP servers to connect Claude to local databases and tools. It's the future of agentic interoperability."
            quickStart="npm install @modelcontextprotocol/sdk"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Standardized interface for AI tools</li>
                    <li>Client-Host-Server architecture</li>
                    <li>Support for resources, prompts, and tools</li>
                    <li>Language agnostic protocol</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
