import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Command } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from './ui/dialog';
import { Command as CommandPrimitive, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from './ui/command';

export function Search() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    const items = [
        { title: 'PyTorch', path: '/knowledge-base/frameworks/pytorch', type: 'Framework' },
        { title: 'TensorFlow', path: '/knowledge-base/frameworks/tensorflow', type: 'Framework' },
        { title: 'MLX', path: '/knowledge-base/frameworks/mlx', type: 'Framework' },
        { title: 'LangChain', path: '/knowledge-base/frameworks/langchain', type: 'Framework' },
        { title: 'LangGraph', path: '/knowledge-base/frameworks/langgraph', type: 'Framework' },
        { title: 'MCP', path: '/knowledge-base/tools/mcp', type: 'Tool' },
        { title: 'Flowise', path: '/knowledge-base/tools/flowise', type: 'Tool' },
        { title: 'n8n', path: '/knowledge-base/tools/n8n', type: 'Tool' },
        { title: 'ComfyUI', path: '/knowledge-base/tools/comfyui', type: 'Tool' },
        { title: 'Marker', path: '/knowledge-base/tools/marker', type: 'Tool' },
        { title: 'Projects', path: '/knowledge-base/projects', type: 'Section' },
    ];

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                /* 
                   tailwind: relative positioning, z-index 50, full width, flex container, align items center, justify space between, rounded corners, border, white border with 10% opacity, white background with 5% opacity, padding x 1rem, padding y 0.5rem, small text, muted foreground color, hover: white background with 10% opacity, transition colors
                   .css: position: relative; z-index: 50; width: 100%; display: flex; align-items: center; justify-content: space-between; border-radius: 0.5rem; border-width: 1px; border-color: rgb(255 255 255 / 0.1); background-color: rgb(255 255 255 / 0.05); padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--muted-foreground)); background-color: rgb(255 255 255 / 0.1) (on hover); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                */
                className="relative z-50 w-full flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground hover:bg-white/10 transition-colors"
            >
                {/* 
                   tailwind: flex container, align items center, gap 0.5rem
                   .css: display: flex; align-items: center; gap: 0.5rem;
                */}
                <div className="flex items-center gap-2">
                    {/* 
                       tailwind: height 1rem, width 1rem
                       .css: height: 1rem; width: 1rem;
                    */}
                    <SearchIcon className="h-4 w-4" />
                    <span>Search documentation...</span>
                </div>
                {/* 
                   tailwind: ignore pointer events, inline flex, height 1.25rem, prevent text selection, align items center, gap 0.25rem, rounded corners, border, white border with 10% opacity, white background with 5% opacity, padding x 0.375rem, monospace font, 10px text size, medium font weight, full opacity
                   .css: pointer-events: none; display: inline-flex; height: 1.25rem; user-select: none; align-items: center; gap: 0.25rem; border-radius: 0.25rem; border-width: 1px; border-color: rgb(255 255 255 / 0.1); background-color: rgb(255 255 255 / 0.05); padding-left: 0.375rem; padding-right: 0.375rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 10px; font-weight: 500; opacity: 1;
                */}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium opacity-100">
                    {/* 
                       tailwind: extra small text
                       .css: font-size: 0.75rem; line-height: 1rem;
                    */}
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                {/* 
                   tailwind: hide overflow, no padding, large shadow, glass effect (custom), white border with 10% opacity
                   .css: overflow: hidden; padding: 0; box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); border-color: rgb(255 255 255 / 0.1);
                */}
                <DialogContent className="overflow-hidden p-0 shadow-2xl glass border-white/10">
                    {/* 
                       tailwind: complex selectors for command primitive styling (group headings, inputs, items, icons)
                       .css: (various styles for child elements)
                    */}
                    <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                        {/* 
                           tailwind: flex container, align items center, bottom border, white border with 10% opacity, padding x 0.75rem
                           .css: display: flex; align-items: center; border-bottom-width: 1px; border-color: rgb(255 255 255 / 0.1); padding-left: 0.75rem; padding-right: 0.75rem;
                        */}
                        <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
                            {/* 
                               tailwind: margin right 0.5rem, height 1rem, width 1rem, prevent shrink, 50% opacity
                               .css: margin-right: 0.5rem; height: 1rem; width: 1rem; flex-shrink: 0; opacity: 0.5;
                            */}
                            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            {/* 
                               tailwind: flex container, height 2.75rem, full width, rounded corners, transparent background, padding y 0.75rem, small text, no outline, placeholder muted foreground color, disabled styles
                               .css: display: flex; height: 2.75rem; width: 100%; border-radius: 0.375rem; background-color: transparent; padding-top: 0.75rem; padding-bottom: 0.75rem; font-size: 0.875rem; line-height: 1.25rem; outline: 2px solid transparent; outline-offset: 2px; color: hsl(var(--muted-foreground)) (placeholder);
                            */}
                            <input
                                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Type a command or search..."
                            />
                        </div>
                        {/* 
                           tailwind: max height 300px, auto vertical overflow, hide horizontal overflow
                           .css: max-height: 300px; overflow-y: auto; overflow-x: hidden;
                        */}
                        <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Knowledge Base">
                                {items.map((item) => (
                                    /* 
                                       tailwind: flex container, align items center, gap 0.5rem, padding x 1rem, padding y 0.5rem, small text, foreground text color, hover: white background with 10% opacity, pointer cursor, rounded corners
                                       .css: display: flex; align-items: center; gap: 0.5rem; padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; font-size: 0.875rem; line-height: 1.25rem; color: hsl(var(--foreground)); background-color: rgb(255 255 255 / 0.1) (on hover); cursor: pointer; border-radius: 0.375rem;
                                    */
                                    <CommandItem
                                        key={item.path}
                                        onSelect={() => runCommand(() => navigate(item.path))}
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-white/10 cursor-pointer rounded-md"
                                    >
                                        {/* 
                                           tailwind: height 1rem, width 1rem, 50% opacity
                                           .css: height: 1rem; width: 1rem; opacity: 0.5;
                                        */}
                                        <Command className="h-4 w-4 opacity-50" />
                                        <span>{item.title}</span>
                                        {/* 
                                           tailwind: auto left margin, extra small text, muted foreground color
                                           .css: margin-left: auto; font-size: 0.75rem; line-height: 1rem; color: hsl(var(--muted-foreground));
                                        */}
                                        <span className="ml-auto text-xs text-muted-foreground">{item.type}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </CommandPrimitive>
                </DialogContent>
            </Dialog>
        </>
    );
}
