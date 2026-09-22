"use client";

import Image from "next/image";
import {
  Droplet,
  SprayCan,
  Wind,
  Package,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { products, site } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  Droplet,
  SprayCan,
  Wind,
  Package,
};

export default function Boutique() {
  return (
    <section id="boutique" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Nos produits,{" "}
            <span className="font-bold text-rust">notre signature</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft/75">
            Une gamme de produits d&rsquo;entretien et de styling pour
            prolonger, chez vous, l&rsquo;expérience Halyd&rsquo;s Secret.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="relative h-64 overflow-hidden rounded-3xl lg:h-full">
              <Image
                src="/gallery/perruque-3.jpg"
                alt="Produits Halyd's Secret"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-5 left-5 font-display text-lg font-semibold text-cream">
                Halyd&rsquo;s Secret
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {products.map((p, i) => {
              const Icon = icons[p.icon] ?? Package;
              return (
                <Reveal key={p.name} delay={i * 0.07}>
                  <div className="flex h-full flex-col rounded-2xl border border-rust/15 bg-cream p-5">
                    <div className="flex h-24 items-center justify-center rounded-xl bg-blush/30">
                      <Icon size={30} strokeWidth={1.3} className="text-rust" />
                    </div>
                    <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-rust">
                      {p.tag}
                    </span>
                    <h3 className="mt-1 font-display text-base">{p.name}</h3>
                    <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-ink-soft/70">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      {p.price ? (
                        <span className="font-display text-sm text-rust">
                          {p.price}
                        </span>
                      ) : (
                        <span className="text-[11px] text-ink-soft/50">
                          Sur demande
                        </span>
                      )}
                      <a
                        href={`${site.whatsapp}?text=${encodeURIComponent(
                          `Bonjour, je souhaite commander : ${p.name}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Commander ${p.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rust text-cream transition-colors hover:bg-rust-deep"
                      >
                        <MessageCircle size={14} strokeWidth={1.8} />
                      </a>
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
