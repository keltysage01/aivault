"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="rounded-[2rem] border border-cyan-200 bg-white/80 p-3 shadow-2xl shadow-cyan-100/50 backdrop-blur sm:rounded-[3rem] sm:p-5"
      >
        <div className="overflow-hidden rounded-[1.45rem] bg-vault-slate shadow-xl shadow-slate-300/40 sm:rounded-[2.35rem]">
          <video
            className="aspect-video w-full bg-vault-slate object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="/the-ai-vault-stop-starting-from-zero.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
