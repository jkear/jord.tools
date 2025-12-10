import { LiquidGlass } from "@liquidglass/react";

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
    /* 
       tailwind: vertical space between children 1.5rem
       .css: margin-top: 1.5rem (for children);
    */
    <aside className="space-y-6">
      {/* Categories */}
      {/* 
         tailwind: padding 1.5rem
         .css: padding: 1.5rem;
      */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6">
        {/* 
           tailwind: margin bottom 1rem
           .css: margin-bottom: 1rem;
        */}
        <h3 className="mb-4">Categories</h3>
        {/* 
           tailwind: vertical space between children 0.5rem
           .css: margin-top: 0.5rem (for children);
        */}
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              {/* 
                 tailwind: flex container, align items center, justify space between, padding 0.5rem, rounded corners, hover: white background with 20% opacity, transition colors
                 .css: display: flex; align-items: center; justify-content: space-between; padding: 0.5rem; border-radius: 0.5rem; background-color: rgb(255 255 255 / 0.2) (on hover); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
              */}
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <span>{category.name}</span>
                {/* 
                   tailwind: small text, muted foreground color, white background with 20% opacity, padding x 0.5rem, padding y 0.25rem, full rounded corners
                   .css: font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--muted-foreground)); background-color: rgb(255 255 255 / 0.2); padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem; border-radius: 9999px;
                */}
                <span className="text-sm text-muted-foreground bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </LiquidGlass>

      {/* Recent Posts */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6">
        <h3 className="mb-4">Recent Posts</h3>
        {/* 
           tailwind: vertical space between children 1rem
           .css: margin-top: 1rem (for children);
        */}
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index}>
              {/* 
                 tailwind: block display, hover: primary text color, transition colors
                 .css: display: block; color: hsl(var(--primary)) (on hover); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
              */}
              <a href="#" className="block hover:text-primary transition-colors">
                {/* 
                   tailwind: small text, tight line height, margin bottom 0.25rem
                   .css: font-size: 0.875rem; line-height: 1.25; margin-bottom: 0.25rem;
                */}
                <p className="text-sm leading-tight mb-1">{post.title}</p>
                {/* 
                   tailwind: extra small text, muted foreground color
                   .css: font-size: 0.75rem; line-height: 1rem; color: hsl(var(--muted-foreground));
                */}
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </LiquidGlass>

      {/* Tools for AI Quick Links */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6">
        <h3 className="mb-4">Featured AI Tools</h3>
        {/* 
           tailwind: vertical space between children 0.75rem
           .css: margin-top: 0.75rem (for children);
        */}
        <ul className="space-y-3">
          <li>
            {/* 
               tailwind: flex container, align items center, gap 0.5rem, padding 0.5rem, rounded corners, hover: white background with 20% opacity, transition colors
               .css: display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.5rem; background-color: rgb(255 255 255 / 0.2) (on hover); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            */}
            <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
              {/* 
                 tailwind: width 1.5rem, height 1.5rem, gradient background, rounded corners, flex center
                 .css: width: 1.5rem; height: 1.5rem; background-image: linear-gradient(to bottom right, rgb(var(--primary) / 0.2), rgb(var(--secondary) / 0.2)); border-radius: 0.25rem; display: flex; align-items: center; justify-content: center;
              */}
              <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                {/* 
                   tailwind: extra small text
                   .css: font-size: 0.75rem; line-height: 1rem;
                */}
                <span className="text-xs">🤖</span>
              </div>
              {/* 
                 tailwind: small text
                 .css: font-size: 0.875rem; line-height: 1.25rem;
              */}
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
        {/* 
           tailwind: block display, margin top 1rem, small text, primary text color, hover: underline, transition colors
           .css: display: block; margin-top: 1rem; font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--primary)); text-decoration: underline (on hover); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        */}
        <a href="#" className="block mt-4 text-sm text-primary hover:underline transition-colors">
          View all tools →
        </a>
      </LiquidGlass>

      {/* Newsletter */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="p-6">
        <h3 className="mb-4">Newsletter</h3>
        {/* 
           tailwind: small text, muted foreground color, margin bottom 1rem
           .css: font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 1rem;
        */}
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
      </LiquidGlass>
    </aside>
  );
}