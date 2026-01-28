import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function StartupCRMPage() {
    return (
        <ProjectDetailPage
            title="Startup CRM"
            description="Open-source CRM for small and medium businesses. Enhanced version of BottleCRM."
            framework="svelte"
            experience="Client work for Backflip.media - providing modern CRM solution with enhanced features over base open-source project."
            quickStart="git clone https://github.com/jkear/startup-crm.git"
            githubUrl="https://github.com/jkear/startup-crm"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Modifications</h3>
                <ul>
                    <li>Enhanced authentication system</li>
                    <li>Improved mobile responsiveness</li>
                    <li>Custom invoice management features</li>
                    <li>Tailwind-based custom styling</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>SvelteKit</li>
                    <li>Prisma ORM</li>
                    <li>TailwindCSS</li>
                    <li>Flowbite-Svelte</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
