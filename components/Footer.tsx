import Image from "next/image";
import { InstagramIcon, FacebookIcon, ThreadsIcon } from "./SocialIcons";
import { site, socials, nav } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cream-soft/60 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#accueil" className="flex items-center gap-3">
              <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image src="/logo.jpg" alt="Halyd's Secret" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-serif-display text-xl">
                Halyd&rsquo;s <span className="italic text-gold-deep">Secret</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-soft/70">
              {site.tagline}.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-ink-soft/70 hover:text-gold-deep transition-colors">
                <InstagramIcon size={17} />
              </a>
              <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-ink-soft/70 hover:text-gold-deep transition-colors">
                <FacebookIcon size={17} />
              </a>
              <a href={socials.threads} target="_blank" rel="noreferrer" aria-label="Threads" className="text-ink-soft/70 hover:text-gold-deep transition-colors">
                <ThreadsIcon size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold-deep">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[13.5px] text-ink-soft/75 hover:text-gold-deep transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold-deep">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-ink-soft/75">
              <li>{site.address}</li>
              <li>{site.phone}</li>
              <li>{site.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-6 text-[12px] text-ink-soft/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p className="italic font-serif-display text-gold-deep">L&rsquo;art du soin, le secret de l&rsquo;éclat</p>
        </div>
      </div>
    </footer>
  );
}
