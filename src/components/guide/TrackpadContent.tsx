"use client";

import { TrackpadDemo } from "@/components/ui/TrackpadDemo";

export function TrackpadContent() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs uppercase tracking-widest font-bold">
                    Muscle Memory
                </div>
                <h1 className="text-5xl font-bold">Trackpad Mastery</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    The Mac trackpad is a superpower. Hover over any card below to see the gesture in action.
                </p>
            </header>

            <hr className="border-white/10" />

            {/* Basic Gestures */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">Essential Gestures</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <GestureDemo
                        fingers={2}
                        gesture="scroll"
                        title="Scroll"
                        desc="Two fingers up/down. Natural scrolling means dragging content, not the scrollbar."
                    />
                    <GestureDemo
                        fingers={2}
                        gesture="tap"
                        title="Right Click"
                        desc="Tap with two fingers. No need to click the corner physically."
                    />
                    <GestureDemo
                        fingers={2}
                        gesture="pinch"
                        title="Zoom"
                        desc="Pinch in/out to zoom. Works smoothly in Safari and Maps."
                    />
                    <GestureDemo
                        fingers={3}
                        gesture="swipe-x"
                        title="Swipe Apps"
                        desc="Three fingers left/right. Easiest way to multitask."
                    />
                    <GestureDemo
                        fingers={3}
                        gesture="swipe-y" // Simulate Up
                        title="Mission Control"
                        desc="Three fingers UP. It's 'swipe-y' animation here but do it UP."
                    />
                    <GestureDemo
                        fingers={4}
                        gesture="spread"
                        title="Show Desktop"
                        desc="Spread thumb and three fingers apart to clear screen."
                    />
                </div>
            </section>

            {/* Pro Tips */}
            <section className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Pro Configuration Tips</h2>
                <ul className="space-y-4 text-white/80">
                    <li className="flex gap-3">
                        <span className="text-cyan-400 font-bold">1.</span>
                        <span><strong>Enable Tap to Click:</strong> System Settings &rarr; Trackpad &rarr; Tap to Click. Save your tendons.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-cyan-400 font-bold">2.</span>
                        <span><strong>Silent Clicking:</strong> Turn on &quot;Silent Clicking&quot; if you have a Force Touch trackpad for a quieter experience.</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}

// @ts-ignore
function GestureDemo({ fingers, gesture, title, desc }) {
    return (
        <div className="space-y-3">
            <TrackpadDemo gesture={gesture} fingers={fingers} />
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-white/60 text-sm">{desc}</p>
            </div>
        </div>
    );
}
