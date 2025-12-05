import React from 'react';
import { FrameworkPage } from '../../../components/FrameworkPage';

export default function TensorFlowPage() {
    return (
        <FrameworkPage
            title="TensorFlow"
            description="An end-to-end open source platform for machine learning."
            framework="tensorflow"
            experience="Used TensorFlow for production-grade model deployment and TFX pipelines. The ecosystem is vast, though the learning curve can be steeper than PyTorch."
            quickStart="pip install tensorflow"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Robust production deployment with TF Serving</li>
                    <li>Keras high-level API for easy model building</li>
                    <li>TensorFlow.js for running models in the browser</li>
                    <li>TFLite for mobile and edge devices</li>
                </ul>
            </div>
        </FrameworkPage>
    );
}
