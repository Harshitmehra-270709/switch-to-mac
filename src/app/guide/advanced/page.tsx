import { Terminal, Zap, Command, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Power User: Terminal & Scripts",
    description: "Unlock the true power of macOS. Learn Homebrew package manager, essential Terminal commands, and 'God-tier' shortcuts.",
    openGraph: {
        title: "Become a Mac Power User",
        description: "Terminal 101, Homebrew, and hidden defaults. Take the red pill.",
    },
};

export default function AdvancedPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs uppercase tracking-widest font-bold">
                    Level 3: The Architect
                </div>
                <h1 className="text-5xl font-bold">Terminal & Tricks</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    Unlock the true power of Unix. Once you learn Homebrew, the App Store becomes obsolete.
                </p>
            </header>

            <hr className="border-white/10" />

            {/* Homebrew Interactive Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-black rounded-xl">
                        <Terminal className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold">Homebrew: The Missing Package Manager</h2>
                </div>

                <p className="text-white/70">
                    On Windows, you search websites for .exe files. On Mac, you tell the computer what you want, and it gets it.
                </p>

                <div className="bg-black/80 rounded-2xl border border-white/10 overflow-hidden font-mono text-sm relative">
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-white/40">~ — -zsh</span>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <p className="text-green-400 mb-2"># 1. Install Chrome (No browser needed)</p>
                            <div className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-white/50" />
                                <span className="text-white">brew install --cask google-chrome</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-green-400 mb-2"># 2. Update EVERYTHING on your computer</p>
                            <div className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-white/50" />
                                <span className="text-white">brew upgrade</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-green-400 mb-2"># 3. Prevent sleep (Caffeine mode)</p>
                            <div className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-white/50" />
                                <span className="text-white">caffeinate -u -t 3600</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminal 101 */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold">Terminal 101: Don&apos;t Panic</h2>
                <p className="text-white/70">
                    The terminal is not hacking. It&apos;s just texting your computer. Here are the only commands you actually need to know.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <code className="text-apple-blue font-bold text-lg">cd</code> <span className="text-white/40 ml-2">Change Directory</span>
                        <p className="text-sm text-white/60 mt-2">
                            <code>cd Desktop</code> moves you to Desktop.<br />
                            <code>cd ..</code> moves you back one folder.
                        </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <code className="text-apple-blue font-bold text-lg">ls</code> <span className="text-white/40 ml-2">List</span>
                        <p className="text-sm text-white/60 mt-2">
                            Shows you what files are in the current folder.
                        </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <code className="text-apple-blue font-bold text-lg">open .</code> <span className="text-white/40 ml-2">Open Here</span>
                        <p className="text-sm text-white/60 mt-2">
                            Opens the current terminal folder in a visible Finder window. Magic.
                        </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <code className="text-apple-blue font-bold text-lg">sudo</code> <span className="text-white/40 ml-2">Super User Do</span>
                        <p className="text-sm text-white/60 mt-2">
                            &quot;Simon Says&quot;. Forces the computer to do something it doesn&apos;t want to do. Requires password.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Tricks */}
            <section>
                <h2 className="text-3xl font-bold mb-8">God-Tier Shortcuts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ShortcutCard
                        keys={["Cmd", "Shift", "5"]}
                        title="Screenshot Tool"
                        desc="Opens the advanced screenshot/screen recording menu."
                    />
                    <ShortcutCard
                        keys={["Cmd", "Space"]}
                        title="Spotlight Math"
                        desc="Type '1000/12' to do quick math without the calculator app."
                    />
                    <ShortcutCard
                        keys={["Opt", "Shift", "Vol+"]}
                        title="Fine Volume Control"
                        desc="Adjust volume in 1/4 increments for perfect audio levels."
                    />
                    <ShortcutCard
                        keys={["Cmd", "Opt", "Esc"]}
                        title="Force Quit"
                        desc="The 'Ctrl+Alt+Delete' of macOS. Kill any frozen app instantly."
                    />
                </div>
            </section>
        </div>
    );
}

function ShortcutCard({ keys, title, desc }: { keys: string[], title: string, desc: string }) {
    return (
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex gap-2 mb-4">
                {keys.map(k => (
                    <kbd key={k} className="px-3 py-1 bg-white/10 rounded-lg font-mono font-bold text-white border-b-2 border-white/20">
                        {k}
                    </kbd>
                ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/60 text-sm">{desc}</p>
        </div>
    );
}
