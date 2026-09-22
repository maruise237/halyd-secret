"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { nav, socials } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-[0_1px_0_rgba(179,137,79,0.25)] py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group">
          <span className="relative block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-1 ring-gold/40 transition-transform duration-500 group-hover:scale-105">
            <Image src="/logo.jpg" alt="Halyd's Secret" fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="text-xl sm:text-2xl tracking-wide text-ink">
            Halyd&rsquo;s <span className="font-bold text-gold">Secret</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] tracking-[0.18em] uppercase text-ink transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-ink transition-colors hover:text-gold">
            <InstagramIcon size={18} />
          </a>
          <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-ink transition-colors hover:text-gold">
            <FacebookIcon size={18} />
          </a>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gold px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-surface"
          >
            Nous contacter
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className="lg:hidden text-ink"
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-surface px-8 py-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Fermer">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="text-3xl text-ink transition-colors hover:text-gold"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex items-center gap-5 pt-10">
                <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
