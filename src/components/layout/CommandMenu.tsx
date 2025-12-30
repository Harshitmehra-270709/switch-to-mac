"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, MousePointer, Smartphone, Zap, Monitor } from "lucide-react";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const items = [
        { icon: <Monitor className="w-4 h-4" />, label: "The Basics", href: "/guide/basics" },
        { icon: <Zap className="w-4 h-4" />, label: "Essential Apps", href: "/guide/essentials" },
        { icon: <MousePointer className="w-4 h-4" />, label: "Trackpad Mastery", href: "/guide/trackpad" },
        { icon: <Command className="w-4 h-4" />, label: "Power User Tricks", href: "/guide/advanced" },
        { icon: <Smartphone className="w-4 h-4" />, label: "iPhone Migration", href: "/guide/iphone" },
        { icon: <Search className="w-4 h-4" />, label: "Bridge Apps", href: "/guide/apps" },
    ];

    return (
        <>
            {/* Floating Trigger Button (Mobile/Desktop) */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/20 transition-all shadow-2xl"
                aria-label="Open Command Menu"
            >
                <Command className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Dialog */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center px-4 py-3 border-b border-white/10">
                                <Search className="w-5 h-5 text-white/40 mr-3" />
                                <input
                                    autoFocus
                                    placeholder="Where do you want to go?"
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30 text-lg"
                                />
                                <div className="flex items-center gap-1">
                                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/40">ESC</span>
                                </div>
                            </div>

                            <div className="p-2">
                                <div className="text-xs font-bold text-white/30 px-3 py-2 uppercase tracking-widest">
                                    Quick Links
                                </div>
                                {items.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => {
                                            setOpen(false);
                                            router.push(item.href);
                                        }}
                                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-apple-blue/20 hover:text-white group transition-colors text-left"
                                    >
                                        <div className="flex items-center gap-3 text-white/70 group-hover:text-white">
                                            {item.icon}
                                            <span className="font-medium">{item.label}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </button>
                                ))}
                            </div>

                            <div className="px-4 py-3 bg-white/5 border-t border-white/5 text-[10px] text-white/30 flex justify-between">
                                <span>Navigate with arrows</span>
                                <span>Press <kbd className="font-sans">↵</kbd> to select</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
