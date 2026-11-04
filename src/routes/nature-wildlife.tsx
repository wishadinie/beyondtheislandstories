import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { byCategory } from "@/lib/articles";
import { Container, DiscoverLink, MaskHeading, PageHero, Parallax, Reveal } from "@/components/site/kit";

export const Route = createFileRoute("/nature-wildlife")({
  head: () => ({
    meta: [
      { title: "Nature & Wildlife — Where Nature Tells Its Story | LANKA." },
      { name: "description", content: "Elephants, leopards, rainforests, highlands, coasts and tea country of Sri Lanka." },
      { property: "og:title", content: "Nature & Wildlife — Where Nature Tells Its Story | LANKA." },
      { property: "og:description", content: "Sri Lanka's biodiversity and natural landscapes." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.leopard.src },
      { name: "twitter:image", content: IMG.leopard.src },
    ],
  }),
  component: Nature,
});

const LETTERS = "ABCDE";

function Nature() {
  const items = byCategory("nature-wildlife");
  return (
    <>
      <PageHero k="leopard" alt="Sri Lankan leopard" eyebrow="Nature & Wildlife" title={["Where nature", "tells its story."]} intro="An island within a global biodiversity hotspot — where rainforest, highlands and ocean shape everyday life." />

      <Container className="grid gap-12 py-28 md:grid-cols-12">
        <MaskHeading lines={["Small island,", "vast nature."]} className="display text-5xl md:col-span-6 md:text-7xl" />
        <div className="grid grid-cols-2 gap-8 md:col-span-6">
          {[["2", "Natural World Heritage Sites: Sinharaja and the Central Highlands."], ["30+", "Endemic bird species found nowhere else."], ["5 of 7", "Marine turtle species nest on its beaches."], ["1", "Endemic leopard subspecies, Panthera pardus kotiya."]].map(([n, t], i) => (
            <Reveal key={t} delay={i * 100} className="border-t border-gold/50 pt-5">
              <p className="display text-5xl text-terracotta">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="pb-20">
        {items.map((a, i) => (
          <Link key={a.slug} to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="group relative block">
            <Parallax k={a.hero} alt={a.title} className="h-[85vh]" />
            <div className="absolute inset-0 bg-forest/35 transition-colors duration-700 group-hover:bg-forest/55" />
            <Container className={`absolute inset-0 flex items-end pb-16 text-ivory ${i % 2 ? "justify-end text-right" : ""}`}>
              <Reveal className="max-w-xl">
                <p className="eyebrow text-gold">{LETTERS[i]} · {a.kicker.split("· ")[1]}</p>
                <h2 className="display mt-4 text-6xl md:text-8xl">{a.title}</h2>
                <p className="mt-4 text-ivory/85">{a.intro}</p>
                <DiscoverLink className="mt-6 text-ivory" />
              </Reveal>
            </Container>
          </Link>
        ))}
      </section>

      <section className="py-24">
        <Container>
          <p className="eyebrow text-terracotta">Field notes</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {(["slothbear", "junglefowl", "bluewhale", "turtle"] as const).map((k, i) => (
              <Reveal key={k} delay={i * 100} className="group aspect-square overflow-hidden">
                <img src={IMG[k].src} alt={k} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
