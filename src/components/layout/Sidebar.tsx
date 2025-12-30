"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Layout, Share2, Terminal, Download, MousePointer, Smartphone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/guide/basics", label: "The Basics", icon: Book },
    { href: "/guide/trackpad", label: "Trackpad Mastery", icon: MousePointer },
    { href: "/guide/essentials", label: "Must-Have Apps", icon: Download },
    { href: "/guide/apps", label: "Bridge Apps", icon: Share2 },
    { href: "/guide/iphone", label: "Android → iPhone", icon: Smartphone },
    { href: "/guide/advanced", label: "Power User", icon: Terminal },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Trigger Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden fixed z-50 bottom-6 left-6 p-4 bg-blue-600 text-white rounded-full shadow-2xl border border-white/10"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Sidebar (unchanged) */}
            <aside className="w-64 h-screen sticky top-0 border-r border-white/10 bg-black/50 backdrop-blur-xl p-6 hidden md:block">
                <SidebarContent pathname={pathname} />
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-black border-r border-white/10 z-50 p-6 md:hidden overflow-y-auto"
                        >
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="p-2 bg-white/10 rounded-full text-white/60 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <SidebarContent pathname={pathname} closeMobile={() => setIsMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function SidebarContent({ pathname, closeMobile }: { pathname: string, closeMobile?: () => void }) {
    return (
        <>
            <Link href="/" onClick={closeMobile} className="flex items-center gap-2 mb-12 group">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                    <Layout className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Switch to Mac</span>
            </Link>

            <nav className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-4 px-3">
                    Learning Modules
                </div>

                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <Link key={link.href} href={link.href} onClick={closeMobile}>
                            <div className={cn(
                                "relative flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                                isActive ? "text-white" : "text-white/60 hover:text-white"
                            )}>
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute inset-0 bg-white/10 rounded-lg"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <Icon className="w-5 h-5 relative z-10" />
                                <span className="relative z-10 font-medium">{link.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
