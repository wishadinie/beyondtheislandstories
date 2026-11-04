import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { Container, Credit, DiscoverLink, MaskHeading, PageHero, Reveal, StoryCard } from "@/components/site/kit";

export const Route = createFileRoute("/art-craft")({
  head: () => ({
    meta: [
      { title: "Art & Craft — The Art of Our Identity | LANKA." },
      { name: "description", content: "Kandyan dance, Ambalangoda masks, handloom weaving and folk poetry of Sri Lanka." },
      { property: "og:title", content: "Art & Craft — The Art of Our Identity | LANKA." },
      { property: "og:description", content: "Sri Lanka's living traditions of dance, masks, weaving and verse." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.kandyan.src },
      { name: "twitter:image", content: IMG.kandyan.src },
    ],
  }),
  component: Art,
});

const DANCES = [
  { name: "Kandyan", region: "Uda Rata · Hill country", drum: "Geta bera", text: "Rooted in the Kohomba Kankariya ritual; acrobatic leaps and the beaded ves costume.", k: "kandyan" },
  { name: "Low Country", region: "Pahatha Rata · Southern coast", drum: "Yak bera", text: "Linked to healing rituals like the Sanni Yakuma; masks and dramatic character.", k: "lowcountry" },
  { name: "Sabaragamuwa", region: "Around Sri Pada", drum: "Davula", text: "Associated with devotion to the god Saman; a distinct regional rhythm.", k: "perahera" },
] as const;

function Art() {
  return (
    <>
      <PageHero k="kandyan" alt="Kandyan dancer" eyebrow="Art & Craft" title={["The art of", "our identity."]} intro="Drums, masks, looms and verse — crafts carried from generation to generation." />

      {/* A. Kandyan */}
      <section className="py-28">
        <Container className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-terracotta">A · Kandyan dance</p>
            <MaskHeading lines={["The dance", "of kings"]} className="display mt-4 text-6xl md:text-7xl" />
            <p className="mt-6 leading-relaxed text-muted-foreground">Born from ritual, refined in royal courts, and today a national symbol seen in the Kandy Esala Perahera.</p>
            <Link to="/$category/$slug" params={{ category: "art-craft", slug: "kandyan-dance" }} className="group mt-8 inline-block text-terracotta"><DiscoverLink /></Link>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <div className="aspect-[4/5] overflow-hidden"><img src={IMG.perahera.src} alt="Esala Perahera" loading="lazy" className="h-full w-full object-cover" /></div>
            <Credit k="perahera" className="mt-2 block text-muted-foreground" />
          </Reveal>
        </Container>
      </section>

      {/* B. Dance forms */}
      <section className="bg-forest py-28 text-ivory">
        <Container>
          <p className="eyebrow text-gold">B · Traditional dance forms</p>
          <MaskHeading lines={["Three schools,", "three drums."]} className="display mt-4 text-5xl md:text-7xl" />
          <div className="mt-16 grid gap-px bg-ivory/15 md:grid-cols-3">
            {DANCES.map((d, i) => (
              <Reveal key={d.name} delay={i * 120} className="bg-forest">
                <Link to="/$category/$slug" params={{ category: "art-craft", slug: "kandyan-dance" }} className="group block p-2">
                  <div className="aspect-square overflow-hidden"><img src={IMG[d.k].src} alt={d.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-[1.4s] group-hover:scale-105 group-hover:grayscale-0" /></div>
                  <div className="p-6">
                    <p className="eyebrow text-gold">{d.region}</p>
                    <h3 className="display mt-3 text-5xl">{d.name}</h3>
                    <p className="mt-3 text-sm text-ivory/75">{d.text}</p>
                    <p className="eyebrow mt-5 text-terracotta">Drum — {d.drum}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* C. Masks */}
      <section className="py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-8"><StoryCard to="/$category/$slug" params={{ category: "art-craft", slug: "traditional-masks" }} k="mask" kicker="C · Traditional masks" title="The masks of Ambalangoda" text="Kolam, Sanni and Raksha — carved from light kaduru wood and painted by hand in family workshops." className="md:aspect-[16/10]" /></Reveal>
            <Reveal delay={150} className="flex flex-col justify-end md:col-span-4">
              <div className="aspect-square overflow-hidden"><img src={IMG.maskMaker.src} alt="Wood carving workshop" loading="lazy" className="h-full w-full object-cover" /></div>
              <p className="mt-4 font-serif text-2xl italic">“Every fang, serpent and colour carries meaning.”</p>
              <p className="eyebrow mt-4 text-muted-foreground">Kolam · Sanni · Raksha</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* D & E */}
      <section className="pb-32">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal><StoryCard to="/$category/$slug" params={{ category: "art-craft", slug: "handloom" }} k="textile" kicker="D · Handloom & textiles" title="Threads of the island" text="Dumbara motifs and village looms — patterns passed from hand to hand." tall /></Reveal>
          <Reveal delay={150} className="md:mt-32"><StoryCard to="/$category/$slug" params={{ category: "art-craft", slug: "poetry" }} k="music" kicker="E · Poetry, music & storytelling" title="Songs of the field" text="Janakavi folk verse, harvest songs, drums and the tales of Andare." tall /></Reveal>
        </Container>
      </section>
    </>
  );
}
