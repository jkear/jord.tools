import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function LongPDFSplitterPage() {
    return (
        <ProjectDetailPage
            title="LongPDFsplitter"
            description="PDF text splitting tool optimized for TTS processing."
            framework="python"
            experience="I use this to split textbooks and other big pdf files for text-to-speech processing."
            githubUrl=""
        >
            <div className="prose prose-invert max-w-none">
                <h3>Purpose</h3>
                <p>Split large PDFs into optimized text chunks for text-to-speech processing.</p>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>pdfplumber</li>
                    <li>PyPDF2</li>
                    <li>OpenAI</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
