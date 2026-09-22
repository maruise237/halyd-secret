"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "./SocialIcons";
import Reveal from "./Reveal";
import { socials, galleryImages } from "@/lib/site-config";

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-display-md">
            Des instants{" "}
            <span className="font-bold text-gold">de beauté</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/75">
            Retrouvez l&rsquo;univers Halyd&rsquo;s Secret en images sur
            notre Instagram.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:220px]">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} className={img.span}>
              <motion.a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="group relative flex h-full min-h-[150px] w-full items-end overflow-hidden rounded-md"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <InstagramIcon
                  size={16}
                  className="absolute right-4 top-4 text-surface/80 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="relative p-5 text-lg font-semibold text-surface">
                  {img.label}
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
            className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-ink hover:text-surface"
          >
            <InstagramIcon size={16} />
            Suivre @halyd_secret
          </a>
        </Reveal>
      </div>
    </section>
  );
}
