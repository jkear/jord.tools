import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function ComfyUIPage() {
    return (
        <FrameworkPage
            title="ComfyUI"
            description="The most powerful and modular stable diffusion GUI."
            framework="comfyui"
            experience="My go-to for image generation pipelines. The node-based approach gives granular control over the diffusion process."
            quickStart="git clone https://github.com/comfyanonymous/ComfyUI"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Node-based graph interface</li>
                    <li>Support for SD1.x, SD2.x, SDXL</li>
                    <li>Asynchronous execution</li>
                    <li>Custom node ecosystem</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
