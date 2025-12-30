"use client";

import { Check, Smartphone, Monitor, Share2, AlertTriangle, Download } from "lucide-react";

export default function BridgeAppsPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs uppercase tracking-widest font-bold">
                    Level 2: The Bridge
                </div>
                <h1 className="text-5xl font-bold">Bridging the Gap</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    You don't need an iPhone to use a Mac. These tools repair the broken ecosystem links between Android/Windows and macOS.
                </p>
            </header>

            <hr className="border-white/10" />

            {/* LocalSend Guide */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <Share2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold">1. LocalSend (AirDrop Improved)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white/90">Why it's better</h3>
                        <p className="text-white/70 leading-relaxed">
                            AirDrop only works with Apple devices. LocalSend is open-source, works on Android, Windows, Mac, and Linux, and doesn't require internet—it uses your local WiFi.
                        </p>

                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <Download className="w-4 h-4" /> Installation
                            </h4>
                            <code className="block bg-black/50 p-3 rounded-lg font-mono text-sm text-apple-blue mb-2">
                                brew install --cask localsend
                            </code>
                            <p className="text-xs text-white/40">Also install it on your Android phone from Play Store.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h3 className="text-lg font-bold mb-4">Quick Setup Guide</h3>
                        <ol className="space-y-4">
                            {[
                                "Open LocalSend on both devices.",
                                "Ensure both are on the SAME WiFi network.",
                                "Go to Settings -> Network -> Turn off 'Encryption' if discovery fails (optional).",
                                "Select file on Phone -> Send -> Tap your Mac's name."
                            ].map((step, i) => (
                                <li key={i} className="flex gap-3 text-white/80">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-apple-blue flex items-center justify-center text-xs font-bold">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* MacDroid Guide */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <Smartphone className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold">2. MacDroid (File Transfer)</h2>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-2xl border border-white/10">
                    <div className="flex gap-4 items-start">
                        <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-500 mb-2">The Problem</h3>
                            <p className="text-white/70">
                                macOS does not natively support "Media Transfer Protocol" (MTP) well.
                                If you plug your Android in, nothing happens.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold">The Solution</h3>
                    <p className="text-white/70">
                        MacDroid mounts your phone as a customized disk drive. You can drag and drop files directly in Finder.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Plug in USB", "Select 'File Transfer' on Phone", "Open Finder"].map((step) => (
                            <li key={step} className="p-4 bg-white/5 rounded-xl text-center font-bold text-white/80 border border-white/10">
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
