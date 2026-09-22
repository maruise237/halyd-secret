"use client";

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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-serif-display text-4xl sm:text-5xl">
              Des soins pensés pour{" "}
              <span className="italic text-gold-deep">vous sublimer</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft/75">
              Chaque prestation est réalisée avec précision et douceur, par
              une équipe passionnée par l&rsquo;art de la beauté.
            </p>
          </Reveal>

          <div className="divide-y divide-gold/15 border-y border-gold/15">
            {services.map((s, i) => {
              const Icon = icons[s.icon] ?? Sparkles;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="group flex items-start gap-5 py-6 transition-colors duration-300 hover:bg-gold/5 sm:items-center sm:gap-8 sm:px-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-deep transition-colors duration-300 group-hover:border-gold-deep">
                      <Icon size={19} strokeWidth={1.3} />
                    </span>
                    <div>
                      <h3 className="font-serif-display text-xl sm:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft/75">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
