"use client";

import { motion } from "framer-motion";
import { Lock, Wifi, Tablet, Repeat } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const secrets = [
    {
        title: "Universal Control",
        icon: <Tablet className="w-10 h-10" />,
        description: "Place your iPad next to your Mac. Push your cursor off the screen. It just jumps to the iPad. No setup required.",
        color: "bg-blue-500"
    },
    {
        title: "Text Replacement",
        icon: <Repeat className="w-10 h-10" />,
        description: "Go to Keyboard settings. Set '@@' to replace with your email address. Never type it again.",
        color: "bg-purple-500"
    },
    {
        title: "WiFi Sharing",
        icon: <Wifi className="w-10 h-10" />,
        description: "Friend needs WiFi? Don't seek the router. Just have them select your network, and your Mac will ask to share the password.",
        color: "bg-green-500"
    }
];

export function SecretVault() {
    return (
        <section className="min-h-screen bg-black py-32 px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent_70%)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-6">
                        The Vault
                    </h2>
                    <p className="text-xl text-white/60">
                        Features Apple doesn't advertise on the box.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {secrets.map((secret, index) => (
                        <VaultCard key={secret.title} secret={secret} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function VaultCard({ secret, index }: { secret: any, index: number }) {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[400px] cursor-pointer"
            onMouseEnter={() => setIsUnlocked(true)}
            onMouseLeave={() => setIsUnlocked(false)}
        >
            <div className={cn(
                "absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-700 overflow-hidden border border-white/10",
                isUnlocked ? "bg-white/10 backdrop-blur-3xl" : "bg-white/5 backdrop-blur-md"
            )}>
                {/* Locked State Overlay */}
                <div className={cn(
                    "absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[20px] transition-all duration-500",
                    isUnlocked ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <Lock className="w-12 h-12 text-white/50 mb-4" />
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold">Encrypted</span>
                </div>

                {/* Content */}
                <div className={cn(
                    "transition-all duration-500 delay-100 transform",
                    isUnlocked ? "scale-100 blur-0" : "scale-90 blur-sm"
                )}>
                    <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-2xl",
                        secret.color
                    )}>
                        {secret.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{secret.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                        {secret.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
