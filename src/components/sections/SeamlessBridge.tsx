"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BridgeCard } from "@/components/ui/BridgeCard";
import { Share2, Smartphone, Monitor } from "lucide-react";

const tools = [
    {
        title: "LocalSend",
        description: "AirDrop is great, but it hates Android. LocalSend is the open-source answer. Share files, text, and clipboards instantly.",
        command: "brew install --cask localsend",
        icon: <Share2 className="w-8 h-8" />,
    },
    {
        title: "MacDroid",
        description: "Missing the plug-and-play file transfer? MacDroid mounts your Android phone as a drive in Finder.",
        command: "brew install --cask macdroid",
        icon: <Smartphone className="w-8 h-8" />,
    },
    {
        title: "KDE Connect",
        description: "The ultimate bridge. Sync notifications, clipboard, and control media playback from your phone.",
        command: "brew install --cask kde-connect",
        icon: <Monitor className="w-8 h-8" />,
    },
    {
        title: "NearDrop",
        description: "Unofficial 'Nearby Share' for macOS. Receive files from Android devices natively.",
        command: "brew install --cask neardrop",
        icon: <Share2 className="w-8 h-8 rotate-180" />, // reusing icon for MVP
    }
];

export function SeamlessBridge() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Content Container - Stacks on mobile, Side-by-side on desktop */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start pt-20 md:pt-0">

                    {/* Text Section - Static on Left (Desktop) / Top (Mobile) 
                        Fixed: Added strong glass background on desktop to allow content to slide under it legibly.
                    */}
                    <div className="relative z-20 p-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-20 max-w-md text-center md:text-left pointer-events-none md:pointer-events-auto bg-black/50 md:bg-black/40 backdrop-blur-xl rounded-3xl mx-4 md:mx-0 border border-white/10 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">The Seamless Bridge</h2>
                        <p className="text-lg md:text-xl text-white/60">
                            Just because you have a green bubble doesn't mean you're disconnected.
                            These tools bridge the gap.
                        </p>
                    </div>

                    {/* Cards - Sliding Horizontal List 
                        Fixed: Added mask-image to fade out cards on the left side so they don't abruptly cut off or clash.
                    */}
                    <motion.div
                        style={{ x }}
                        className="flex gap-8 px-8 md:pl-[45vw] md:pr-20 items-center h-full pt-10 md:pt-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_100%)] md:[mask-image:linear-gradient(to_right,transparent_10%,black_40%,black)]"
                    >
                        {tools.map((tool) => (
                            <BridgeCard key={tool.title} {...tool} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
