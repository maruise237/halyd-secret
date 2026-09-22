"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Brush,
  Hand,
  SprayCan,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Scissors,
  Brush,
  Hand,
  SprayCan,
  GraduationCap,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">
            Nos prestations
          </p>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
            Des soins pensés pour{" "}
            <span className="italic text-gold-deep">vous sublimer</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft/75">
            Chaque prestation est réalisée avec précision et douceur, par une
            équipe passionnée par l&rsquo;art de la beauté.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-cream-soft/60 p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-gold/10"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold-deep">
                      <Icon size={22} strokeWidth={1.3} />
                    </span>
                    <h3 className="mt-6 font-serif-display text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft/75">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
