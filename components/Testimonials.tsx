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
          <h2 className="text-display-md">
            Elles nous font{" "}
            <span className="font-bold text-gold">confiance</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/75">
            Ce qu&rsquo;elles disent après leur visite.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-md border border-gold/20 bg-gold/[0.06] p-8"
              >
                <Quote size={26} strokeWidth={1.2} className="text-gold" />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/80">
                  &laquo; {t.text} &raquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-sm text-gold">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-[13px] tracking-wide text-ink/80">
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
