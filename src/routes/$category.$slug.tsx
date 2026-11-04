import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ARTICLES, CATEGORIES, getArticle } from "@/lib/articles";
import { Container, Credit, MaskHeading, PageHero, Parallax, Reveal, StoryCard } from "@/components/site/kit";

export const Route = createFileRoute("/$category/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.category, params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — LANKA.` : "Story not found — LANKA.";
    const desc = a?.intro ?? "A story from LANKA.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const cat = CATEGORIES[a.category];
  const related = ARTICLES.filter((x) => x.category === a.category && x.slug !== a.slug).slice(0, 3);
  const more = related.length ? related : ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <article>
      <PageHero k={a.hero} eyebrow={a.kicker} title={[a.title]} alt={a.title} />

      <Container className="pt-10">
        <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-3 text-muted-foreground">
          <Link to="/" className="hover:text-terracotta">Home</Link>
          <span>/</span>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Link to={cat.path as any} className="hover:text-terracotta">{cat.label}</Link>
          <span>/</span>
          <span className="text-foreground">{a.title}</span>
        </nav>
      </Container>

      <Container className="grid gap-12 py-20 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <p className="font-serif text-3xl leading-snug md:text-4xl">{a.intro}</p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-3 md:col-start-10">
          <p className="eyebrow text-terracotta">{a.readTime}</p>
          <p className="mt-3 text-sm text-muted-foreground">An educational feature from the {cat.label} collection.</p>
        </Reveal>
      </Container>

      {a.sections.map((s, i) => (
        <section key={s.heading} className="pb-24">
          {s.image && i % 2 === 1 && (
            <Reveal className="mb-14">
              <figure>
                <Parallax k={s.image} alt={s.caption ?? s.heading} className="h-[60vh] md:h-[80vh]" />
                <Container><figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm italic text-muted-foreground"><span>{s.caption}</span><Credit k={s.image} className="not-italic" /></figcaption></Container>
              </figure>
            </Reveal>
          )}
          <Container className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</p>
              <MaskHeading lines={[s.heading]} className="mt-3 text-4xl leading-tight md:text-5xl" />
            </div>
            <Reveal className="space-y-5 text-lg leading-relaxed text-foreground/85 md:col-span-7 md:col-start-6">
              {s.body.map((p, j) => <p key={j}>{p}</p>)}
            </Reveal>
            {s.image && i % 2 === 0 && (
              <Reveal className="md:col-span-7 md:col-start-6">
                <figure>
                  <div className="group overflow-hidden">
                    <img src={`${""}${s.image ? "" : ""}`} hidden alt="" />
                  </div>
                  <ImageBlock k={s.image} caption={s.caption ?? ""} />
                </figure>
              </Reveal>
            )}
          </Container>
        </section>
      ))}

      <section className="bg-forest py-24 text-ivory">
        <Container>
          <p className="eyebrow text-gold">Did you know</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Interesting facts</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {a.facts.map((f, i) => (
              <Reveal key={i} delay={i * 100} className="border-t border-gold/40 pt-6">
                <p className="display text-4xl text-terracotta">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 leading-relaxed text-ivory/85">{f}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <h2 className="eyebrow text-terracotta">References & further reading</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {a.references.map((r) => (
            <li key={r.url}>
              <a href={r.url} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-2 text-foreground/80 hover:text-terracotta">
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" />
                <span className="link-line">{r.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">Content is summarised from the sources above for educational purposes. LANKA. is an independent publication.</p>
      </Container>

      <section className="border-t border-border py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-5xl">Related stories</h2>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link to={cat.path as any} className="eyebrow inline-flex items-center gap-2 text-terracotta hover:gap-4 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to {cat.label}
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {more.map((r, i) => (
              <Reveal key={r.slug} delay={i * 120}>
                <StoryCard to="/$category/$slug" params={{ category: r.category, slug: r.slug }} k={r.hero} kicker={r.kicker} title={r.title} tall />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}

function ImageBlock({ k, caption }: { k: Parameters<typeof Credit>[0]["k"]; caption: string }) {
  return (
    <>
      <div className="group aspect-[16/10] overflow-hidden bg-muted">
        <ImgZoom k={k} alt={caption} />
      </div>
      <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm italic text-muted-foreground">
        <span>{caption}</span>
        <Credit k={k} className="not-italic" />
      </figcaption>
    </>
  );
}

import { IMG } from "@/lib/images";
function ImgZoom({ k, alt }: { k: keyof typeof IMG; alt: string }) {
  return <img src={IMG[k].src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105" />;
}
