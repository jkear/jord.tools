import { GlassCard } from "./GlassCard";

export function Footer() {
  return (
    <footer className="mt-12">
      <GlassCard className="p-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <h3 className="mb-3">jord.tools Blog</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern blog built with glass material design. Sharing insights on AI,
              music, politics, and the digital world.
            </p>
          </div>
          <div>
            <h4 className="mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Archive</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">RSS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3">Social</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 jord.tools Blog. Made with ❤️ and glass materials.
          </p>
        </div>
      </GlassCard>
    </footer>
  );
}