import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlassCard } from './GlassCard';
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
    <GlassCard hoverEffect className="overflow-hidden relative isolate flex h-full flex-col hover:z-[1] focus-within:z-[1]">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-xl leading-tight">{post.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-sm">{post.author[0]}</span>
            </div>
            <div>
              <p className="text-sm">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <button className="text-primary hover:underline text-sm transition-all">
            Read More →
          </button>
        </div>
      </div>
    </GlassCard>
  );

  if (post.link) {
    return (
      <Link to={post.link} className="h-full block">
        {CardContent}
      </Link>
    );
  }

  return (
    <article className="h-full">
      {CardContent}
    </article>
  );
}