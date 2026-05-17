"use client";

import { motion } from "framer-motion";

const systemItems = [
  "Prompt Vault",
  "Tool Talk",
  "Risk Radar",
  "The Daily Move",
  "Ask the Vault",
  "AI Starter Kit",
  "Founder Courses",
  "Live Sessions",
];

export function VaultSystem() {
  return (
    <section id="vault" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="rounded-[3rem] bg-vault-slate p-8 text-white shadow-2xl shadow-slate-300/50 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Inside the Vault
            </p>
            <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.04em]">
              Everything you need to use AI like a pro.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              The AI Vault Circle brings together the prompts, tools, safety
              tips, and daily practice that turn AI confusion into real results
              — all in one private community.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systemItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 font-bold text-white"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
