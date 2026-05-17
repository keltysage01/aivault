"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VaultDashboardPreview } from "@/components/vault-dashboard-preview";

const starterKitUrl = "https://aivault-community.circle.so/c/ai-starter-kit";
const founderCheckoutUrl =
  "https://aivault-community.circle.so/checkout/join-the-ai-vault";

const stats = [
  ["5 channels", "Active community"],
  ["Daily", "New AI moves"],
  ["$10/mo", "Founder access"],
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
          The community is live. The vault is open.
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-vault-slate md:text-7xl">
            Stop guessing with AI. Start getting results.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            The AI Vault is a private community for people who want to use AI
            better — not just talk about it. Get curated prompts, the best
            tools, daily AI moves, and answers to your real questions. Start
            free, go deeper for $10/month.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-cyan-500 font-bold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400"
          >
            <a href={starterKitUrl} target="_blank" rel="noreferrer">
              Get the Free Starter Kit <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full font-bold"
          >
            <a href={founderCheckoutUrl} target="_blank" rel="noreferrer">
              Join Founder Access
            </a>
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
