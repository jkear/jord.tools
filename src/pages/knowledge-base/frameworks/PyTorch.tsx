import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function PyTorchPage() {
    return (
        <FrameworkPage
            title="PyTorch"
            description="An open source machine learning framework that accelerates the path from research prototyping to production deployment."
            framework="pytorch"
            experience="I've used PyTorch extensively for various deep learning projects, including custom model training and fine-tuning. Its dynamic computation graph makes debugging much easier compared to static graph frameworks."
            quickStart="pip install torch torchvision torchaudio"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Dynamic computational graphs</li>
                    <li>Rich ecosystem of tools and libraries</li>
                    <li>Native support for Python</li>
                    <li>Distributed training support</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
