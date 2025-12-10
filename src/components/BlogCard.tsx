import { ImageWithFallback } from './figma/ImageWithFallback';
import { LiquidGlass } from "@liquidglass/react";
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const CardContent = (
    /* 
       tailwind: hide overflow, relative positioning, create stacking context (isolate), flex container, full height, column layout, z-index 1 on hover/focus
       .css: overflow: hidden; position: relative; isolation: isolate; display: flex; height: 100%; flex-direction: column; z-index: 1 (on hover/focus-within);
    */
    <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="overflow-hidden relative isolate flex h-full flex-col hover:z-[1] focus-within:z-[1]">
      {/* 
         tailwind: 16:9 aspect ratio, hide overflow
         .css: aspect-ratio: 16/9; overflow: hidden;
      */}
      <div className="aspect-video overflow-hidden">
        {/* 
           tailwind: full width, full height, cover object fit
           .css: width: 100%; height: 100%; object-fit: cover;
        */}
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* 
         tailwind: padding 1.5rem, flex container, grow to fill space (flex-1), column layout, gap 1rem
         .css: padding: 1.5rem; display: flex; flex: 1 1 0%; flex-direction: column; gap: 1rem;
      */}
      <div className="p-6 flex flex-1 flex-col gap-4">
        {/* 
           tailwind: flex container, align items center, gap 1rem
           .css: display: flex; align-items: center; gap: 1rem;
        */}
        <div className="flex items-center gap-4">
          {/* 
             tailwind: padding x 0.75rem, padding y 0.25rem, primary bg with 10% opacity, primary text color, small text, full rounded corners
             .css: padding-left: 0.75rem; padding-right: 0.75rem; padding-top: 0.25rem; padding-bottom: 0.25rem; background-color: rgb(var(--primary) / 0.1); color: rgb(var(--primary)); font-size: 0.875rem; border-radius: 9999px;
          */}
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {post.category}
          </span>
          {/* 
             tailwind: muted foreground color, small text
             .css: color: hsl(var(--muted-foreground)); font-size: 0.875rem;
          */}
          <span className="text-muted-foreground text-sm">{post.readTime}</span>
        </div>
        {/* 
           tailwind: extra large text, tight line height
           .css: font-size: 1.25rem; line-height: 1.25;
        */}
        <h3 className="text-xl leading-tight">{post.title}</h3>
        {/* 
           tailwind: muted foreground color, relaxed line height
           .css: color: hsl(var(--muted-foreground)); line-height: 1.625;
        */}
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        {/* 
           tailwind: margin top auto (push to bottom), flex container, align items center, justify space between, padding top 0.5rem
           .css: margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 0.5rem;
        */}
        <div className="mt-auto flex items-center justify-between pt-2">
          {/* 
             tailwind: flex container, align items center, gap 0.75rem
             .css: display: flex; align-items: center; gap: 0.75rem;
          */}
          <div className="flex items-center gap-3">
            {/* 
               tailwind: width 2rem, height 2rem, gradient background, full rounded corners, flex center
               .css: width: 2rem; height: 2rem; background-image: linear-gradient(to bottom right, rgb(var(--primary) / 0.2), rgb(var(--secondary) / 0.2)); border-radius: 9999px; display: flex; align-items: center; justify-content: center;
            */}
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              {/* 
                 tailwind: small text
                 .css: font-size: 0.875rem;
              */}
              <span className="text-sm">{post.author[0]}</span>
            </div>
            <div>
              {/* 
                 tailwind: small text
                 .css: font-size: 0.875rem;
              */}
              <p className="text-sm">{post.author}</p>
              {/* 
                 tailwind: extra small text, muted foreground color
                 .css: font-size: 0.75rem; color: hsl(var(--muted-foreground));
              */}
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          {/* 
             tailwind: primary text color, underline on hover, small text, transition all properties
             .css: color: hsl(var(--primary)); text-decoration: underline (on hover); font-size: 0.875rem; transition-property: all;
          */}
          <button className="text-primary hover:underline text-sm transition-all">
            Read More →
          </button>
        </div>
      </div>
    </LiquidGlass>
  );

  if (post.link) {
    return (
      /* 
         tailwind: full height, block display
         .css: height: 100%; display: block;
      */
      <Link to={post.link} className="h-full block">
        {CardContent}
      </Link>
    );
  }

  return (
    /* 
       tailwind: full height
       .css: height: 100%;
    */
    <article className="h-full">
      {CardContent}
    </article>
  );
}