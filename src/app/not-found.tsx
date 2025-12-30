"use client";

import Link from "next/link";
import { MonitorX } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center p-8 text-white font-mono selection:bg-white selection:text-blue-700">
            <div className="max-w-2xl w-full space-y-8">
                <div className="text-9xl mb-8">:(</div>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Your PC ran into a problem and needs to restart.
                </h1>

                <p className="text-xl md:text-2xl opacity-90 mb-12">
                    Just kidding. You're on a Mac now (or about to be).
                    We just couldn't find that page.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-32 h-32 bg-white p-2">
                        <div className="w-full h-full bg-black flex items-center justify-center">
                            <span className="text-xs text-center text-white/50">QR CODE</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm opacity-70">
                            Stop code: 404_PAGE_NOT_FOUND<br />
                            What failed: windows_navigation.sys
                        </div>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-opacity-90 transition-opacity mt-4"
                        >
                            <MonitorX className="w-5 h-5" />
                            Reboot to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
