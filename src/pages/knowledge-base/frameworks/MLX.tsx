import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function MLXPage() {
    return (
        <FrameworkPage
            title="MLX"
            description="An array framework for machine learning on Apple silicon."
            framework="mlx"
            experience="MLX has been a game-changer for running local LLMs on my Mac. The unified memory architecture support provides impressive performance."
            quickStart="pip install mlx"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Optimized for Apple Silicon (M1/M2/M3)</li>
                    <li>Familiar NumPy-like API</li>
                    <li>Unified memory model</li>
                    <li>Dynamic graph construction</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
