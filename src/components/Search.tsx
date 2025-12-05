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
                className="relative z-50 w-full flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground hover:bg-white/10 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <SearchIcon className="h-4 w-4" />
                    <span>Search documentation...</span>
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="overflow-hidden p-0 shadow-2xl glass border-white/10">
                    <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                        <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
                            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            <input
                                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Type a command or search..."
                            />
                        </div>
                        <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Knowledge Base">
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.path}
                                        onSelect={() => runCommand(() => navigate(item.path))}
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-white/10 cursor-pointer rounded-md"
                                    >
                                        <Command className="h-4 w-4 opacity-50" />
                                        <span>{item.title}</span>
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
