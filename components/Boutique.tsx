"use client";

import { ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";
import { products, socials } from "@/lib/site-config";

export default function Boutique() {
  return (
    <section id="boutique" className="relative bg-ink py-28 text-cream sm:py-36">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl">
            Nos produits,{" "}
            <span className="font-bold text-blush">notre signature</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/70">
            Une gamme de produits d&rsquo;entretien et de styling pour
            prolonger, chez vous, l&rsquo;expérience Halyd&rsquo;s Secret.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-cream/10 border-y border-cream/10">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="flex items-baseline justify-between gap-6 py-6">
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl">{p.name}</h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-blush">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-cream/60">
                    {p.desc}
                  </p>
                </div>
                {p.price && (
                  <span className="shrink-0 font-display text-lg text-blush">
                    {p.price}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blush/50 px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blush hover:text-ink"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Commander via Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
