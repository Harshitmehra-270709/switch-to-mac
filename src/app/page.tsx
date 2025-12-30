"use client";

import { Hero } from "@/components/sections/Hero";
import { SeamlessBridge } from "@/components/sections/SeamlessBridge";
import { LearningPipeline } from "@/components/sections/LearningPipeline";
import { SecretVault } from "@/components/sections/SecretVault";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SeamlessBridge />
      <LearningPipeline />
      <SecretVault />

      {/* Spacer for next sections */}
      <div className="h-[20vh] bg-black flex items-center justify-center text-white/20">
        End of Experience
      </div>
    </main>
  );
}
