import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import { IMG } from "@/lib/images";
import { getArticle, type Article } from "@/lib/articles";
import { SOCIAL } from "@/components/site/chrome";
import { Container, Credit, DiscoverLink, MaskHeading, Parallax, Reveal, StoryCard } from "@/components/site/kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LANKA. — Beyond the Island | A journey through the soul of Sri Lanka" },
      { name: "description", content: "An independent cultural publication on Sri Lanka's heritage, art, communities, nature and wildlife." },
      { property: "og:title", content: "LANKA. — Beyond the Island" },
      { property: "og:description", content: "A journey through the soul of Sri Lanka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMG.hero.src },
      { name: "twitter:image", content: IMG.hero.src },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { to: "/heritage", k: "sigiriya", n: "01", title: "Heritage", text: "Ancient capitals, sacred cities and the engineering of a civilisation." },
  { to: "/art-craft", k: "kandyan", n: "02", title: "Art & Craft", text: "Dance, masks, weaving and verse — the island’s living arts." },
  { to: "/community", k: "fishermen", n: "03", title: "Community", text: "The many peoples, languages and ways of life that shape the island." },
  { to: "/nature-wildlife", k: "leopard", n: "04", title: "Nature & Wildlife", text: "Rainforests, highlands, oceans and the creatures that call them home." },
] as const;

const FEATURED = [
  ["heritage", "sigiriya"],
  ["art-craft", "kandyan-dance"],
  ["art-craft", "traditional-masks"],
  ["nature-wildlife", "tea-country"],
] as const;

function Home() {
  const stories = FEATURED.map(([c, s]) => getArticle(c, s)!) as [Article, Article, Article, Article];
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-forest text-ivory">
        <img src={IMG.hero.src} alt="Sri Lankan landscape" fetchPriority="high" className="animate-hero absolute inset-0 h-full w-full object-cover" />
        <div className="overlay-hero absolute inset-0" />
        <Container className="relative pb-24 md:pb-28">
          <p className="eyebrow animate-rise text-gold" style={{ animationDelay: "0.6s" }}>Independent cultural journal · Sri Lanka</p>
          <h1 className="display mt-5 text-[22vw] md:text-[13rem] lg:text-[15rem]">
            <span className="animate-rise block" style={{ animationDelay: "0.8s" }}>LANKA<span className="text-terracotta">.</span></span>
          </h1>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="animate-rise" style={{ animationDelay: "1.1s" }}>
              <p className="eyebrow text-base tracking-[0.5em]">Beyond the island.</p>
              <p className="mt-3 font-serif text-2xl italic text-ivory/85 md:text-3xl">A journey through the soul of Sri Lanka.</p>
            </div>
            <Link to="/heritage" className="animate-rise group inline-flex items-center gap-4 self-start border border-ivory/60 px-8 py-4 transition-colors duration-500 hover:border-terracotta hover:bg-terracotta md:self-auto" style={{ animationDelay: "1.4s" }}>
              <span className="eyebrow">Explore Sri Lanka</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </Container>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="eyebrow text-[0.6rem] text-ivory/70">Scroll</span>
          <span className="relative h-10 w-px bg-ivory/30"><span className="animate-scroll-dot absolute -left-[2px] top-0 h-2 w-[5px] rounded-full bg-gold" /></span>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-40">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-terracotta">The island</p>
            <MaskHeading lines={["An island.", "A thousand", "stories."]} className="display mt-6 text-6xl md:text-8xl" />
          </div>
          <Reveal delay={200} className="self-end md:col-span-5">
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              Shaped by more than two thousand years of recorded history, Sri Lanka is an island of many faiths, languages and peoples.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ancient cities rise from dry-zone forests, drums echo through temple processions, weavers and carvers keep old crafts alive, and from misty highlands to coral coasts, the land itself tells a story. LANKA. is a journey into all of it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* DISCOVERY */}
      <section className="pb-32">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <MaskHeading lines={["Four ways", "into the island"]} className="display text-5xl md:text-7xl" />
            <p className="max-w-sm text-muted-foreground">Explore our four collections — each a doorway to a different side of Sri Lankan life.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.to} delay={(i % 2) * 150} className={i % 2 ? "md:mt-24" : ""}>
                <Link to={p.to} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                    <img src={IMG[p.k].src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[var(--ease-cine)] group-hover:scale-110" />
                    <span className="display absolute left-6 top-4 text-8xl text-ivory/90 mix-blend-overlay">{p.n}</span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="display text-5xl transition-colors group-hover:text-terracotta">{p.title}</h3>
                      <p className="mt-3 max-w-sm text-muted-foreground">{p.text}</p>
                    </div>
                    <DiscoverLink className="shrink-0 pt-4 text-terracotta" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PARALLAX INTERLUDE */}
      <section className="relative">
        <Parallax k="perahera" alt="Kandy Esala Perahera" className="h-[80vh]" strength={0.2} />
        <div className="absolute inset-0 grid place-items-center bg-forest/50 px-6 text-center text-ivory">
          <Reveal>
            <p className="eyebrow text-gold">From the Kandy Esala Perahera</p>
            <p className="display mx-auto mt-6 max-w-4xl text-5xl italic md:text-7xl">“Fire, drums and devotion move through the night.”</p>
          </Reveal>
        </div>
        <Credit k="perahera" className="absolute bottom-3 right-4 text-ivory" />
      </section>

      {/* FEATURED */}
      <section className="py-32">
        <Container>
          <p className="eyebrow text-terracotta">Featured stories</p>
          <MaskHeading lines={["Stories from", "the island"]} className="display mt-4 text-5xl md:text-7xl" />
          <div className="mt-16 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7 md:row-span-2">
              <StoryCard to="/$category/$slug" params={{ category: stories[0].category, slug: stories[0].slug }} k={stories[0].hero} kicker={stories[0].kicker} title={stories[0].title} text={stories[0].intro} className="h-full md:aspect-auto" />
            </Reveal>
            {stories.slice(1, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 150} className="md:col-span-5">
                <StoryCard to="/$category/$slug" params={{ category: s.category, slug: s.slug }} k={s.hero} kicker={s.kicker} title={s.title} />
              </Reveal>
            ))}
            <Reveal className="md:col-span-12">
              <Link to="/$category/$slug" params={{ category: stories[3].category, slug: stories[3].slug }} className="group grid items-center gap-8 border-y border-border py-10 md:grid-cols-12">
                <div className="aspect-[16/9] overflow-hidden md:col-span-5">
                  <img src={IMG[stories[3].hero].src} alt={stories[3].title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="eyebrow text-gold">{stories[3].kicker}</p>
                  <h3 className="display mt-3 text-5xl transition-colors group-hover:text-terracotta md:text-6xl">{stories[3].title}</h3>
                  <p className="mt-4 max-w-lg text-muted-foreground">{stories[3].intro}</p>
                  <DiscoverLink label="Read more" className="mt-6 text-terracotta" />
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden bg-forest py-40 text-ivory">
        <Parallax k="tea" alt="Tea country" className="absolute inset-0 opacity-30" />
        <Container className="relative text-center">
          <MaskHeading as="p" lines={["One island.", "Many cultures.", "Countless stories."]} className="display text-6xl md:text-9xl" />
        </Container>
      </section>

      {/* SOCIAL */}
      <section className="py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-terracotta">Follow along</p>
              <MaskHeading lines={["The story", "continues."]} className="display mt-4 text-6xl md:text-7xl" />
              <Reveal delay={200}><p className="mt-6 max-w-sm text-muted-foreground">Discover more of Sri Lanka through our photographs, cultural discoveries, short videos and visual stories.</p></Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-7">
              <SocialCard href={SOCIAL.instagram} k="mask" Icon={Instagram} name="Instagram" label="Follow our visual journey." handle="@motion_the_journal" />
              <SocialCard href={SOCIAL.youtube} k="waterfall" Icon={Youtube} name="YouTube" label="Watch stories from the island." video />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SocialCard({ href, k, Icon, name, label, handle, video }: { href: string; k: keyof typeof IMG; Icon: typeof Instagram; name: string; label: string; handle?: string; video?: boolean }) {
  return (
    <Reveal delay={video ? 150 : 0}>
      <a href={href} target="_blank" rel="noreferrer" className="group relative block aspect-[4/5] overflow-hidden bg-forest text-ivory">
        <img src={IMG[k].src} alt={`${name} preview`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
        <div className="overlay-card absolute inset-0" />
        {video && (
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/70 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-terracotta">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        )}
        <div className="absolute left-6 top-6 flex items-center gap-3"><Icon className="h-6 w-6" /><span className="eyebrow">{name}</span></div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-serif text-3xl leading-tight">{label}</p>
          {handle && <p className="mt-2 text-sm text-ivory/70">{handle}</p>}
          <DiscoverLink label={video ? "Watch now" : "Follow"} className="mt-5 text-gold" />
        </div>
      </a>
    </Reveal>
  );
}
