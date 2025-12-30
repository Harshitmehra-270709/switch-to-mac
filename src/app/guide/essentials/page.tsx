

import { Download, Layout, AppWindow, Command } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Essential Apps: Making Mac Usable",
    description: "Fix Mac window management with Rectangle, replace Spotlight with Raycast, and master window switching with AltTab. The must-have utility belt.",
    openGraph: {
        title: "Essential Mac Utilities",
        description: "Rectangle, Raycast, and AltTab. The holy trinity of Mac productivity.",
    },
};

export default function EssentialsPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs uppercase tracking-widest font-bold">
                    Level ??: Making it Usable
                </div>
                <h1 className="text-5xl font-bold">Missing Parts</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    MacOS is great, but it's not perfect. It lacks key features that Windows users take for granted. We will fix that now.
                </p>
            </header>

            <hr className="border-white/10" />

            {/* Rectangle */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <Layout className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">1. Rectangle</h2>
                        <p className="text-apple-blue font-bold">Restoring "Aero Snap"</p>
                    </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-lg text-white/80 mb-4">
                        On Windows, you drag a window to the left, and it snaps to half the screen. On Mac, nothing happens.
                        <strong> Rectangle fixes this.</strong>
                    </p>
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 mb-4">
                        <code className="text-green-400 font-mono">brew install --cask rectangle</code>
                    </div>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/60">
                        <li className="bg-white/5 p-3 rounded-lg text-center border border-white/5">Ctrl+Opt+&larr;<br />Left Half</li>
                        <li className="bg-white/5 p-3 rounded-lg text-center border border-white/5">Ctrl+Opt+&rarr;<br />Right Half</li>
                        <li className="bg-white/5 p-3 rounded-lg text-center border border-white/5">Ctrl+Opt+Enter<br />Maximize</li>
                        <li className="bg-white/5 p-3 rounded-lg text-center border border-white/5">Drag to Corners<br />Quarters</li>
                    </ul>
                </div>
            </section>

            {/* AltTab */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <AppWindow className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">2. AltTab</h2>
                        <p className="text-apple-blue font-bold">Fixing Window Switching</p>
                    </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-lg text-white/80 mb-4">
                        <code>Cmd + Tab</code> on Mac only switches <em>Apps</em>, not <em>Windows</em>. If you have 3 Chrome windows, it treats them as one blob.
                        AltTab brings the Windows style previews back.
                    </p>
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10">
                        <code className="text-green-400 font-mono">brew install --cask alt-tab</code>
                    </div>
                </div>
            </section>

            {/* Raycast */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <Command className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">3. Raycast</h2>
                        <p className="text-apple-blue font-bold">Spotlight on Steroids</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-white/70">
                            Spotlight is good. Raycast is insane. It lets you control Spotify, manage your clipboard history, check the weather, and run scripts without touching the mouse.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/10">
                            <code className="text-green-400 font-mono">brew install --cask raycast</code>
                        </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                        <h3 className="font-bold border-b border-white/10 pb-2 mb-2">My Favorite Commands</h3>
                        <div className="flex justify-between text-sm">
                            <span className="text-white/60">Clipboard History</span>
                            <span className="font-mono bg-white/10 px-2 rounded">type "ch"</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-white/60">Confetti</span>
                            <span className="font-mono bg-white/10 px-2 rounded">type "confetti"</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-white/60">Window Management</span>
                            <span className="font-mono bg-white/10 px-2 rounded">type "left"</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
