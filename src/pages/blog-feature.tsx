import { LiquidGlass } from "@liquidglass/react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: "ml-music",
        title: "Machine Learning Models in Music Composition",
        excerpt: "How transformer models generate original compositions.",
        date: "January 12, 2025",
        readTime: "7 min read",
    },
    {
        id: "political-discourse",
        title: "The Evolution of Political Discourse",
        excerpt: "Analyzing social media algorithms and democratic processes.",
        date: "January 10, 2025",
        readTime: "4 min read",
    },
];

export function BlogFeature() {
    return (
        <div className="w-full" id="posts">
            <LiquidGlass borderRadius={50} brightness={.75} blur={1.5} contrast={1.2} shadowIntensity={2} elasticity={.2} displacementScale={20}>
                <div className="w-full px-10 py-12 space-y-7">
                    <h2 className="text-4xl font-semibold text-white/90 drop-shadow-md">Latest Posts</h2>
                    <div className="space-y-5">
                        {blogPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="block space-y-2 border-b border-white/15 pb-5 last:border-b-0 last:pb-0 hover:bg-white/5 rounded-lg transition-colors -mx-2 px-2 py-2">
                                <h3 className="text-xl font-semibold text-white/85 leading-snug">{post.title}</h3>
                                <p className="text-base text-white/75 leading-relaxed">{post.excerpt}</p>
                                <p className="text-xs tracking-wide text-white/60 uppercase">{post.date} • {post.readTime}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </LiquidGlass>
        </div>
    );
}
