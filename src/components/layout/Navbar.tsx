"use client";

import Link from "next/link";
import { Monitor, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
            {/* Home Button - Visible everywhere */}
            <Link
                href="/"
                className={cn(
                    "pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white/90 hover:bg-white/10 transition-colors",
                    pathname === "/" ? "opacity-0 pointer-events-none" : "opacity-100" // Hide on home hero if desired, or keep always visible. User asked for consistent home button.
                )}
            >
                <Home className="w-4 h-4" />
                <span className="text-sm font-bold">Home</span>
            </Link>

            {/* Brand - Visible on scroll or other pages */}
            <div className="pointer-events-auto hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 opacity-0 animate-fade-in">
                <Monitor className="w-4 h-4 text-apple-blue" />
                <span className="text-sm font-bold text-white">Switch to Mac</span>
            </div>
        </nav>
    );
}
