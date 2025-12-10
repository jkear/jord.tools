import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                /* 
                   tailwind: padding 2rem, red text color, black background with 80% opacity, min height screen
                   .css: padding: 2rem; color: rgb(239 68 68); background-color: rgb(0 0 0 / 0.8); min-height: 100vh;
                */
                <div className="p-8 text-red-500 bg-black/80 min-h-screen">
                    {/* 
                       tailwind: 2xl text size, bold font, margin bottom 1rem
                       .css: font-size: 1.5rem; line-height: 2rem; font-weight: 700; margin-bottom: 1rem;
                    */}
                    <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                    {/* 
                       tailwind: black background, padding 1rem, rounded corners, border, red border with 50% opacity, auto overflow
                       .css: background-color: rgb(0 0 0); padding: 1rem; border-radius: 0.25rem; border-width: 1px; border-color: rgb(239 68 68 / 0.5); overflow: auto;
                    */}
                    <pre className="bg-black p-4 rounded border border-red-500/50 overflow-auto">
                        {this.state.error?.toString()}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}
