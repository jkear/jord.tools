import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function ObVaultPage() {
    return (
        <ProjectDetailPage
            title="ObVault"
            description="Secure vault and password management application."
            framework="electron"
            experience="Local secure storage for sensitive information and passwords."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Purpose</h3>
                <p>Secure vault and password management application.</p>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Electron</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
