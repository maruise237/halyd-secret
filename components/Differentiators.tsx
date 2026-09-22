"use client";

import Image from "next/image";
import {
  BadgeCheck,
  ShieldCheck,
  Heart,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { differentiators } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  ShieldCheck,
  Heart,
  GraduationCap,
};

export default function Differentiators() {
  return (
    <section className="relative bg-gold/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-display-md">
            Un accompagnement{" "}
            <span className="font-bold text-gold">expert et personnalisé</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-6 sm:grid-cols-2">
          <div className="order-2 grid gap-5 sm:order-1">
            {differentiators.slice(0, 2).map((d, i) => (
              <Card key={d.title} d={d} delay={i * 0.08} icons={icons} />
            ))}
          </div>

          <Reveal delay={0.1} className="order-1 sm:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full ring-4 ring-surface">
              <Image src="/gallery/coiffure-1.jpg" alt="" fill sizes="320px" className="object-cover" />
            </div>
          </Reveal>

          <div className="order-3 grid gap-5 sm:col-span-2 sm:grid-cols-2">
            {differentiators.slice(2, 4).map((d, i) => (
              <Card key={d.title} d={d} delay={0.2 + i * 0.08} icons={icons} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  d,
  delay,
  icons,
}: {
  d: { title: string; desc: string; icon: string };
  delay: number;
  icons: Record<string, LucideIcon>;
}) {
  const Icon = icons[d.icon] ?? BadgeCheck;
  return (
    <Reveal delay={delay}>
      <div className="flex items-start gap-4 rounded-md bg-surface p-5 shadow-sm">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
          <Icon size={18} strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="text-heading">{d.title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-ink/75">
            {d.desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
