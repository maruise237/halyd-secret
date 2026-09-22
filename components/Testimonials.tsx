"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">
            Elles nous font confiance
          </p>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
            Ce qu&rsquo;elles{" "}
            <span className="italic text-gold-deep">en disent</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl border border-gold/20 bg-cream-soft/60 p-8"
              >
                <Quote size={26} strokeWidth={1.2} className="text-gold-deep" />
                <p className="mt-5 flex-1 font-serif-display text-lg italic leading-relaxed text-ink-soft">
                  &laquo; {t.text} &raquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-deep/15 font-serif-display text-sm text-gold-deep">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-[13px] tracking-wide text-ink-soft/80">
                    {t.name}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
