"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Book, Layout, Share2, Terminal, Download, MousePointer, Smartphone } from "lucide-react";
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

    return (
        <aside className="w-64 h-screen sticky top-0 border-r border-white/10 bg-black/50 backdrop-blur-xl p-6 hidden md:block">
            <Link href="/" className="flex items-center gap-2 mb-12 group">
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
                        <Link key={link.href} href={link.href}>
                            <div className={cn(
                                "relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
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
        </aside>
    );
}
