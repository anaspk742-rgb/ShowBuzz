import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { StatusPill, TitleBanner } from "@/components/bits";
import { ESSAYS } from "@/data/essays";
import { DRAMAS, getDrama } from "@/data/catalog";
import { dramaFile } from "@/lib/briefs";
import { absUrl, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/dramas/$slug")({
  loader: ({ params }) => {
    const drama = getDrama(params.slug);
    if (!drama) throw notFound();
    const related = DRAMAS.filter((item) => item.channel === drama.channel && item.slug !== drama.slug).slice(0, 4);
    return { drama, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Drama not found | ShowBuzz" }] };
    const { drama } = loaderData;
    return pageMeta({
      title: `${drama.title} cast, writer, episodes | ShowBuzz`,
      path: `/dramas/${drama.slug}`,
      description: drama.description,
      keywords: drama.keywords,
    });
  },
  component: DramaPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That drama is not in the guide yet</h1>
    </main>
  ),
});

function DramaPage() {
  const { drama, related } = Route.useLoaderData();
  const story = ESSAYS[drama.slug];
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TVSeries",
          name: drama.title,
          inLanguage: "ur",
          countryOfOrigin: "PK",
          datePublished: drama.premiere ?? drama.year,
          description: drama.synopsis,
          actor: drama.cast.map((credit) => ({ "@type": "Person", name: credit.name })),
          url: absUrl(`/dramas/${drama.slug}`),
        }}
      />
      <p className="text-sm text-muted">
        <Link to="/dramas" className="text-lagoon">Dramas</Link> / {drama.channel}
      </p>
      <div className="mt-4 overflow-hidden rounded-card border border-line bg-paper">
        <div className="relative min-h-72 text-white">
          <TitleBanner seed={drama.slug} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/80 via-[#041820]/35 to-[#041820]/15" />
          <div className="relative px-5 py-10 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <StatusPill status={drama.status} />
              {drama.genres.map((genre) => (
                <span key={genre} className="text-sm text-white/80">{genre}</span>
              ))}
            </div>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl">{drama.title}</h1>
            {drama.urdu ? <p className="mt-2 text-lg text-white/80">{drama.urdu}</p> : null}
            <p className="mt-3 max-w-3xl text-base text-white/90">{drama.channel} · {drama.year}</p>
          </div>
        </div>
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_16rem]">
          <article className="space-y-4 text-base leading-relaxed">
            {dramaFile(drama).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {story ? (
              <>
                <h2 className="pt-2 font-display text-3xl">The story</h2>
                {story.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </>
            ) : (
              <>
                <h2 className="pt-2 font-display text-3xl">The story</h2>
                <p>{drama.synopsis}</p>
                <p>
                  ShowBuzz does not write episode-by-episode scenes that the channel has not published. The
                  cast, the slot and the confirmed episode numbers below are the record.
                </p>
              </>
            )}
          </article>
          <dl className="h-fit space-y-3 rounded-2xl bg-mist p-4">
            <Fact label="Channel" value={drama.channel} />
            <Fact label="Year" value={drama.year} />
            {drama.schedule ? <Fact label="Schedule" value={drama.schedule} /> : null}
            {drama.premiere ? <Fact label="Premiere" value={drama.premiere} /> : null}
            {drama.finished ? <Fact label="Ended" value={drama.finished} /> : null}
            {drama.episodeCount ? <Fact label="Episodes" value={drama.episodeCount} /> : null}
            {drama.writer ? <Fact label="Writer" value={drama.writer} /> : null}
            {drama.director ? <Fact label="Director" value={drama.director} /> : null}
            {drama.producer ? <Fact label="Producer" value={drama.producer} /> : null}
          </dl>
        </div>
      </div>

      <h2 className="mt-8 font-display text-3xl">When it airs</h2>
      <div className="mt-3 rounded-card border border-line bg-paper p-5">
        <p className="font-display text-2xl">{drama.schedule ?? "Day and time not confirmed on this update"}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {drama.channel}
          {drama.premiere ? ` · Started ${drama.premiere}` : ""}
          {drama.finished ? ` · Last episode ${drama.finished}` : ""}
          {drama.episodeCount ? ` · ${drama.episodeCount}` : ""}
          {drama.status === "on-air" ? ". Tonight’s episode can already be one ahead of the last upload this page confirmed." : "."}
        </p>
      </div>

      <h2 className="mt-8 font-display text-3xl">Full cast and characters</h2>
      {drama.cast.length === 0 ? (
        <p className="mt-2 text-muted">Cast not printed. The October listings did not agree, and ShowBuzz will not guess a name.</p>
      ) : (
        <div className="mt-3 overflow-x-auto rounded-card border border-line bg-paper">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="border-b border-line text-xs tracking-widest text-lagoon uppercase">
              <tr>
                <th className="px-4 py-3 font-semibold">Actor</th>
                <th className="px-4 py-3 font-semibold">Character</th>
              </tr>
            </thead>
            <tbody>
              {drama.cast.map((credit) => (
                <tr key={credit.name} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-medium">
                    {credit.slug ? (
                      <Link to="/celebrities/$slug" params={{ slug: credit.slug }} className="text-lagoon">
                        {credit.name}
                      </Link>
                    ) : (
                      credit.name
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted">{credit.role ?? "Character name not confirmed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="mt-8 font-display text-3xl">Episode log</h2>
      <p className="mt-2 max-w-3xl text-sm text-muted">
        Only episodes and dates a channel upload or a dated listing confirmed. This is not a recap of every scene.
      </p>
      <ol className="mt-3 space-y-3">
        {drama.beats.map((beat) => (
          <li key={beat.label} className="rounded-card border border-line bg-paper p-4">
            <p className="font-semibold">{beat.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{beat.detail}</p>
          </li>
        ))}
      </ol>
      {related.length ? (
        <>
          <h2 className="mt-8 font-display text-3xl">More on {drama.channel}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to="/dramas/$slug" params={{ slug: item.slug }} className="block rounded-card border border-line bg-paper px-4 py-3 hover:border-lagoon">
                  <span className="font-medium">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.year} · {item.status === "on-air" ? "On air" : "In the guide"}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="mt-6 text-xs leading-relaxed text-muted">Checked: {drama.verified}</p>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-widest text-lagoon uppercase">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  );
}
