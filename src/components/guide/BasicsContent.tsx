"use client";

import { InteractiveDictionary } from "@/components/guide/InteractiveDictionary";

export function BasicsContent() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs uppercase tracking-widest font-bold">
                    Level 1: The Immigrant
                </div>
                <h1 className="text-5xl font-bold">Welcome to macOS</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    Your muscle memory is your enemy right now. This guide is designed to break your Windows habits and rebuild them clearly and quickly.
                </p>
            </header>

            <hr className="border-white/10" />

            <section>
                <h2 className="text-3xl font-bold mb-6">The Mental Shift</h2>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                    The biggest mistake Windows users make is trying to use a Mac like a PC.
                    On Windows, you manage <strong>Windows</strong>. On Mac, you manage <strong>Applications</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>Closing a window (Red X) does NOT quit the app. Use <code>Cmd + Q</code>.</li>
                    <li>Applications don&apos;t &quot;merge&quot; into the taskbar; they live in the Dock, but active apps have a dot under them.</li>
                    <li>The Menu Bar at the very top of the screen changes based on which app you are clicking on.</li>
                </ul>
            </section>

            <InteractiveDictionary />

            <section className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-4">Pro Tip: Spotlight is God</h2>
                <p className="text-lg text-white/80 mb-6">
                    Stop searching through folders. Stop looking for icons. Just press
                    <kbd className="mx-2 px-2 py-1 rounded bg-white/20 font-mono text-sm">Cmd + Space</kbd>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/40 rounded-xl">
                        <span className="block font-bold mb-2 text-blue-400">Launch Apps</span>
                        <span className="text-sm opacity-60">Type &quot;Chrome&quot; -&gt; Enter</span>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl">
                        <span className="block font-bold mb-2 text-blue-400">Math</span>
                        <span className="text-sm opacity-60">Type &quot;55 * 104&quot; -&gt; See result</span>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl">
                        <span className="block font-bold mb-2 text-blue-400">Conversions</span>
                        <span className="text-sm opacity-60">Type &quot;200 usd in inr&quot;</span>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl">
                        <span className="block font-bold mb-2 text-blue-400">Definitions</span>
                        <span className="text-sm opacity-60">Type &quot;define viscous&quot;</span>
                    </div>
                </div>
            </section>

            {/* System Settings Rosetta Stone */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">System Settings Rosetta Stone</h2>
                <p className="text-white/70">Where did Control Panel go? Here is your map.</p>
                <div className="overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-white/10 text-white/60 text-sm uppercase">
                            <tr>
                                <th className="p-4 border-b border-white/10 w-1/2">Windows (Control Panel)</th>
                                <th className="p-4 border-b border-white/10 w-1/2 text-apple-blue">Mac (System Settings)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                ["Add/Remove Programs", "General -> Storage -> Applications"],
                                ["Windows Update", "General -> Software Update"],
                                ["Device Manager", "System Report (Apple Menu -> About -> More Info)"],
                                ["Power Options", "Lock Screen & Energy Saver"],
                                ["Mouse Settings", "Mouse (Scroll direction is reversed!)"],
                                ["Network Adapters", "Network"],
                                ["User Accounts", "Users & Groups"],
                                ["Display Settings", "Displays (Arrangement is here)"]
                            ].map(([win, mac], i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white/80">{win}</td>
                                    <td className="p-4 font-bold text-white">{mac}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Finder Mastery */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">Mastering Finder</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-apple-blue">1. Column View is Superior</h3>
                        <p className="text-white/70">
                            Stop using Icon view. Switch to Column view (Cmd+3). It lets you navigate deep folder structures without losing context of where you came from.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-apple-blue">2. Quick Look</h3>
                        <p className="text-white/70">
                            Select ANY file and press <kbd className="bg-white/20 px-2 rounded">Spacebar</kbd>.
                            You can preview PDFs, videos, music, and code without opening an app.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-apple-blue">3. Smart Folders</h3>
                        <p className="text-white/70">
                            File -&gt; New Smart Folder. You can create a &quot;folder&quot; that automatically shows &quot;All PDFs created in the last week&quot;.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-apple-blue">4. Tags are better than Folders</h3>
                        <p className="text-white/70">
                            A file can only be in one folder. But it can have multiple tags (Work, Urgent, Done).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
