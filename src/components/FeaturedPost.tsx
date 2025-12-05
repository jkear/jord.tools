import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlassCard } from './GlassCard';
import { cn } from './ui/utils';

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
      <article className="relative w-full aspect-square rounded-2xl overflow-hidden group shadow-lg">
        {/* Background Image */}
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Gradient for better contrast/depth */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Top Badge Glass Plate */}
        <div className="absolute top-4 left-4 flex gap-2">
            <div className="material-thin px-3 py-1 rounded-full border-white/20 backdrop-blur-xl">
                <span className="text-xs font-medium text-white tracking-wide uppercase">Featured</span>
            </div>
             <div className="material-thin px-3 py-1 rounded-full border-white/20 backdrop-blur-xl">
                <span className="text-xs font-medium text-white tracking-wide">{category}</span>
            </div>
        </div>

        {/* Bottom Content Glass Plate */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="material-thin p-4 rounded-xl border border-white/20 shadow-lg backdrop-blur-xl bg-black/30 transition-all duration-300 group-hover:bg-black/40 group-hover:backdrop-blur-2xl group-hover:translate-y-[-2px]">
            <div className="flex items-center gap-2 mb-2 text-white/80 text-caption-2">
                <span>{readTime}</span>
                <span>•</span>
                <span>{date}</span>
            </div>
            <h2 className="text-title-3 font-semibold text-white mb-2 leading-tight drop-shadow-sm">
              {title}
            </h2>
             <p className="text-caption-1 text-white/90 line-clamp-2 mb-3 leading-relaxed drop-shadow-sm">
               {excerpt}
             </p>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/40 to-white/10 flex items-center justify-center text-[10px] text-white border border-white/20">
                    {author[0]}
                </div>
                 <span className="text-caption-2 text-white font-medium">{author}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="mb-12">
      <GlassCard hoverEffect className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-caption-1 rounded-full">
                Featured
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-caption-1 rounded-full">
                {category}
              </span>
              <span className="text-muted-foreground text-caption-1">{readTime}</span>
            </div>
            <h2 className="text-title-1 mb-4 leading-tight">{title}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-body">{excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span>{author[0]}</span>
                </div>
                <div>
                  <p className="text-body">{author}</p>
                  <p className="text-footnote text-muted-foreground">{date}</p>
                </div>
              </div>
              <button className="text-primary text-callout hover:underline transition-all">
                Read Full Article →
              </button>
            </div>
          </div>
        </div>
      </GlassCard>
    </article>
  );
}