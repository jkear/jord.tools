import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function SpotLightPage() {
    return (
        <ProjectDetailPage
            title="SPOT-Light"
            description="Illuminating political influence through data analysis."
            framework="python"
            experience="Data analysis and visualization for specific datasets or use cases."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Purpose</h3>
                <p>Analysis and visualization tool.</p>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>Neo4j</li>
                    <li>Streamlit</li>
                    <li>OpenAI</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
