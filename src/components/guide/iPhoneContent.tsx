"use client";

import { Smartphone, MessageSquare, Cloud, Music, Image as ImageIcon, Mail, Wallet, Check, AlertTriangle, ChevronRight, Fingerprint, Bell, Moon, Sun, Cast } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function IPhoneContent() {
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        {
            id: "transfer",
            title: "1. The Transfer",
            icon: <Smartphone className="w-5 h-5" />,
            description: "Move your data without losing your mind."
        },
        {
            id: "navigation",
            title: "2. UI Boot Camp",
            icon: <Fingerprint className="w-5 h-5" />,
            description: "Where is the Back button? Gestures 101."
        },
        {
            id: "settings",
            title: "3. Vital Settings",
            icon: <Bell className="w-5 h-5" />,
            description: "Silence the noise. Enable the magic."
        },
        {
            id: "ecosystem",
            title: "4. Ecosystem God Mode",
            icon: <Cast className="w-5 h-5" />,
            description: "Why you bought the phone."
        }
    ];

    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs uppercase tracking-widest font-bold">
                    Zero to Hero
                </div>
                <h1 className="text-5xl font-bold">Android &rarr; iPhone Master Class</h1>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                    This isn't just a setup guide. It's a 5-minute crash course to make you an iOS power user from Day 1.
                </p>
            </header>

            <hr className="border-white/10" />

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 md:gap-4 p-2 bg-white/5 rounded-2xl border border-white/10">
                {steps.map((step, idx) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveTab(idx)}
                        className={cn(
                            "flex-1 min-w-[140px] px-4 py-3 rounded-xl text-left transition-all duration-300 relative overflow-hidden group",
                            activeTab === idx ? "bg-white text-black shadow-lg" : "hover:bg-white/5 text-white/70 hover:text-white"
                        )}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 font-bold mb-1">
                                {step.icon}
                                <span className="text-sm">{step.title}</span>
                            </div>
                            <p className={cn("text-xs line-clamp-1", activeTab === idx ? "text-black/60" : "text-white/40")}>
                                {step.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Dynamic Content Area */}
            <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 0 && <TransferGuide />}
                        {activeTab === 1 && <NavigationGuide />}
                        {activeTab === 2 && <SettingsGuide />}
                        {activeTab === 3 && <EcosystemGuide />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function TransferGuide() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-900/20 to-transparent p-6 rounded-2xl border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Before you turn on the iPhone</h3>
                <p className="text-white/80 mb-4">
                    Download <strong>"Move to iOS"</strong> on your Android phone. Plug BOTH phones into power.
                    This process happens <em>during</em> the initial iPhone setup. If you already set up the iPhone, you must factory reset it to use this tool.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">What Transfers (Automatically)</h3>
                    <ul className="space-y-2">
                        {["Contacts", "Message History", "Photos & Videos", "Web Bookmarks", "Mail Accounts", "Whatsapp Chats (Select specifically!)"].map((item) => (
                            <li key={item} className="flex gap-2 items-center text-white/70">
                                <Check className="w-4 h-4 text-green-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">What Transfers (Manually)</h3>
                    <ul className="space-y-2">
                        <li className="flex gap-2 items-center text-white/70">
                            <Music className="w-4 h-4 text-blue-400" /> Music (Login to Spotify/Apple Music)
                        </li>
                        <li className="flex gap-2 items-center text-white/70">
                            <Wallet className="w-4 h-4 text-blue-400" /> Bank Cards (Re-add in Wallet app)
                        </li>
                        <li className="flex gap-2 items-center text-white/70">
                            <Cloud className="w-4 h-4 text-blue-400" /> Google Photos (Install App or Sync)
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="flex items-center gap-2 font-bold text-xl mb-4">
                    <MessageSquare className="text-green-500" /> WhatsApp Vital Step
                </h3>
                <p className="text-white/80">
                    When Move to iOS asks what to transfer, you <strong>MUST</strong> select WhatsApp. It will then launch WhatsApp on Android to prepare the export.
                    If you skip this, you cannot merge chats later without paid 3rd party tools.
                </p>
            </div>
        </div>
    );
}

function NavigationGuide() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Where is the Back Button?</h3>
                    <div className="relative h-32 bg-black/50 rounded-xl flex items-center justify-center border border-white/5">
                        <div className="absolute left-4 w-8 h-8 rounded-full bg-white/20 animate-pulse" />
                        <span className="text-sm text-white/60">Swipe from LEFT edge</span>
                    </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Control Center vs Notifications</h3>
                    <div className="grid grid-cols-2 gap-4 h-32">
                        <div className="bg-black/50 rounded-xl flex flex-col items-center justify-center border border-white/5">
                            <span className="font-bold text-xs uppercase tracking-widest mb-2 text-white/40">Top Left</span>
                            <span className="text-sm">Notifications</span>
                        </div>
                        <div className="bg-black/50 rounded-xl flex flex-col items-center justify-center border border-white/5">
                            <span className="font-bold text-xs uppercase tracking-widest mb-2 text-white/40">Top Right</span>
                            <span className="text-sm">Control Center</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-bold">The "Haptic" Secret</h3>
                <p className="text-white/70">iPhone doesn't just vibrate; it "taps" you. Long press (Haptic Touch) is your right-click.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Spacebar", action: "Cursor Control" },
                        { label: "Flashlight", action: "Brightness" },
                        { label: "Links", action: "Preview" },
                        { label: "App Icon", action: "Shortcuts" }
                    ].map((item) => (
                        <div key={item.label} className="p-4 bg-white/5 rounded-xl text-center">
                            <div className="font-bold text-white mb-1">{item.label}</div>
                            <div className="text-xs text-white/40">Long Press &rarr; {item.action}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SettingsGuide() {
    return (
        <div className="space-y-8">
            <div className="p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">Turn These OFF Immediately</h3>
                <ul className="space-y-2 text-white/80">
                    <li>&bull; Settings &rarr; Privacy &rarr; Tracking &rarr; <strong>Allow Apps to Request to Track (OFF)</strong></li>
                    <li>&bull; Settings &rarr; Sounds & Haptics &rarr; <strong>Keyboard Feedback (ON - Haptic)</strong></li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Moon className="w-5 h-5" /> Focus Modes</h3>
                    <p className="text-white/70 text-sm mb-4">
                        Don't just use "Do Not Disturb". Create a "Work" focus that hides social media apps and only lets Slack notify you.
                    </p>
                    <div className="bg-white/10 px-3 py-2 rounded text-xs font-mono">Settings &rarr; Focus</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Fingerprint className="w-5 h-5" /> FaceID Tricks</h3>
                    <p className="text-white/70 text-sm mb-4">
                        Add an "Alternate Appearance" if you wear glasses/masks often. It makes unlocking 2x faster.
                    </p>
                    <div className="bg-white/10 px-3 py-2 rounded text-xs font-mono">Settings &rarr; FaceID & Passcode</div>
                </div>
            </div>
        </div>
    );
}

function EcosystemGuide() {
    return (
        <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold mb-4">This is why you switched.</h3>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    The "Walled Garden" isn't a prison. It's a resort.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                        <ImageIcon className="text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Universal Clipboard</h4>
                    <p className="text-sm text-white/60">Copy a link on your iPhone. Hit Cmd+V on your Mac. It just works.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                        <Cast className="text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Continuity Camera</h4>
                    <p className="text-sm text-white/60">Your iPhone IS your webcam. Bringing your phone near your Mac automatically switches the camera.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                        <Check className="text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Instant Hotspot</h4>
                    <p className="text-sm text-white/60">No need to touch your phone. Your Mac sees your phone's internet in the WiFi menu.</p>
                </div>
            </div>
        </div>
    );
}
