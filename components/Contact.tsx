"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, Mail, MapPin, Clock, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, ThreadsIcon } from "./SocialIcons";
import Reveal from "./Reveal";
import { site, socials } from "@/lib/site-config";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Nouveau message de ${data.get("name")}`);
    const body = encodeURIComponent(String(data.get("message") || ""));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative bg-ink py-28 text-cream sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
            Contact
          </p>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl">
            Prenons{" "}
            <span className="italic text-gold-soft">rendez-vous</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Une question, une envie de vous faire plaisir ? Écrivez-nous ou
            retrouvez-nous directement sur les réseaux.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-cream/10 bg-cream/[0.04] p-8">
              <InfoRow icon={<MapPin size={18} strokeWidth={1.4} />} label="Adresse" value={site.address} />
              <InfoRow icon={<AtSign size={18} strokeWidth={1.4} />} label="Téléphone" value={site.phone} />
              <InfoRow icon={<Mail size={18} strokeWidth={1.4} />} label="Email" value={site.email} />
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold-soft"><Clock size={18} strokeWidth={1.4} /></span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold-soft">Horaires</p>
                  <div className="mt-1 space-y-0.5">
                    {site.hours.map((h) => (
                      <p key={h.day} className="text-[13.5px] text-cream/75">
                        {h.day} — {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 border-t border-cream/10 pt-6">
                <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-soft hover:text-gold-soft">
                  <InstagramIcon size={17} />
                </a>
                <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-soft hover:text-gold-soft">
                  <FacebookIcon size={17} />
                </a>
                <a href={socials.threads} target="_blank" rel="noreferrer" aria-label="Threads" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-soft hover:text-gold-soft">
                  <ThreadsIcon size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Votre nom"
                  className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-cream/40 focus:border-gold-soft"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-cream/40 focus:border-gold-soft"
                />
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Votre message"
                className="resize-none rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-cream/40 focus:border-gold-soft"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-soft px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
              >
                <Send size={15} strokeWidth={1.6} />
                Envoyer le message
              </motion.button>
              {sent && (
                <p className="text-center text-[12px] text-gold-soft">
                  Votre messagerie va s&rsquo;ouvrir pour finaliser l&rsquo;envoi ✦
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold-soft">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-gold-soft">{label}</p>
        <p className="mt-1 text-[13.5px] text-cream/75">{value}</p>
      </div>
    </div>
  );
}
