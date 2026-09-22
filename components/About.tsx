"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";
import InstagramEmbed from "./InstagramEmbed";
import { founderReel } from "@/lib/site-config";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-gold/30" />
            <div className="absolute inset-6 overflow-hidden rounded-full bg-gradient-to-br from-cream-soft to-gold-soft/40 shadow-inner">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Fondatrice Halyd's Secret"
                  width={180}
                  height={180}
                  className="rounded-full opacity-90"
                />
              </div>
            </div>
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-cream shadow-xl sm:h-20 sm:w-20"
              aria-label="Voir la vidéo de présentation"
            >
              <Play size={22} fill="currentColor" strokeWidth={0} className="ml-0.5" />
            </motion.button>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">
              Notre histoire
            </p>
            <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
              Le secret d&rsquo;une{" "}
              <span className="italic text-gold-deep">passion</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft/80">
              Halyd&rsquo;s Secret est né d&rsquo;une conviction simple :
              chaque personne mérite de se sentir belle, dans son propre
              style. Notre fondatrice a imaginé un institut où le soin, le
              geste précis et l&rsquo;écoute se rencontrent, prolongé par une
              ligne de cosmétiques pensée pour continuer l&rsquo;expérience
              bien après la visite.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif-display text-2xl italic text-gold-deep">
              &laquo; Révéler la beauté, un secret à la fois. &raquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              onClick={() => setOpen(true)}
              className="mt-9 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-deep"
            >
              Voir la vidéo de présentation
              <span className="h-px w-8 bg-ink-soft transition-all duration-300 group-hover:w-12" />
            </button>
          </Reveal>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 backdrop-blur-sm px-4 py-10"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative max-h-full overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink shadow-lg"
            >
              <X size={18} />
            </button>
            <InstagramEmbed url={founderReel} />
          </div>
        </motion.div>
      )}
    </section>
  );
}
