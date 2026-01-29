import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MLMusicPost() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto px-6 sm:px-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <article className="space-y-8">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Machine Learning Models in Music Composition</h1>
                    <p className="text-muted-foreground">January 12, 2025 • 7 min read</p>
                </header>

                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    <div className="p-6 sm:p-8 prose prose-invert max-w-none">
                        <h2>The Rise of AI-Generated Music</h2>
                        <p>
                            Transformer architectures have fundamentally changed how we approach music generation. 
                            What started with simple MIDI sequence prediction has evolved into systems capable of 
                            generating complex, multi-instrumental compositions that can fool even trained musicians.
                        </p>

                        <h2>How Transformers Process Music</h2>
                        <p>
                            Music, at its core, is sequential data with long-range dependencies. A melody introduced 
                            in the first verse often returns in the chorus or bridge. Traditional RNNs struggled with 
                            these patterns, but attention mechanisms allow transformers to "remember" musical themes 
                            across thousands of tokens.
                        </p>
                        <p>
                            The key innovations include:
                        </p>
                        <ul>
                            <li><strong>Relative positional encoding</strong> - captures the distance between notes rather than absolute positions</li>
                            <li><strong>Multi-track attention</strong> - allows the model to understand how different instruments interact</li>
                            <li><strong>Hierarchical generation</strong> - generates structure (verse, chorus) before filling in details</li>
                        </ul>

                        <h2>Notable Models and Approaches</h2>
                        <p>
                            Several architectures have pushed the boundaries:
                        </p>
                        <ul>
                            <li><strong>Music Transformer (Google)</strong> - introduced relative attention for symbolic music</li>
                            <li><strong>Jukebox (OpenAI)</strong> - generates raw audio with lyrics in multiple genres</li>
                            <li><strong>MusicLM (Google)</strong> - text-to-music generation with impressive coherence</li>
                            <li><strong>Stable Audio</strong> - latent diffusion applied to audio generation</li>
                        </ul>

                        <h2>The Creative Process</h2>
                        <p>
                            I've been experimenting with fine-tuning smaller models on specific genres and artists. 
                            The results are fascinating—the model learns not just note patterns but stylistic 
                            tendencies: how a jazz pianist might voice a chord differently than a classical composer, 
                            or how a metal guitarist approaches rhythm differently than a funk bassist.
                        </p>

                        <h2>Ethical Considerations</h2>
                        <p>
                            The elephant in the room: what happens when AI can generate music indistinguishable from 
                            human compositions? Copyright, attribution, and the very nature of creativity are being 
                            questioned. My take is that these tools should augment human creativity, not replace it—
                            think of them as incredibly sophisticated collaborators.
                        </p>

                        <h2>What's Next</h2>
                        <p>
                            The convergence of multimodal models is particularly exciting. Imagine describing a scene 
                            and having a model generate a perfectly fitting soundtrack, or having it analyze video 
                            footage and compose adaptive music that responds to the emotional arc. We're not far from 
                            that reality.
                        </p>
                    </div>
                </LiquidGlass>
            </article>
        </div>
    );
}
