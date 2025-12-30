"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function VirtualTrackpad() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="relative w-64 h-48 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Trackpad Surface Label */}
            <span className="absolute bottom-2 text-[10px] text-white/30 tracking-widest uppercase">
                Trackpad Simulator
            </span>

            {/* Fingers */}
            <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-8 h-8 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        animate={isHovering ? {
                            y: [-20, 20],
                            scale: [1, 0.9]
                        } : {
                            y: 0,
                            scale: 1
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            delay: i * 0.1
                        }}
                    />
                ))}
            </div>

            {/* Gesture Hint */}
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 text-xs text-white/70 bg-black/50 px-2 py-1 rounded"
                >
                    Swiping Up (Mission Control)
                </motion.div>
            )}
        </div>
    );
}
