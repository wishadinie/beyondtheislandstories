import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, type ImgKey } from "@/lib/images";
import { Container, Credit, DiscoverLink, MaskHeading, PageHero, Parallax, Reveal } from "@/components/site/kit";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — The People Who Make the Island | LANKA." },
      { name: "description", content: "Sri Lanka's communities, languages, village life and the modern city of Colombo." },
      { property: "og:title", content: "Community — The People Who Make the Island | LANKA." },
      { property: "og:description", content: "The diverse peoples, languages and ways of life of Sri Lanka." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.fishermen.src },
      { name: "twitter:image", content: IMG.fishermen.src },
    ],
  }),
  component: Community,
});

const PEOPLES = [
  { n: "Sinhalese", t: "The largest community, speaking Sinhala; predominantly Theravada Buddhist with a significant Christian minority. Heirs to the traditions of the ancient kingdoms." },
  { n: "Sri Lankan Tamils", t: "Tamil-speaking communities with deep roots in the north and east, notably Jaffna and Batticaloa; largely Hindu, with Christian communities, and a rich literary and temple culture." },
  { n: "Indian Tamils", t: "Also known as Malaiyaha Tamils, descendants of workers brought from South India in the 19th century, central to the culture of the tea-growing hills." },
  { n: "Sri Lankan Moors", t: "A Muslim community with roots in centuries of Arab and South Indian trade; mostly Tamil-speaking, with distinctive food, dress and mercantile traditions." },
  { n: "Malays", t: "Descendants of people from the Indonesian archipelago and Malay peninsula who arrived largely in the Dutch and British periods; historically spoke Sri Lankan Malay." },
  { n: "Burghers", t: "Communities of mixed European — Portuguese, Dutch and British — and Sri Lankan descent, who have contributed music, food and professional life." },
  { n: "Vedda (Wanniyala-Aetto)", t: "Indigenous people of the island, traditionally forest dwellers, with communities such as Dambana preserving ancestral customs." },
];

const EVERYDAY: { k: ImgKey; t: string }[] = [
  { k: "food", t: "Rice and curry — the heart of the family table." },
  { k: "temple", t: "Temple of the Tooth, Kandy — a centre of Buddhist devotion." },
  { k: "kovil", t: "Hindu kovils bring colour and ritual to daily life." },
  { k: "mosque", t: "Mosques, churches, temples and kovils often share the same streets." },
];

function Community() {
  return (
    <>
      <PageHero k="fishermen" alt="Stilt fishermen near Galle" eyebrow="Community" title={["The people who", "make the island."]} intro="Many languages, faiths and ways of life — sharing one island, shaping one another." />

      <Container className="py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <MaskHeading lines={["Many peoples,", "one island."]} className="display text-5xl md:col-span-6 md:text-7xl" />
          <Reveal className="self-end text-muted-foreground md:col-span-5 md:col-start-8">
            Sri Lanka is home to diverse communities with different languages, cultural practices and traditions. These short introductions are a starting point — each community is itself richly varied.
          </Reveal>
        </div>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PEOPLES.map((p, i) => (
            <Reveal key={p.n} delay={(i % 4) * 90} className="bg-background p-8 transition-colors duration-500 hover:bg-secondary">
              <p className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-3xl">{p.n}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.t}</p>
            </Reveal>
          ))}
          <Reveal className="flex items-end bg-terracotta p-8 text-ivory">
            <p className="font-serif text-2xl italic">“Diversity is not the exception here — it is everyday life.”</p>
          </Reveal>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Sources: Department of Census and Statistics, Sri Lanka (Census of Population and Housing).</p>
      </Container>

      {/* A. Languages */}
      <section className="bg-forest py-28 text-ivory">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-gold">A · Languages</p>
            <MaskHeading lines={["Three voices", "of the island"]} className="display mt-4 text-5xl md:text-6xl" />
            <Link to="/$category/$slug" params={{ category: "community", slug: "languages" }} className="group mt-8 inline-block text-gold"><DiscoverLink /></Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-7">
            {[["සිංහල", "Sinhala", "Official & national language"], ["தமிழ்", "Tamil", "Official & national language"], ["English", "English", "Link language"]].map(([g, n, r], i) => (
              <Reveal key={n} delay={i * 120} className="border-t border-gold/40 pt-6">
                <p className="text-5xl">{g}</p>
                <p className="eyebrow mt-5">{n}</p>
                <p className="mt-2 text-sm text-ivory/70">{r}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* B. Everyday life */}
      <section className="py-28">
        <Container>
          <p className="eyebrow text-terracotta">B · Everyday life</p>
          <MaskHeading lines={["Faith, food", "and family"]} className="display mt-4 text-5xl md:text-7xl" />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {EVERYDAY.map((e, i) => (
              <Reveal key={e.k} delay={i * 100} className={i % 2 ? "md:mt-16" : ""}>
                <figure className="group">
                  <div className="aspect-[3/4] overflow-hidden"><img src={IMG[e.k].src} alt={e.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" /></div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">{e.t}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* C. Village life */}
      <section className="pb-28">
        <Parallax k="village" alt="Paddy fields in Ampara" className="h-[75vh]" />
        <Container className="-mt-32 relative grid gap-6 md:grid-cols-12">
          <Reveal className="bg-background p-10 shadow-2xl md:col-span-6">
            <p className="eyebrow text-terracotta">C · Village life</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Wewa, dagoba, yaya.</h2>
            <p className="mt-5 text-muted-foreground">The tank, the temple and the paddy field — the old pillars of village life. Add the weekly pola market and the fishing beach, and you have rural Sri Lanka.</p>
            <Link to="/$category/$slug" params={{ category: "community", slug: "village-life" }} className="group mt-8 inline-block text-terracotta"><DiscoverLink /></Link>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4 self-end md:col-span-6">
            {(["market", "vedda"] as const).map((k) => (
              <figure key={k}>
                <div className="aspect-square overflow-hidden"><img src={IMG[k].src} alt={k === "market" ? "Vegetable stall" : "Vedda village, Dambana"} loading="lazy" className="h-full w-full object-cover" /></div>
                <figcaption className="mt-2 text-xs text-muted-foreground">{k === "market" ? "A roadside vegetable stall." : "The Vedda village of Dambana."}</figcaption>
              </figure>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* D. Colombo */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="relative h-[100vh] min-h-[600px]">
          <Parallax k="colombo" alt="Colombo skyline" className="absolute inset-0 h-full" strength={0.25} />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-charcoal" />
          <Container className="absolute inset-x-0 bottom-20">
            <p className="eyebrow text-gold">D · The modern Sri Lanka</p>
            <MaskHeading lines={["Colombo —", "where the island", "meets the world."]} className="display mt-4 text-6xl md:text-8xl" />
          </Container>
          <Credit k="colombo" className="absolute bottom-4 right-4" />
        </div>
        <Container className="grid gap-4 pb-28 pt-6 md:grid-cols-6">
          {[
            { k: "galleFace", t: "Galle Face Green", s: "Kites, families and sunsets on the seafront.", c: "md:col-span-4 aspect-[16/9]" },
            { k: "pettah", t: "Pettah", s: "Markets and street culture.", c: "md:col-span-2 aspect-[3/4] md:aspect-auto" },
            { k: "colonial", t: "Old & new", s: "The Dutch Hospital beside modern towers.", c: "md:col-span-3 aspect-[4/3]" },
            { k: "mosque", t: "Many faiths", s: "Cultures, languages and traditions side by side.", c: "md:col-span-3 aspect-[4/3]" },
          ].map((x, i) => (
            <Reveal key={x.k} delay={i * 100} className={`group relative overflow-hidden ${x.c}`}>
              <img src={IMG[x.k as ImgKey].src} alt={x.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="overlay-card absolute inset-0" />
              <div className="absolute bottom-0 p-6"><h3 className="text-3xl">{x.t}</h3><p className="text-sm text-ivory/75">{x.s}</p></div>
            </Reveal>
          ))}
          <Reveal className="md:col-span-6 mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/15 pt-10">
            <p className="max-w-xl text-ivory/75">Cafés, galleries and creative studios sit beside colonial façades and bazaars — Colombo is where tradition is constantly reinterpreted.</p>
            <Link to="/$category/$slug" params={{ category: "community", slug: "colombo" }} className="group text-gold"><DiscoverLink label="Explore Colombo" /></Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
