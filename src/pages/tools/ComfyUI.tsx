import React from 'react';
import { ToolDetailPage } from '../../components/ToolDetailPage';

export default function ComfyUIPage() {
    return (
        <ToolDetailPage
            title="ComfyUI"
            description="The most powerful and modular stable diffusion GUI."
            framework="comfyui"
            experience="My go-to for image generation pipelines. The node-based approach gives granular control over the diffusion process."
            quickStart="git clone https://github.com/comfyanonymous/ComfyUI"
            githubUrl="https://github.com/comfyanonymous/ComfyUI"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Node-based graph interface</li>
                    <li>Support for SD1.x, SD2.x, SDXL</li>
                    <li>Asynchronous execution</li>
                    <li>Custom node ecosystem</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Image Generation</strong>: Creating assets for blog posts and projects.</li>
                    <li><strong>ComfyUI-MCP</strong>: Exploring controlling ComfyUI via MCP.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://github.com/ltdrdata/ComfyUI-Manager">ComfyUI Manager</a></li>
                    <li><a href="https://civitai.com/">Civitai</a></li>
                </ul>
            </div>
        </ToolDetailPage>
    );
}
