import React, { useEffect, useRef, useState } from 'react';
import LiquidGlass from 'liquid-glass-react';
import { cn } from '@/components/ui/utils';

interface LiquidGlassWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    displacementScale?: number;
    blurAmount?: number;
    saturation?: number;
    aberrationIntensity?: number;
    elasticity?: number;
    cornerRadius?: number;
    padding?: string;
    overLight?: boolean;
    mode?: "standard" | "polar" | "prominent" | "shader";
    mouseContainerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Wrapper for liquid-glass-react to ensure consistent configuration and error handling.
 * 
 * KNOWN LIMITATIONS:
 * - Safari and Firefox only PARTIALLY support the effect (displacement effects may not be visible).
 * - Works BEST in Chrome/Chromium browsers.
 * - Performance can degrade with many instances (>10).
 */
export const LiquidGlassWrapper: React.FC<LiquidGlassWrapperProps> = ({
    children,
    className,
    displacementScale = 70,
    blurAmount = 0.0625,
    saturation = 140,
    aberrationIntensity = 2,
    elasticity = 0.15,
    cornerRadius = 16, // Matched to rounded-2xl (16px)
    padding = "0px", // Let parent handle padding via className
    overLight = false, // Default to false for dark mode
    mode = "standard",
    mouseContainerRef,
    ...props
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // Browser detection for console warning (dev only)
        if (process.env.NODE_ENV === 'development') {
            const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if (!isChrome) {
                console.warn("LiquidGlass: Displacement effects are best viewed in Chrome/Chromium browsers.");
            }
        }
    }, []);

    if (!isMounted) {
        return <div className={className} {...props}>{children}</div>;
    }

    return (
        <div className={cn("relative", className)} {...props}>
            <LiquidGlass
                displacementScale={displacementScale}
                blurAmount={blurAmount}
                saturation={saturation}
                aberrationIntensity={aberrationIntensity}
                elasticity={elasticity}
                cornerRadius={cornerRadius}
                padding={padding}
                overLight={overLight}
                mode={mode}
                mouseContainer={mouseContainerRef}
            >
                {children}
            </LiquidGlass>
        </div>
    );
};
