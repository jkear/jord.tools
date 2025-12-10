export function Footer() {
  return (
    /* 
       tailwind: margin top 3rem, full width, top border white with 15% opacity, white background with 5% opacity, backdrop blur medium
       .css: margin-top: 3rem; width: 100%; border-top-width: 1px; border-color: rgb(255 255 255 / 0.15); background-color: rgb(255 255 255 / 0.05); backdrop-filter: blur(12px);
    */
    <footer className="mt-12 w-full border-t border-white/15 bg-white/5 backdrop-blur-md">
      {/* 
         tailwind: auto horizontal margin, full width, max width screen-2xl, padding x 1.5rem, padding y 3rem, responsive padding x
         .css: margin-left: auto; margin-right: auto; width: 100%; max-width: 1536px; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 3rem; padding-bottom: 3rem;
      */}
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-12 sm:px-10 lg:px-16">
        {/* 
           tailwind: grid layout, gap 2rem, 4 columns on medium screens
           .css: display: grid; gap: 2rem; grid-template-columns: repeat(4, minmax(0, 1fr)) (on md);
        */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* 
             tailwind: span 2 columns on medium screens, vertical space between children 0.75rem
             .css: grid-column: span 2 / span 2 (on md); margin-top: 0.75rem (for children > :not([hidden]) ~ :not([hidden]));
          */}
          <div className="md:col-span-2 space-y-3">
            {/* 
               tailwind: 2xl text size, semi-bold font, white text with 90% opacity
               .css: font-size: 1.5rem; line-height: 2rem; font-weight: 600; color: rgb(255 255 255 / 0.9);
            */}
            <h3 className="text-2xl font-semibold text-white/90">jord.tools journal</h3>
            {/* 
               tailwind: white text with 75% opacity, base text size, relaxed line height
               .css: color: rgb(255 255 255 / 0.75); font-size: 1rem; line-height: 1.5; line-height: 1.625;
            */}
            <p className="text-white/75 text-base leading-relaxed">
              A modern blog built with glass material design.
            </p>
          </div>
          {/* 
             tailwind: vertical space between children 0.75rem
             .css: margin-top: 0.75rem (for children);
          */}
          <div className="space-y-3">
            {/* 
               tailwind: large text size, semi-bold font, white text with 85% opacity
               .css: font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; color: rgb(255 255 255 / 0.85);
            */}
            <h4 className="text-lg font-semibold text-white/85">Links</h4>
            {/* 
               tailwind: vertical space between children 0.5rem, small text size
               .css: margin-top: 0.5rem (for children); font-size: 0.875rem; line-height: 1.25rem;
            */}
            <ul className="space-y-2 text-sm">
              {/* 
                 tailwind: white text with 75% opacity, transition colors, white text on hover
                 .css: color: rgb(255 255 255 / 0.75); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; color: rgb(255 255 255) (on hover);
              */}
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">About</a></li>
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">Archive</a></li>
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">Contact</a></li>
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">RSS</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white/85">Social</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-white/75 transition-colors hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        {/* 
           tailwind: margin top 2.5rem, top border white with 15% opacity, padding top 1.5rem, center text alignment
           .css: margin-top: 2.5rem; border-top-width: 1px; border-color: rgb(255 255 255 / 0.15); padding-top: 1.5rem; text-align: center;
        */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center">
          {/* 
             tailwind: white text with 70% opacity, small text size
             .css: color: rgb(255 255 255 / 0.7); font-size: 0.875rem; line-height: 1.25rem;
          */}
          <p className="text-white/70 text-sm">
            © 2025 jord.tools Blog. Made with ❤️ and glass materials.
          </p>
        </div>
      </div>
    </footer>
  );
}