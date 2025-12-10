interface BackgroundProps {
    imageUrl: string;
}

export function Background({ imageUrl }: BackgroundProps) {
    return (
        /* 
           tailwind: fixed position, cover viewport (inset-0), negative z-index to stay behind, hide overflow, ignore mouse events
           .css: position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: -10; overflow: hidden; pointer-events: none;
        */
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* 
               tailwind: absolute position, cover parent, cover background image, center background, no repeat
               .css: position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-size: cover; background-position: center; background-repeat: no-repeat;
            */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            />
            {/* 
               tailwind: absolute position, cover parent, very low opacity, overlay blend mode
               .css: position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.03; mix-blend-mode: overlay;
            */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
            />
        </div>
    );
}
