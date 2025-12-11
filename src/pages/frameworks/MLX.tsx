import React from 'react';
import { FrameworkPage } from '../../components/FrameworkPage';

export default function MLXPage() {
    return (
        <FrameworkPage
            title="MLX"
            description="An array framework for machine learning on Apple silicon."
            framework="mlx"
            experience="MLX has been a game-changer for running local LLMs. The unified memory architecture support provides impressive performance and makes getting a macbook no-brainer, imo."
            quickStart="pip install mlx"
            githubUrl="https://github.com/ml-explore/mlx"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Optimized for Apple Silicon</li>
                    <li>Familiar NumPy-like API</li>
                    <li>Unified memory model</li>
                    <li>Dynamic graph construction</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Local LLM Experiments</strong>: Various experiments running quantized models locally.</li>
                    <li><strong>f5-tts-mlx</strong>: Experimentation with text-to-speech on MLX.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://github.com/ml-explore/mlx-examples">MLX Examples</a></li>
                    <li><a href="https://huggingface.co/mlx-community">Hugging Face MLX Community</a></li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
