import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PoliticalDiscoursePost() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto px-6 sm:px-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <article className="space-y-8">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">The Evolution of Political Discourse</h1>
                    <p className="text-muted-foreground">January 10, 2025 • 4 min read</p>
                </header>

                <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}>
                    <div className="p-6 sm:p-8 prose prose-invert max-w-none">
                        <h2>Algorithms and the Public Square</h2>
                        <p>
                            Social media platforms have become the de facto public square for political discourse. 
                            But unlike a physical town hall, these spaces are mediated by algorithms optimized for 
                            engagement—not understanding, not consensus, not truth.
                        </p>

                        <h2>The Engagement Trap</h2>
                        <p>
                            The fundamental problem is that outrage drives engagement. Content that makes you angry 
                            keeps you scrolling. Nuanced takes get buried while inflammatory hot takes go viral. 
                            The algorithm doesn't care about democratic health—it cares about time-on-platform.
                        </p>
                        <p>
                            This creates a race to the bottom where political actors learn to optimize for virality 
                            rather than policy substance. Complex issues get reduced to soundbites. Opponents become 
                            enemies rather than fellow citizens with different perspectives.
                        </p>

                        <h2>Filter Bubbles and Echo Chambers</h2>
                        <p>
                            Recommendation systems create personalized realities. You see content that matches your 
                            existing beliefs, making those beliefs feel universal and obvious. Meanwhile, your 
                            neighbors might inhabit a completely different information ecosystem, making basic 
                            conversation about shared challenges increasingly difficult.
                        </p>

                        <h2>What Can Be Done?</h2>
                        <p>
                            There's no silver bullet, but several approaches show promise:
                        </p>
                        <ul>
                            <li><strong>Algorithmic transparency</strong> - requiring platforms to explain why content is shown</li>
                            <li><strong>Bridging-based ranking</strong> - promoting content that resonates across political divides</li>
                            <li><strong>Friction by design</strong> - adding speed bumps before sharing inflammatory content</li>
                            <li><strong>Decentralized alternatives</strong> - platforms where users control their own algorithms</li>
                        </ul>

                        <h2>The Path Forward</h2>
                        <p>
                            Technology alone won't fix this. We need a combination of platform accountability, 
                            media literacy education, and a cultural shift toward valuing understanding over 
                            winning arguments. The tools we build shape the conversations we have—and right now, 
                            we're building tools optimized for conflict.
                        </p>
                    </div>
                </LiquidGlass>
            </article>
        </div>
    );
}
