"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";
import { products, socials } from "@/lib/site-config";

const shapes = [
  "from-gold-deep via-gold to-gold-soft",
  "from-ink via-ink-soft to-gold-deep",
  "from-gold-soft via-gold to-gold-deep",
  "from-ink-soft via-gold-deep to-gold",
];

export default function Boutique() {
  return (
    <section id="boutique" className="relative bg-ink py-28 text-cream sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23fff'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
            La collection
          </p>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
            Nos produits,{" "}
            <span className="italic text-gold-soft">notre signature</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Une gamme de produits d&rsquo;entretien et de styling pour
            prolonger, chez vous, l&rsquo;expérience Halyd&rsquo;s Secret.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur-sm"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden">
                  <div
                    className={`h-24 w-16 rounded-t-full rounded-b-md bg-gradient-to-b ${shapes[i % shapes.length]} shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-serif-display text-xl">{p.name}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-cream/60">
                    {p.desc}
                  </p>
                  {p.price && (
                    <p className="mt-3 text-sm font-medium text-gold-soft">
                      {p.price}
                    </p>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-soft/50 px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-soft hover:text-ink"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Commander via Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
