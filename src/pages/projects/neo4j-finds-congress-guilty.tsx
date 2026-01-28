import React from 'react';
import { ProjectDetailPage } from '../../components/ProjectDetailPage';

export default function Neo4jFindsCongressGuiltyPage() {
    return (
        <ProjectDetailPage
            title="Neo4j Finds Congress Guilty"
            description="Political campaign finance data pipeline with graph analysis. Tracing dark money from corporations to shell companies and then to politicians."
            framework="python"
            experience="Built an ETL pipeline with LLM-enhanced entity extraction and graph database storage for political finance analysis."
            quickStart="git clone https://github.com/jkear/FEC-data-and-HR1-199-neo4j-dump.git"
            githubUrl="https://github.com/jkear/FEC-data-and-HR1-199-neo4j-dump"
        >
            <div className="prose prose-invert max-w-none">
                <h3>Key Features</h3>
                <ul>
                    <li>Complete FEC data parsing pipeline</li>
                    <li>Graph-based entity relationship mapping</li>
                    <li>Dark money pattern detection and analysis</li>
                    <li>Vector embeddings for semantic search</li>
                    <li>Complex coordination detection algorithms</li>
                </ul>

                <h3>Technology Stack</h3>
                <ul>
                    <li>Python</li>
                    <li>OpenAI API</li>
                    <li>Neo4j</li>
                    <li>LangChain</li>
                    <li>APOC</li>
                </ul>
            </div>
        </ProjectDetailPage>
    );
}
