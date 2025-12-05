import { GlassCard } from "./GlassCard";

export function Sidebar() {
  const categories = [
    { name: "AI", count: 12 },
    { name: "Music", count: 8 },
    { name: "Politics", count: 6 }
  ];

  const recentPosts = [
    {
      title: "The Future of AI in Creative Expression",
      date: "Jan 15, 2025"
    },
    {
      title: "Machine Learning Models in Music Composition",
      date: "Jan 12, 2025"
    },
    {
      title: "The Evolution of Political Discourse in Digital Spaces",
      date: "Jan 10, 2025"
    }
  ];

  return (
    <aside className="space-y-6">
      {/* Categories */}
      <GlassCard className="p-6">
        <h3 className="mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm text-muted-foreground bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </GlassCard>

      {/* Recent Posts */}
      <GlassCard className="p-6">
        <h3 className="mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <a href="#" className="block hover:text-primary transition-colors">
                <p className="text-sm leading-tight mb-1">{post.title}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </GlassCard>

      {/* Tools for AI Quick Links */}
      <GlassCard className="p-6">
        <h3 className="mb-4">Featured AI Tools</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                <span className="text-xs">🤖</span>
              </div>
              <span className="text-sm">ChatGPT</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                <span className="text-xs">🎨</span>
              </div>
              <span className="text-sm">Midjourney</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
              <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                <span className="text-xs">💻</span>
              </div>
              <span className="text-sm">GitHub Copilot</span>
            </a>
          </li>
        </ul>
        <a href="#" className="block mt-4 text-sm text-primary hover:underline transition-colors">
          View all tools →
        </a>
      </GlassCard>

      {/* Newsletter */}
      <GlassCard className="p-6">
        <h3 className="mb-4">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors text-center">
            Subscribe
          </button>
        </div>
      </GlassCard>
    </aside>
  );
}