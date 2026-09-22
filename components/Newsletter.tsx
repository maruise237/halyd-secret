"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site-config";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Inscription conseils beauté"
    )}&body=${encodeURIComponent(`Merci de m'ajouter à la liste : ${email}`)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-md bg-gold/[0.06] lg:grid-cols-2">
          <div className="relative hidden min-h-[280px] lg:block">
            <Image
              src="/gallery/perruque-3.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-12">
            <Reveal>
              <h2 className="text-display-md">
                Restez au courant de{" "}
                <span className="font-bold text-gold">nos conseils</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/75">
                Recevez nos astuces beauté et nos actualités directement par
                email.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="mt-7 flex max-w-sm gap-3">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="w-full rounded-full border border-gold/25 bg-surface px-5 py-3 text-sm outline-none placeholder:text-ink/50 focus:border-gold"
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  aria-label="S'inscrire"
                  className="flex shrink-0 items-center justify-center rounded-full bg-gold px-5 text-ink transition-colors hover:bg-ink hover:text-surface"
                >
                  <Send size={16} strokeWidth={1.8} />
                </motion.button>
              </form>
              {sent && (
                <p className="mt-3 text-[12px] text-gold">
                  Votre messagerie va s&rsquo;ouvrir pour confirmer votre
                  inscription ✦
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
