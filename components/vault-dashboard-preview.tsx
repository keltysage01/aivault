"use client";

import { motion } from "framer-motion";
import {
  Lock,
} from "lucide-react";

const vaultItems: Array<{
  icon: string;
  title: string;
  description: string;
}> = [
  {
    icon: "📓",
    title: "Prompt Vault",
    description: "Community-sourced prompts that save real time",
  },
  {
    icon: "🛠",
    title: "Tool Talk",
    description: "Honest takes on the AI tools actually worth using",
  },
  {
    icon: "🔒",
    title: "Risk Radar",
    description: "Know what not to feed your AI — stay safe",
  },
  {
    icon: "⚡",
    title: "The Daily Move",
    description: "One 3-minute AI skill dropped every day",
  },
  {
    icon: "❓",
    title: "Ask the Vault",
    description: "Get real answers from people using AI in their work",
  },
];

export function VaultDashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
      <div className="relative rounded-[3rem] border border-white bg-white/70 p-4 shadow-2xl shadow-slate-300/40 backdrop-blur-xl sm:p-5">
        <div className="rounded-[2.4rem] bg-vault-slate p-5 text-white sm:p-6">
          <div className="mb-8 flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Community Status
              </p>
              <h2 className="mt-2 text-2xl font-black">Unlocked — Join Now</h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
              <Lock className="h-6 w-6 text-cyan-300" />
            </div>
          </div>

          <div className="grid gap-4">
            {vaultItems.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-5"
              >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15">
                      <span className="text-lg" aria-hidden="true">
                        {icon}
                      </span>
                    </div>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-white p-5 text-vault-slate">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-black">Members Active</p>
              <p className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
                Growing
              </p>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
