import { GlassCard } from "../../components/GlassCard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function R37HealthcareAIPost() {
    return (
        <div className="max-w-4xl mx-auto pb-20 space-y-8">
            <div className="space-y-4">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    R37 Healthcare AI Study Guide
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>May 20, 2024</span>
                    <span>•</span>
                    <span>Healthcare AI</span>
                </div>
            </div>

            <GlassCard className="p-8 prose prose-invert max-w-none">
                <p className="lead">
                    This study guide focuses on the application of Artificial Intelligence in the healthcare domain, specifically targeting the R37 grant mechanism areas of interest.
                </p>

                <h2>Core Topics</h2>

                <h3>1. Retrieval Systems in Healthcare</h3>
                <ul>
                    <li><strong>Electronic Health Records (EHR) Retrieval</strong>: Techniques for efficient querying and retrieval of patient data.</li>
                    <li><strong>Medical Literature Retrieval</strong>: Advanced search algorithms for PubMed and other medical databases.</li>
                    <li><strong>Semantic Search</strong>: Using embeddings and vector databases to understand medical context.</li>
                </ul>

                <h3>2. Ranking Algorithms</h3>
                <ul>
                    <li><strong>Clinical Decision Support</strong>: Ranking potential diagnoses or treatment options based on patient data.</li>
                    <li><strong>Prioritization</strong>: Algorithms for triaging patients or prioritizing lab results.</li>
                </ul>

                <h3>3. Generative AI for Unstructured Data</h3>
                <ul>
                    <li><strong>Clinical Note Summarization</strong>: Using LLMs to generate concise summaries of long clinical notes.</li>
                    <li><strong>Medical Imaging Reports</strong>: Generating text reports from medical images.</li>
                    <li><strong>Patient Communication</strong>: Drafting responses to patient portal messages.</li>
                </ul>

                <h2>Interactive Modules</h2>
                <p><em>(Coming Soon: Interactive code examples and quizzes)</em></p>

                <h2>Resources</h2>
                <ul>
                    <li><a href="https://grants.nih.gov/grants/funding/r37.htm" target="_blank" rel="noopener noreferrer">NIH R37 Information</a></li>
                    <li><a href="https://huggingface.co/models?pipeline_tag=text-classification&other=medical" target="_blank" rel="noopener noreferrer">Hugging Face Medical Models</a></li>
                </ul>
            </GlassCard>
        </div>
    );
}
