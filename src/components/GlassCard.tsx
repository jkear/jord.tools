import { cn } from "./ui/utils";
import * as React from "react";
import { LiquidGlassWrapper } from "./LiquidGlassWrapper";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
    variant?: 'thin' | 'regular' | 'thick';
    liquid?: boolean;
    liquidConfig?: React.ComponentProps<typeof LiquidGlassWrapper>;
}

export function GlassCard({ 
    className, 
    hoverEffect = false, 
    variant = 'regular', 
    liquid = false,
    liquidConfig,
    children, 
    ...props 
}: GlassCardProps) {
    const materialClass = {
        'thin': 'material-thin',
        'regular': 'material-regular',
        'thick': 'material-thick',
    }[variant];

    if (liquid) {
        return (
            <LiquidGlassWrapper
                className={cn(
                    "rounded-2xl", // Ensure border radius matches
                    hoverEffect && "cursor-pointer",
                    className
                )}
                cornerRadius={16} // Match rounded-2xl
                padding="24px" // Match p-6
                {...liquidConfig}
                {...props}
            >
                {children}
            </LiquidGlassWrapper>
        );
    }

    return (
        <div
            className={cn(
                materialClass,
                "rounded-2xl p-6",
                hoverEffect && "material-hover cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
