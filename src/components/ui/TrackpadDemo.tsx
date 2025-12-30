"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type GestureType = "scroll" | "swipe-x" | "swipe-y" | "pinch" | "tap" | "spread";

export function TrackpadDemo({ gesture, fingers = 2 }: { gesture: GestureType, fingers?: number }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const animations: Record<GestureType, any> = {
        scroll: {
            y: [-30, 30],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
        },
        "swipe-x": {
            x: [-40, 40],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
        },
        "swipe-y": {
            y: [40, -40],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
        },
        pinch: {
            scale: [1, 0.5],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
        },
        spread: {
            scale: [0.5, 1],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
        },
        tap: {
            scale: [1, 0.9, 1],
            opacity: [1, 0.5, 1],
            transition: { repeat: Infinity, duration: 1 }
        }
    };

    return (
        <div
            className="relative w-full h-48 bg-white/5 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer group"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Label */}
            <span className="absolute bottom-3 text-[10px] text-white/30 tracking-widest uppercase font-bold group-hover:text-apple-blue transition-colors">
                {isPlaying ? "Simulating..." : "Hover to Play"}
            </span>

            {/* Fingers Container */}
            <motion.div
                className="flex gap-3"
                animate={isPlaying ? animations[gesture] : { x: 0, y: 0, scale: 1 }}
                // @ts-ignore
                transition={isPlaying ? animations[gesture].transition : {}}
            >
                {Array.from({ length: fingers }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "w-8 h-8 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)]",
                            gesture === "tap" && isPlaying ? "bg-apple-blue" : ""
                        )}
                    />
                ))}
            </motion.div>
        </div>
    );
}
