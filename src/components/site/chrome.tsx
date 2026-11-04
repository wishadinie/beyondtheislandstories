import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Instagram, Menu, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/heritage", label: "Heritage" },
  { to: "/art-craft", label: "Art & Craft" },
  { to: "/community", label: "Community" },
  { to: "/nature-wildlife", label: "Nature & Wildlife" },
] as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/motion_the_journal/",
  youtube: "https://www.youtube.com/channel/UCdH4cUuuecP2b_auq9gdQWQ",
};

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid || open ? "bg-forest/95 py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 text-ivory md:px-10">
        <Link to="/" className="font-serif text-3xl tracking-tight" aria-label="LANKA. home">
          LANKA<span className="text-terracotta">.</span>
        </Link>
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="eyebrow group relative py-2 text-ivory/80 transition-colors hover:text-ivory data-[status=active]:text-ivory"
              >
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={cn("grid overflow-hidden transition-all duration-700 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <ul className="min-h-0 space-y-1 px-6 text-ivory">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="block py-3 font-serif text-3xl data-[status=active]:text-gold">
                {n.label}
              </Link>
            </li>
          ))}
          <li className="h-4" />
        </ul>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display text-7xl md:text-8xl">LANKA<span className="text-terracotta">.</span></p>
            <p className="eyebrow mt-4 text-gold">Beyond the island.</p>
            <p className="mt-6 font-serif text-2xl italic text-ivory/80">"A journey through the soul of Sri Lanka."</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
              An independent digital cultural publication exploring the heritage, art, communities and natural world of Sri Lanka through photography and considered storytelling.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-sage">Explore</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="link-line text-ivory/80 hover:text-ivory">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-sage">Follow</p>
            <ul className="mt-6 space-y-3">
              <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-ivory/80 hover:text-ivory"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-ivory/80 hover:text-ivory"><Youtube className="h-4 w-4" /> YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/50 md:flex-row">
          <p>© {new Date().getFullYear()} LANKA. — Beyond the Island. All rights reserved.</p>
          <p>Photographs credited to their authors via Wikimedia Commons. An independent publication, not affiliated with any institution.</p>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold/60 bg-forest text-ivory shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-terracotta",
        show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
