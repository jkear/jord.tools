import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LiquidGlass } from "@liquidglass/react";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  compact?: boolean;
}

export function FeaturedPost({ title, excerpt, image, author, date, readTime, category, compact = false }: FeaturedPostProps) {
  if (compact) {
    return (
      /* 
         tailwind: relative positioning, full width, square aspect ratio, rounded corners, hide overflow, group for hover states
         .css: position: relative; width: 100%; aspect-ratio: 1 / 1; border-radius: 1rem; overflow: hidden;
      */
      <article className="relative w-full aspect-square rounded-2xl overflow-hidden group">
        {/* Background Image */}
        {/* 
           tailwind: absolute position, cover parent, full width/height, cover object fit, transition transform, duration 700ms, scale up on group hover
           .css: position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition-property: transform; transition-duration: 700ms; transform: scale(1.05) (on group hover);
        */}
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top Badge Glass Plates */}
        {/* 
           tailwind: absolute position, top 1rem, left 1rem, flex container, gap 0.5rem
           .css: position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;
        */}
        <div className="absolute top-4 left-4 flex gap-2">
          {/* 
             tailwind: border white with 20% opacity, full rounded corners, padding x 0.75rem, padding y 0.5rem
             .css: border-width: 1px; border-color: rgb(255 255 255 / 0.2); border-radius: 9999px; padding: 0.5rem 0.75rem;
          */}
          <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="border border-white/20 rounded-full px-3 py-2">
            {/* 
               tailwind: extra small text, medium font weight, white text, wide letter spacing, uppercase
               .css: font-size: 0.75rem; font-weight: 500; color: rgb(255 255 255); letter-spacing: 0.025em; text-transform: uppercase;
            */}
            <span className="text-xs font-medium text-white tracking-wide uppercase">Featured</span>
          </LiquidGlass>
          <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="border border-white/20 rounded-full px-3 py-2">
            {/* 
               tailwind: extra small text, medium font weight, white text, wide letter spacing
               .css: font-size: 0.75rem; font-weight: 500; color: rgb(255 255 255); letter-spacing: 0.025em;
            */}
            <span className="text-xs font-medium text-white tracking-wide">{category}</span>
          </LiquidGlass>
        </div>

        {/* Bottom Content Glass Plate */}
        {/* 
           tailwind: absolute position, bottom 1rem, left 1rem, right 1rem
           .css: position: absolute; bottom: 1rem; left: 1rem; right: 1rem;
        */}
        <div className="absolute bottom-4 left-4 right-4">
          {/* 
             tailwind: border white with 20% opacity, rounded corners, transition transform, duration 300ms, move up slightly on group hover, padding 1rem
             .css: border-width: 1px; border-color: rgb(255 255 255 / 0.2); border-radius: 1rem; transition-property: transform; transition-duration: 300ms; transform: translateY(-0.125rem) (on group hover); padding: 1rem;
          */}
          <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="border border-white/20 rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 p-4">
            {/* 
               tailwind: flex container, align items center, gap 0.5rem, margin bottom 0.5rem, white text with 80% opacity, caption-2 text size
               .css: display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: rgb(255 255 255 / 0.8); font-size: (custom caption-2 size);
            */}
            <div className="flex items-center gap-2 mb-2 text-white/80 text-caption-2">
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            {/* 
               tailwind: title-3 text size, semi-bold font, white text, margin bottom 0.5rem, tight line height
               .css: font-size: (custom title-3 size); font-weight: 600; color: rgb(255 255 255); margin-bottom: 0.5rem; line-height: 1.25;
            */}
            <h2 className="text-title-3 font-semibold text-white mb-2 leading-tight">
              {title}
            </h2>
            {/* 
               tailwind: caption-1 text size, white text with 90% opacity, clamp to 2 lines, margin bottom 0.75rem, relaxed line height
               .css: font-size: (custom caption-1 size); color: rgb(255 255 255 / 0.9); -webkit-line-clamp: 2; margin-bottom: 0.75rem; line-height: 1.625;
            */}
            <p className="text-caption-1 text-white/90 line-clamp-2 mb-3 leading-relaxed">
              {excerpt}
            </p>
            {/* 
               tailwind: flex container, align items center, gap 0.5rem
               .css: display: flex; align-items: center; gap: 0.5rem;
            */}
            <div className="flex items-center gap-2">
              {/* 
                 tailwind: width 1.5rem, height 1.5rem, full rounded corners, gradient background, flex center, 10px text size, white text, border white with 20% opacity
                 .css: width: 1.5rem; height: 1.5rem; border-radius: 9999px; background-image: linear-gradient(to bottom right, rgb(255 255 255 / 0.4), rgb(255 255 255 / 0.1)); display: flex; align-items: center; justify-content: center; font-size: 10px; color: rgb(255 255 255); border-width: 1px; border-color: rgb(255 255 255 / 0.2);
              */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/40 to-white/10 flex items-center justify-center text-[10px] text-white border border-white/20">
                {author[0]}
              </div>
              {/* 
                 tailwind: caption-2 text size, white text, medium font weight
                 .css: font-size: (custom caption-2 size); color: rgb(255 255 255); font-weight: 500;
              */}
              <span className="text-caption-2 text-white font-medium">{author}</span>
            </div>
          </LiquidGlass>
        </div>
      </article>
    );
  } return (
    /* 
       tailwind: margin bottom 3rem
       .css: margin-bottom: 3rem;
    */
    <article className="mb-12">
      {/* 
         tailwind: hide overflow
         .css: overflow: hidden;
      */}
      <LiquidGlass borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20} className="overflow-hidden">
        {/* 
           tailwind: grid layout, 2 columns on large screens, gap 0
           .css: display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)) (on lg); gap: 0;
        */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* 
             tailwind: 16:9 aspect ratio, auto aspect ratio on large screens, hide overflow
             .css: aspect-ratio: 16/9; aspect-ratio: auto (on lg); overflow: hidden;
          */}
          <div className="aspect-video lg:aspect-auto overflow-hidden">
            {/* 
               tailwind: full width, full height, cover object fit
               .css: width: 100%; height: 100%; object-fit: cover;
            */}
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* 
             tailwind: padding 2rem, flex container, column layout, justify center
             .css: padding: 2rem; display: flex; flex-direction: column; justify-content: center;
          */}
          <div className="p-8 flex flex-col justify-center">
            {/* 
               tailwind: flex container, align items center, gap 1rem, margin bottom 1rem
               .css: display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
            */}
            <div className="flex items-center gap-4 mb-4">
              {/* 
                 tailwind: padding x 1rem, padding y 0.5rem, primary background, primary foreground text, caption-1 text size, full rounded corners
                 .css: padding: 0.5rem 1rem; background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); font-size: (custom caption-1 size); border-radius: 9999px;
              */}
              <span className="px-4 py-2 bg-primary text-primary-foreground text-caption-1 rounded-full">
                Featured
              </span>
              {/* 
                 tailwind: padding x 0.75rem, padding y 0.25rem, primary background with 10% opacity, primary text color, caption-1 text size, full rounded corners
                 .css: padding: 0.25rem 0.75rem; background-color: rgb(var(--primary) / 0.1); color: rgb(var(--primary)); font-size: (custom caption-1 size); border-radius: 9999px;
              */}
              <span className="px-3 py-1 bg-primary/10 text-primary text-caption-1 rounded-full">
                {category}
              </span>
              {/* 
                 tailwind: muted foreground color, caption-1 text size
                 .css: color: hsl(var(--muted-foreground)); font-size: (custom caption-1 size);
              */}
              <span className="text-muted-foreground text-caption-1">{readTime}</span>
            </div>
            {/* 
               tailwind: title-1 text size, margin bottom 1rem, tight line height
               .css: font-size: (custom title-1 size); margin-bottom: 1rem; line-height: 1.25;
            */}
            <h2 className="text-title-1 mb-4 leading-tight">{title}</h2>
            {/* 
               tailwind: muted foreground color, margin bottom 1.5rem, relaxed line height, body text size
               .css: color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; line-height: 1.625; font-size: (custom body size);
            */}
            <p className="text-muted-foreground mb-6 leading-relaxed text-body">{excerpt}</p>
            {/* 
               tailwind: flex container, align items center, justify space between
               .css: display: flex; align-items: center; justify-content: space-between;
            */}
            <div className="flex items-center justify-between">
              {/* 
                 tailwind: flex container, align items center, gap 0.75rem
                 .css: display: flex; align-items: center; gap: 0.75rem;
              */}
              <div className="flex items-center gap-3">
                {/* 
                   tailwind: width 2.5rem, height 2.5rem, gradient background, full rounded corners, flex center
                   .css: width: 2.5rem; height: 2.5rem; background-image: linear-gradient(to bottom right, rgb(var(--primary) / 0.2), rgb(var(--secondary) / 0.2)); border-radius: 9999px; display: flex; align-items: center; justify-content: center;
                */}
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span>{author[0]}</span>
                </div>
                <div>
                  {/* 
                     tailwind: body text size
                     .css: font-size: (custom body size);
                  */}
                  <p className="text-body">{author}</p>
                  {/* 
                     tailwind: footnote text size, muted foreground color
                     .css: font-size: (custom footnote size); color: hsl(var(--muted-foreground));
                  */}
                  <p className="text-footnote text-muted-foreground">{date}</p>
                </div>
              </div>
              {/* 
                 tailwind: primary text color, callout text size, underline on hover, transition all
                 .css: color: hsl(var(--primary)); font-size: (custom callout size); text-decoration: underline (on hover); transition-property: all;
              */}
              <button className="text-primary text-callout hover:underline transition-all">
                Read Full Article →
              </button>
            </div>
          </div>
        </div>
      </LiquidGlass>
    </article>
  );
}