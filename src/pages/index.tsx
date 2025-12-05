import { FeaturedPost } from "../components/FeaturedPost";
import { BlogCard } from "../components/BlogCard";
import { Sidebar } from "../components/Sidebar";
import { ToolsForAI } from "../components/ToolsForAI";
import { GlassCard } from "../components/GlassCard";

const featuredPost = {
    title: "The Future of AI in Creative Expression",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of music composition, political analysis, and creative tools. From AI-generated melodies to predictive political models, we're witnessing a revolution in how technology augments human creativity.",
    image: "https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Njg5OTYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Jordan Kearfott",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "AI"
};

const blogPosts = [
    {
        id: "r37-healthcare-ai",
        title: "R37 Healthcare AI Study Guide",
        excerpt: "An interactive deep dive into healthcare AI applications, covering retrieval systems, ranking algorithms, and generative AI for unstructured data.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYWl8ZW58MXx8fHwxNzU2OTQzODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Jordan Kearfott",
        date: "May 20, 2024",
        readTime: "10 min read",
        category: "Healthcare AI",
        link: "/blog/r37-healthcare-ai"
    },
    {
        id: "1",
        title: "Machine Learning Models in Music Composition",
        excerpt: "Diving deep into how transformer models are being trained on vast musical datasets to generate original compositions. Exploring the intersection of creativity and artificial intelligence.",
        image: "https://images.unsplash.com/photo-1514189831078-ee41c3568075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzU2OTA0NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Jordan Kearfott",
        date: "January 12, 2025",
        readTime: "7 min read",
        category: "AI"
    },
    {
        id: "2",
        title: "The Evolution of Political Discourse in Digital Spaces",
        excerpt: "Analyzing how social media algorithms shape political conversations and the implications for democratic processes. A look at filter bubbles and echo chambers.",
        image: "https://images.unsplash.com/photo-1711816769781-0a8194f44399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29mZmVlJTIwc2V0dXB8ZW58MXx8fHwxNzU2OTQzODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Jordan Kearfott",
        date: "January 10, 2025",
        readTime: "4 min read",
        category: "Politics"
    },
    {
        id: "3",
        title: "AI-Powered Audio Production Tools",
        excerpt: "A technical review of the latest AI tools transforming music production. From automatic mastering to intelligent mixing suggestions, technology is reshaping the studio.",
        image: "https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Njg5OTYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Jordan Kearfott",
        date: "January 8, 2025",
        readTime: "6 min read",
        category: "Music"
    },
    {
        id: "4",
        title: "Predictive Models in Election Analysis",
        excerpt: "How machine learning algorithms are being used to forecast electoral outcomes and analyze voting patterns. The intersection of data science and political science.",
        image: "https://images.unsplash.com/photo-1514189831078-ee41c3568075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzU2OTA0NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Jordan Kearfott",
        date: "January 5, 2025",
        readTime: "5 min read",
        category: "Politics"
    }
];

export default function HomePage() {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-8">
                <main className="lg:col-span-2">
                    <ToolsForAI />

                    <div className="mb-8">
                        <h2 className="text-title-2 mb-6">Latest Posts</h2>
                        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 xl:gap-10 md:auto-rows-fr">
                            {blogPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* Load More */}
                    <div className="text-center">
                        <GlassCard
                            className="inline-block px-8 py-3 cursor-pointer"
                            hoverEffect
                            role="button"
                            liquid={true}
                            liquidConfig={{
                                elasticity: 0.2,
                                displacementScale: 30, // Subtler effect for button
                                padding: "0px",
                            }}
                        >
                            Load More Posts
                        </GlassCard>
                    </div>
                </main>

                <aside className="space-y-8">
                    <FeaturedPost {...featuredPost} compact />
                    <Sidebar />
                </aside>
            </div>
        </>
    );
}
