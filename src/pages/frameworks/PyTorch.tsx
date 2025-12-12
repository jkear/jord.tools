import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function PyTorchPage() {
    return (
        <FrameworkDetailPage
            title="PyTorch"
            description="An open source machine learning framework that accelerates the path from research prototyping to production deployment."
            framework="pytorch"
            experience="I've used PyTorch extensively for various deep learning projects, including custom model training and fine-tuning. Its dynamic computation graph makes debugging much easier compared to static graph frameworks."
            quickStart="pip install torch torchvision torchaudio"
            githubUrl="https://github.com/pytorch/pytorch"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Dynamic computational graphs</li>
                    <li>Rich ecosystem of tools and libraries</li>
                    <li>Native support for Python</li>
                    <li>Distributed training support</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Agent Dojo</strong>: Uses PyTorch for some underlying model interactions.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://discuss.pytorch.org/">PyTorch Forums</a></li>
                    <li><a href="https://pytorch.org/hub/">PyTorch Hub</a></li>
                </ul>
            </div>
        </FrameworkDetailPage>
    );
}
