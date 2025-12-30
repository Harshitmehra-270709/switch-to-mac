"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const terms = [
    { windows: "Ctrl Key", mac: "Command (⌘) Key", context: "Shortcuts like Copy, Paste, Find." },
    { windows: "File Explorer", mac: "Finder", context: "Browsing files and folders." },
    { windows: "Task Manager", mac: "Activity Monitor", context: "Killing frozen apps (Cmd+Opt+Esc)." },
    { windows: "Recycle Bin", mac: "Trash", context: "Where deleted files go." },
    { windows: "Control Panel", mac: "System Settings", context: "Changing settings." },
    { windows: "Alt Key", mac: "Option (⌥) Key", context: "Alternative characters, boot menu." },
    { windows: "Backspace", mac: "Delete", context: "Deleting text backward." },
    { windows: "Delete", mac: "Fn + Delete", context: "Deleting text forward." },
    { windows: "Start Menu", mac: "Launchpad / Spotlight", context: "Finding apps." },
    { windows: "System Tray", mac: "Menu Bar Extras", context: "Top right icons (Clock, WiFi)." },
];

export function InteractiveDictionary() {
    const [query, setQuery] = useState("");

    const filtered = terms.filter(t =>
        t.windows.toLowerCase().includes(query.toLowerCase()) ||
        t.mac.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="my-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-apple-blue">#</span> The Translator
            </h3>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <input
                    type="text"
                    placeholder="Search for 'Task Manager' or 'Ctrl'..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-apple-blue focus:outline-none transition-colors placeholder:text-white/20"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/10 text-white/60 text-sm uppercase tracking-wider">
                            <th className="p-4 border-b border-white/10 w-1/3">Windows Term</th>
                            <th className="p-4 border-b border-white/10 w-1/3 text-apple-blue font-bold">Mac Equivalent</th>
                            <th className="p-4 border-b border-white/10">Context / Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((term, i) => (
                            <tr key={term.windows} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                <td className="p-4 font-medium">{term.windows}</td>
                                <td className="p-4 font-bold text-white">{term.mac}</td>
                                <td className="p-4 text-white/60 text-sm">{term.context}</td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={3} className="p-8 text-center text-white/40">
                                    No matches found. Try "Explorer" or "Ctrl".
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
