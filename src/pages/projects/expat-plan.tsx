import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function ExPatPlanPage() {
    return (
        <ProjectDetailPage
            title="ExPatPlan"
            description="AI-powered job search for HSM visa sponsorship in the Netherlands."
            framework="nextjs"
            experience="Tools and resources for individuals planning to work abroad."
            quickStart="git clone https://github.com/jkear/exp4t.git"
            githubUrl="https://github.com/jkear/exp4t"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Purpose</h3>
                <p>AI-powered job search I made for a friend to help get a Highly Skilled Migrant Visa sponsorship in the Netherlands.</p>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Next.js</li>
                    <li>LangChain</li>
                    <li>Supabase</li>
                    <li>OpenAI</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
