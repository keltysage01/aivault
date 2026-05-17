"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  [
    "Real prompts, not theory",
    "Every prompt in the Vault is community-tested and shared with exactly how it's used.",
  ],
  [
    "Tools worth your time",
    "Tool Talk cuts through the noise. Find out what's actually worth using before you waste hours on it.",
  ],
  [
    "Safe and practical",
    "Risk Radar keeps you from making costly AI mistakes with client data, privacy, and security.",
  ],
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-500">
          Why it works
        </p>
        <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.04em]">
          A community that gives you AI that actually works for you.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {features.map(([title, description], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full rounded-[2rem] border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
              <CardContent className="p-7">
                <CheckCircle2 className="mb-6 h-7 w-7 text-cyan-500" />
                <h3 className="text-xl font-black text-vault-slate">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
