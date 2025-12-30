"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VirtualTrackpad } from "@/components/ui/VirtualTrackpad";
import { Terminal, Command, Layers, Search, MousePointer2, Scissors, Zap } from "lucide-react";
import Link from "next/link";

type Level = "beginner" | "intermediate" | "advanced";

const levels = {
    beginner: {
        title: "Level 1: The Immigrant",
        description: "Forget what you know. Window management is different here. Embrace the Command key.",
        color: "from-blue-500",
        features: [
            { title: "Command is Control", icon: <Command />, desc: "Cmd+C, Cmd+V. Your thumb does the work now." },
            { title: "Spotlight", icon: <Search />, desc: "Cmd+Space. Launch apps, find files, calculate math." },
            { title: "Hot Corners", icon: <MousePointer2 />, desc: "Flick your mouse to the corner to see all windows." }
        ]
    },
    intermediate: {
        title: "Level 2: The Resident",
        description: "Stop clicking so much. Flow through the OS with gestures and previews.",
        color: "from-purple-500",
        features: [
            { title: "Stage Manager", icon: <Layers />, desc: "Keep your workspace clean automatically." },
            { title: "Preview Powers", icon: <Zap />, desc: "Spacebar to preview anything. Sign PDFs without opening them." },
            { title: "Automator", icon: <Scissors />, desc: "Batch resize images or rename files with one click." }
        ]
    },
    advanced: {
        title: "Level 3: The Architect",
        description: "Unlock God Mode. You are now faster than the GUI.",
        color: "from-orange-500",
        features: [
            { title: "Sudo Commands", icon: <Terminal />, desc: "Take full control of the system kernel." },
            { title: "Homebrew", icon: <Zap />, desc: "The missing package manager. 'brew install anything'." },
            { title: "Shortcuts", icon: <Layers />, desc: "Chain complex actions into one Siri command." }
        ]
    }
};

export function LearningPipeline() {
    const [activeLevel, setActiveLevel] = useState<Level>("beginner");

    return (
        <section className="min-h-screen py-20 px-8 bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-12 text-center">The Learning Pipeline</h2>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/10 p-1 rounded-full flex gap-2 backdrop-blur-md">
                        {(Object.keys(levels) as Level[]).map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={`px-6 py-2 rounded-full capitalize transition-all ${activeLevel === level
                                    ? "bg-white text-black shadow-lg"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLevel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Left Column: Description & Trackpad */}
                        <div>
                            <h3 className={`text-4xl font-bold bg-gradient-to-r ${levels[activeLevel].color} to-white bg-clip-text text-transparent mb-4`}>
                                {levels[activeLevel].title}
                            </h3>
                            <p className="text-xl text-white/70 mb-8 leading-relaxed">
                                {levels[activeLevel].description}
                            </p>

                            {activeLevel === "beginner" && (
                                <div className="mt-8">
                                    <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Interactive Demo</p>
                                    <VirtualTrackpad />
                                </div>
                            )}
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-4">
                            {levels[activeLevel].features.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 rounded-lg bg-white/10 text-white">
                                            {feature.icon}
                                        </div>
                                        <span className="text-xl font-bold">{feature.title}</span>
                                    </div>
                                    <p className="text-white/60 pl-14">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-16 text-center">
                    <Link href="/guide/basics" className="inline-flex items-center gap-2 text-apple-blue hover:text-white transition-colors">
                        View Full Curriculum <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
