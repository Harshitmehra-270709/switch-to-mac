"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Windows starts visible (opacity 1) and fades out
    const windowsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    // Mac starts invisible and fades in, or we can use a clip-path for a wipe effect
    const macClipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
    );

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black text-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Windows 'Chaos' Layer */}
                <motion.div
                    style={{ opacity: windowsOpacity }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0078d7] text-white"
                >
                    <div className="text-center font-mono">
                        {/* Abstract representation of chaos/windows */}
                        <h1 className="text-6xl font-bold mb-4">The Old World.</h1>
                        <p className="text-xl opacity-80">Clutter. Drivers. Updates.</p>
                        {/* Simple decoration */}
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rotate-12" />
                        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/10 -rotate-6" />
                    </div>
                </motion.div>

                {/* Mac 'Zen' Layer */}
                <motion.div
                    style={{ clipPath: macClipPath }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black"
                >
                    {/* macOS Sequoia style abstract background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 via-purple-500/10 to-orange-500/10 opacity-60 blend-overlay" />

                    <div className="relative z-30 text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                        >
                            The Walled Garden.
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 text-2xl text-apple-gray/80 font-light"
                        >
                            The gate is open.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex gap-4 justify-center"
                        >
                            <Link href="/guide/basics">
                                <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
                                    Start the Guide
                                </button>
                            </Link>
                            <Link href="/guide/apps">
                                <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                                    Browse Bridge Apps
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-bounce">
                    <span className="text-xs uppercase tracking-widest opacity-50">Scroll to Cross</span>
                </div>
            </div>
        </section>
    );
}
