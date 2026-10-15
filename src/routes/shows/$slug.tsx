import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { TitleBanner } from "@/components/bits";
import { ESSAYS } from "@/data/essays";
import { getShow } from "@/data/catalog";
import { showFile } from "@/lib/briefs";
import { absUrl, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/shows/$slug")({
  loader: ({ params }) => {
    const show = getShow(params.slug);
    if (!show) throw notFound();
    return { show };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Show not found | ShowBuzz" }] };
    const { show } = loaderData;
    return pageMeta({
      title: `${show.title} | ShowBuzz`,
      path: `/shows/${show.slug}`,
      description: show.description,
      keywords: show.keywords,
    });
  },
  component: ShowPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That show is not in the guide yet</h1>
    </main>
  ),
});

function ShowPage() {
  const { show } = Route.useLoaderData();
  const story = ESSAYS[show.slug];
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TVSeries",
          name: show.title,
          description: show.synopsis,
          url: absUrl(`/shows/${show.slug}`),
        }}
      />
      <p className="text-sm text-muted">
        <Link to="/shows" className="text-lagoon">Shows</Link> / {show.channel}
      </p>
      <div className="mt-4 overflow-hidden rounded-card border border-line bg-paper">
        <div className="relative min-h-64 text-white">
          <TitleBanner seed={show.slug} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/80 via-[#041820]/35 to-[#041820]/15" />
          <div className="relative px-5 py-10 sm:px-8">
            <p className="text-sm font-semibold tracking-widest uppercase text-white/80">{show.kind}</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl">{show.title}</h1>
            <p className="mt-2 text-white/85">{show.channel}</p>
          </div>
        </div>
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_16rem]">
          <article className="space-y-4 leading-relaxed">
            {showFile(show).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {story
              ? story.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))
              : null}
          </article>
          <dl className="h-fit space-y-3 rounded-2xl bg-mist p-4">
            {show.host ? <Item label="Host" value={show.host} /> : null}
            {show.schedule ? <Item label="Schedule" value={show.schedule} /> : null}
            <Item label="Kind" value={show.kind} />
          </dl>
        </div>
      </div>
      <h2 className="mt-8 font-display text-3xl">What we can date</h2>
      <ul className="mt-3 space-y-3">
        {show.beats.map((beat) => (
          <li key={beat.label} className="rounded-card border border-line bg-paper p-4">
            <p className="font-semibold">{beat.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{beat.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs leading-relaxed text-muted">{show.verified}</p>
    </main>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-widest text-lagoon uppercase">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  );
}
