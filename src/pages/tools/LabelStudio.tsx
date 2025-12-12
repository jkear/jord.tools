import React from 'react';
import { ToolDetailPage } from '../../components/ToolDetailPage';

export default function LabelStudioPage() {
    return (
        <ToolDetailPage
            title="Label Studio"
            description="Open source data labeling tool for audio, text, images, videos, and time series."
            framework="label-studio"
            experience="I use Label Studio to annotate datasets for fine-tuning LLMs and training computer vision models. The ability to connect it to a backend ML model for pre-labeling significantly speeds up the workflow."
            quickStart="pip install label-studio"
            githubUrl="https://github.com/heartexlabs/label-studio"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Multi-type data labeling (Audio, Text, Image, Video, Time Series)</li>
                    <li>Connect to ML models for pre-labeling</li>
                    <li>User management and collaboration</li>
                    <li>Export to standard formats (JSON, CSV, COCO, Pascal VOC)</li>
                </ul>
            </div>
        </ToolDetailPage>
    );
}
