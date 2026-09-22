"use client";

import Reveal from "./Reveal";
import { tips } from "@/lib/site-config";

export default function Tips() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <h2 className="text-display-md">
            Conseils &amp; <span className="font-bold text-gold">astuces beauté</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Nos recommandations pour prendre soin de vos perruques, de votre
            peau et de votre maquillage au quotidien.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="rounded-md border border-gold/15 p-6 transition-colors duration-300 hover:border-gold/40">
                <h3 className="text-heading">{t.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/75">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
