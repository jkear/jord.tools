import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function TensorFlowPage() {
    return (
        <FrameworkDetailPage
            title="TensorFlow"
            description="An end-to-end open source platform for machine learning."
            framework="tensorflow"
            experience="Used TensorFlow for production-grade model deployment and TFX pipelines. The ecosystem is vast, though the learning curve can be steeper than PyTorch."
            quickStart="pip install tensorflow"
            githubUrl="https://github.com/tensorflow/tensorflow"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Robust production deployment with TF Serving</li>
                    <li>Keras high-level API for easy model building</li>
                    <li>TensorFlow.js for running models in the browser</li>
                    <li>TFLite for mobile and edge devices</li>
                </ul>

                <h3>My Projects Using This</h3>
                <ul>
                    <li><strong>Legacy Projects</strong>: Several older computer vision projects were built using TensorFlow.</li>
                </ul>

                <h3>Community Resources</h3>
                <ul>
                    <li><a href="https://discuss.tensorflow.org/">TensorFlow Forum</a></li>
                    <li><a href="https://www.tensorflow.org/hub">TensorFlow Hub</a></li>
                </ul>
            </div>
        </FrameworkDetailPage>
    );
}
