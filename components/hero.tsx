"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VaultDashboardPreview } from "@/components/vault-dashboard-preview";

const starterKitUrl = "https://aivault-community.circle.so/join?invitation_token=227a939eb64527adba73d8c46158ed6c37caad37-d49b6959-440f-489c-bb1b-7bf0ea8d51e0";
const founderCheckoutUrl =
  "https://aivault-community.circle.so/join?invitation_token=227a939eb64527adba73d8c46158ed6c37caad37-d49b6959-440f-489c-bb1b-7bf0ea8d51e0";

const stats = [
  ["5 channels", "Active community"],
  ["Daily", "New AI moves"],
  ["$10/mo", "Founder access"],
];

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold leading-5 text-slate-600 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 shrink-0 text-cyan-500" />
          <span>The community is live. The vault is open.</span>
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-[2.45rem] font-black leading-[1.02] tracking-[-0.03em] text-vault-slate sm:text-5xl md:text-7xl md:leading-[0.95] md:tracking-[-0.06em]">
            Stop guessing with AI. Start getting results.
          </h1>
          <p className="max-w-2xl text-[0.96rem] leading-7 text-slate-600 sm:text-lg sm:leading-8 md:text-xl">
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
            className="w-full rounded-full bg-cyan-500 px-5 font-bold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 sm:w-auto sm:px-7"
          >
            <a href={starterKitUrl} target="_blank" rel="noreferrer">
              Get the Free Starter Kit <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-full px-5 font-bold sm:w-auto sm:px-7"
          >
            <a href={founderCheckoutUrl} target="_blank" rel="noreferrer">
              Join Founder Access
            </a>
          </Button>
        </div>

        <div className="grid max-w-xl grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:gap-4">
          {stats.map(([stat, label]) => (
            <div
              key={stat}
              className="min-w-0 rounded-3xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur sm:text-left"
            >
              <p className="break-words text-xl font-black leading-tight text-vault-slate sm:text-2xl">
                {stat}
              </p>
              <p className="mt-1 text-sm font-medium leading-5 text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <VaultDashboardPreview />
    </section>
  );
}
