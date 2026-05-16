"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VaultDashboardPreview } from "@/components/vault-dashboard-preview";

const stats = [
  ["500+", "AI assets"],
  ["24/7", "Access"],
  ["Secure", "Systems"],
];

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-500" />
          Premium AI tools, prompts, systems, and workflows
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-vault-slate md:text-7xl">
            Your private vault for smarter AI systems.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Store, organize, and unlock powerful AI assets in one secure,
            beautiful workspace built for creators, entrepreneurs, and modern
            businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-cyan-500 font-bold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400"
          >
            <a href="#pricing">
              Start Building <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full font-bold"
          >
            <a href="#features">See What Is Inside</a>
          </Button>
        </div>

        <div className="grid max-w-xl grid-cols-3 gap-3 pt-4 sm:gap-4">
          {stats.map(([stat, label]) => (
            <div
              key={stat}
              className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
            >
              <p className="text-2xl font-black text-vault-slate">{stat}</p>
              <p className="text-sm font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <VaultDashboardPreview />
    </section>
  );
}
