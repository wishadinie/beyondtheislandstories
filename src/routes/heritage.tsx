import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { byCategory } from "@/lib/articles";
import { Container, DiscoverLink, Fact, MaskHeading, PageHero, Parallax, Reveal } from "@/components/site/kit";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage — Where History Lives | LANKA." },
      { name: "description", content: "Sigiriya, Anuradhapura and Polonnaruwa: the ancient capitals and engineering of Sri Lanka's civilisation." },
      { property: "og:title", content: "Heritage — Where History Lives | LANKA." },
      { property: "og:description", content: "The ancient capitals and sacred cities of Sri Lanka." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.galVihara.src },
      { name: "twitter:image", content: IMG.galVihara.src },
    ],
  }),
  component: Heritage,
});

const SUB: Record<string, string[]> = {
  sigiriya: ["King Kashyapa’s capital", "Water gardens & engineering", "Frescoes & the Mirror Wall"],
  anuradhapura: ["Sacred Bodhi tree", "Ruwanwelisaya & Jetavanaramaya", "Ancient reservoirs"],
  polonnaruwa: ["King Parakramabahu I", "Gal Vihara", "Parakrama Samudra"],
};

function Heritage() {
  const items = byCategory("heritage");
  return (
    <>
      <PageHero k="galVihara" alt="Gal Vihara, Polonnaruwa" eyebrow="Heritage" title={["Where", "history lives."]} intro="Three ancient capitals, eight World Heritage Sites, and a civilisation that mastered stone, water and faith." />

      <Container className="grid gap-12 py-28 md:grid-cols-12">
        <MaskHeading lines={["A civilisation", "written in stone", "and water."]} className="display text-5xl md:col-span-7 md:text-7xl" />
        <Reveal className="space-y-5 self-end text-lg leading-relaxed text-muted-foreground md:col-span-5">
          <p>Across the dry plains of the north-central island, kings built monasteries, palaces and great reservoirs. Their ruins form the heart of what is today known as the Cultural Triangle.</p>
        </Reveal>
      </Container>

      <div className="space-y-32 pb-32">
        {items.map((a, i) => (
          <section key={a.slug}>
            <Container className="grid items-center gap-10 md:grid-cols-12">
              <Reveal className={i % 2 ? "md:order-2 md:col-span-7 md:col-start-6" : "md:col-span-7"}>
                <Link to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="group block aspect-[4/3] overflow-hidden bg-muted">
                  <img src={IMG[a.hero].src} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.8s] group-hover:scale-110" />
                </Link>
              </Reveal>
              <Reveal delay={150} className={i % 2 ? "md:order-1 md:col-span-5" : "md:col-span-4 md:col-start-9"}>
                <p className="display text-8xl text-gold/60">{String.fromCharCode(65 + i)}</p>
                <h2 className="display mt-2 text-6xl uppercase">{a.slug}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{a.intro}</p>
                <ul className="mt-6 space-y-2 border-l border-terracotta pl-5 text-sm">
                  {SUB[a.slug]?.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <Link to="/$category/$slug" params={{ category: a.category, slug: a.slug }} className="group mt-8 inline-block text-terracotta">
                  <DiscoverLink label="Read the full story" />
                </Link>
              </Reveal>
            </Container>
          </section>
        ))}
      </div>

      <section className="relative">
        <Parallax k="jetavana" alt="Jetavanaramaya" className="h-[70vh]" />
        <div className="absolute inset-0 bg-forest/60" />
        <Container className="absolute inset-0 flex items-center text-ivory">
          <div className="grid w-full gap-10 md:grid-cols-3">
            {[["1982", "Sigiriya, Anuradhapura and Polonnaruwa inscribed by UNESCO."], ["477–495", "Reign of King Kashyapa I, builder of Sigiriya (CE)."], ["1153–1186", "Reign of Parakramabahu I at Polonnaruwa (CE)."]].map(([n, t]) => (
              <Reveal key={n}><div className="[&_p]:text-ivory/85 [&_p:first-child]:text-gold"><Fact n={n}>{t}</Fact></div></Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
