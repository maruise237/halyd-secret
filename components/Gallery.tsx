"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "./SocialIcons";
import Reveal from "./Reveal";
import { socials } from "@/lib/site-config";

const tiles = [
  { label: "Soins visage", span: "sm:row-span-2", tone: "from-gold-deep/70 to-ink" },
  { label: "Coiffure", span: "", tone: "from-gold-soft/60 to-gold-deep/60" },
  { label: "Maquillage", span: "", tone: "from-ink to-gold-deep/70" },
  { label: "Cosmétiques", span: "sm:row-span-2", tone: "from-gold/70 to-ink" },
  { label: "Manucure", span: "", tone: "from-gold-deep/60 to-gold-soft/50" },
  { label: "Spa", span: "", tone: "from-ink to-gold/60" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">
            Galerie
          </p>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
            Des instants{" "}
            <span className="italic text-gold-deep">de beauté</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft/75">
            Retrouvez l&rsquo;univers Halyd&rsquo;s Secret en images sur
            notre Instagram.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:180px]">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06} className={t.span}>
              <motion.a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`group relative flex h-full min-h-[150px] w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br p-5 ${t.tone}`}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <InstagramIcon
                  size={16}
                  className="absolute right-4 top-4 text-cream/80 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="relative font-serif-display text-lg italic text-cream">
                  {t.label}
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-deep px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink-soft transition-all duration-300 hover:bg-gold-deep hover:text-cream"
          >
            <InstagramIcon size={16} />
            Suivre @halyd_secret
          </a>
        </Reveal>
      </div>
    </section>
  );
}
