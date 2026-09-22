"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { stats } from "@/lib/site-config";

export default function Intro() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-1 row-span-2 aspect-[3/4] overflow-hidden rounded-md">
              <Image src="/gallery/perruque-1.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="/gallery/maquillage-1.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src="/gallery/perruque-2.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-display-md">
              Une équipe qui n&rsquo;utilise que{" "}
              <span className="font-bold text-gold">le meilleur</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80">
              Perruques, produits d&rsquo;entretien et cosmétiques choisis
              avec soin, pour révéler votre beauté naturelle et prolonger
              l&rsquo;expérience Halyd&rsquo;s Secret bien après votre
              visite.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#boutique"
              className="mt-7 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-surface"
            >
              Nos produits
            </a>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-gold/20 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl text-gold">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-ink/70">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
