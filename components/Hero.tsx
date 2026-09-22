"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Volume2, VolumeX } from "lucide-react";
import { site, socials } from "@/lib/site-config";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,137,79,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(179,137,79,0.14),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000'/%3E%3C/svg%3E\")",
        }}
      />

      {/* giant faded monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none"
      >
        <span className="text-[38vw] leading-none text-ink">
          H
        </span>
      </motion.div>

      <motion.div
        aria-hidden
        className="animate-float-slow absolute left-[6%] top-[22%] text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Sparkles size={26} strokeWidth={1} />
      </motion.div>
      <motion.div
        aria-hidden
        className="animate-float-slower absolute right-[14%] top-[68%] text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <Sparkles size={18} strokeWidth={1} />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold"
          >
            Institut de beauté &amp; académie
          </motion.p>
          <h1 className="text-balance text-display-lg text-ink">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="block"
            >
              Révélez la beauté
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block font-bold text-gold"
            >
              qui vous ressemble
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/80"
          >
            {site.tagline}. Soins, coiffure, maquillage et cosmétiques
            pensés pour révéler votre éclat naturel, dans un écrin pensé
            pour vous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-ink hover:text-surface"
            >
              Découvrir nos soins
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
            >
              Nous suivre
              <span className="h-px w-8 bg-ink transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-gold/25 pt-6"
          >
            {[
              ["100%", "Fait avec soin"],
              ["6+", "Services experts"],
              ["★★★★★", "Clientes satisfaites"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="text-heading text-gold">{big}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-ink/70">
                  {small}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[9/16] w-full max-w-[300px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-md bg-ink shadow-2xl">
            <video
              ref={videoRef}
              src="/video/fondatrice.mp4"
              poster="/video/fondatrice-poster.jpg"
              autoPlay
              muted={muted}
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              onClick={toggleSound}
              aria-label={muted ? "Activer le son" : "Couper le son"}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-surface backdrop-blur-sm transition-colors hover:bg-ink/70"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 rounded-md bg-surface px-5 py-4 shadow-xl ring-1 ring-gold/20"
          >
            <p className="font-semibold text-lg text-gold">Écouter notre fondatrice</p>
            <p className="text-[11px] uppercase tracking-wide text-ink/70">Son histoire, en vidéo</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Défiler vers le bas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink/60 hover:text-ink transition-colors"
      >
        <ArrowDown size={20} strokeWidth={1.3} />
      </motion.a>
    </section>
  );
}
