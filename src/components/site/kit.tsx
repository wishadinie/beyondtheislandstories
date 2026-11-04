import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { IMG, type ImgKey } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Adds .is-in when the element scrolls into view. */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useInView<HTMLDivElement>();
  return (
    <As ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </As>
  );
}

/** Heading where each line slides up from a mask. */
export function MaskHeading({
  lines,
  className,
  as: As = "h2",
}: {
  lines: string[];
  className?: string;
  as?: ElementType;
}) {
  const ref = useInView<HTMLHeadingElement>();
  return (
    <As ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="line-mask">
          <span style={{ transitionDelay: `${i * 120}ms` }}>{l}</span>
        </span>
      ))}
    </As>
  );
}

export function Photo({
  k,
  alt,
  className,
  imgClassName,
  eager,
}: {
  k: ImgKey;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden bg-muted", className)}>
      <img
        src={IMG[k].src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

/** Image that drifts slower than the page on scroll. */
export function Parallax({ k, alt, className, strength = 0.15 }: { k: ImgKey; alt: string; className?: string; strength?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      const w = wrap.current, i = img.current;
      if (w && i) {
        const r = w.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -strength;
        i.style.transform = `translate3d(0, ${off}px, 0) scale(1.2)`;
      }
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, [strength]);
  return (
    <div ref={wrap} className={cn("relative overflow-hidden bg-muted", className)}>
      <img ref={img} src={IMG[k].src} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-[1.2] object-cover will-change-transform" />
    </div>
  );
}

export function Credit({ k, className }: { k: ImgKey; className?: string }) {
  const i = IMG[k];
  if (!i.page) return null;
  return (
    <a href={i.page} target="_blank" rel="noreferrer" className={cn("text-[0.65rem] tracking-wide opacity-70 hover:opacity-100", className)}>
      Photo: {i.credit}
    </a>
  );
}

export function PageHero({ k, eyebrow, title, intro, alt }: { k: ImgKey; eyebrow: string; title: string[]; intro?: string; alt: string }) {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-forest text-ivory">
      <img src={IMG[k].src} alt={alt} className="animate-hero absolute inset-0 h-full w-full object-cover" />
      <div className="overlay-hero absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <p className="eyebrow animate-rise text-gold" style={{ animationDelay: "0.5s" }}>{eyebrow}</p>
        <h1 className="display mt-6 text-6xl md:text-8xl lg:text-[9rem]">
          {title.map((t, i) => (
            <span key={i} className="animate-rise block" style={{ animationDelay: `${0.7 + i * 0.15}s` }}>{t}</span>
          ))}
        </h1>
        {intro && (
          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg" style={{ animationDelay: "1.2s" }}>{intro}</p>
        )}
        <Credit k={k} className="absolute bottom-6 right-6 hidden text-ivory md:block" />
      </div>
    </section>
  );
}

export function DiscoverLink({ label = "Discover more", className }: { label?: string; className?: string }) {
  return (
    <span className={cn("eyebrow group/dl inline-flex items-center gap-3", className)}>
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </span>
  );
}

/** Large image card linking to an internal page. */
export function StoryCard({
  to,
  params,
  k,
  kicker,
  title,
  text,
  className,
  tall,
}: {
  to: string;
  params?: Record<string, string>;
  k: ImgKey;
  kicker: string;
  title: string;
  text?: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className={cn("group relative block overflow-hidden bg-forest text-ivory", tall ? "aspect-[3/4]" : "aspect-[4/3]", className)}
    >
      <img src={IMG[k].src} alt={title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-cine)] group-hover:scale-110" />
      <div className="overlay-card absolute inset-0 transition-opacity duration-700 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-700 group-hover:-translate-y-2 md:p-8">
        <p className="eyebrow text-gold">{kicker}</p>
        <h3 className="mt-3 text-3xl leading-tight md:text-4xl">{title}</h3>
        {text && <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/80">{text}</p>}
        <DiscoverLink className="mt-5 text-ivory" />
      </div>
    </Link>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>{children}</div>;
}

export function Fact({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="border-t border-gold/50 pt-5">
      <p className="display text-5xl text-terracotta">{n}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
