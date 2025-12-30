"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";

interface BridgeCardProps {
    title: string;
    description: string;
    command: string;
    icon?: React.ReactNode;
}

export function BridgeCard({ title, description, command, icon }: BridgeCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className="relative flex-shrink-0 w-[400px] h-[500px] p-8 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-xl flex flex-col justify-between overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Background Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-apple-blue/20 rounded-full blur-[80px] group-hover:bg-apple-blue/30 transition-colors" />

            <div>
                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    {icon || <Terminal className="w-8 h-8" />}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                <p className="text-apple-gray/70 text-lg leading-relaxed">{description}</p>
            </div>

            <div className="mt-8">
                <div className="bg-black/50 rounded-xl p-4 border border-white/5 flex items-center justify-between group-hover:border-white/20 transition-colors">
                    <code className="text-sm font-mono text-apple-blue truncate mr-4">
                        {command}
                    </code>
                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                        title="Copy command"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
