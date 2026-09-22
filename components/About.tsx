"use client";

import Reveal from "./Reveal";
import { founderReel, founderVideoEmbed } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] ring-1 ring-gold/30 shadow-xl">
            <div className="aspect-[9/16] w-full bg-ink">
              <iframe
                src={founderVideoEmbed}
                title="Présentation de la fondatrice — Halyd's Secret"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-serif-display text-4xl sm:text-5xl">
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
            <blockquote className="mt-8 font-serif-display text-3xl italic text-gold-deep">
              &laquo; Révéler la beauté, un secret à la fois. &raquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={founderReel}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-deep"
            >
              Voir sur Instagram
              <span className="h-px w-8 bg-ink-soft transition-all duration-300 group-hover:w-12" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
