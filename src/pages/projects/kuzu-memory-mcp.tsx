import { FrameworkPage } from "../../components/FrameworkPage";

export default function KuzuMemoryMCPPage() {
    return (
        <FrameworkPage
            title="Kuzu Memory Graph MCP"
            description="MCP server for Kuzu graph database memory. KUZU is the ancient Sumarian word for wisdom."
            framework="kuzu-mcp"
            githubUrl="https://github.com/jkear/kuzu-memory-graph-mcp"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Context & Background</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground">
                            {/* Add your context here */}
                            [TODO: Add context about why this project was built, challenges faced, and lessons learned.]
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Project README</h2>
                    <div className="prose prose-invert max-w-none bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                        {/* Placeholder for README content */}
                        <p>Loading README content...</p>
                        {/* You can fetch and render the README here or paste it manually */}
                    </div>
                </section>
            </div>
        </FrameworkPage>
    );
}
