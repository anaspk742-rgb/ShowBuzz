import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { StatusPill, TitleBanner } from "@/components/bits";
import { JsonLd } from "@/components/json-ld";
import { ESSAYS } from "@/data/essays";
import { MOVIES, getMovie } from "@/data/catalog";
import { movieFile } from "@/lib/briefs";
import { absUrl, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/movies/$slug")({
  loader: ({ params }) => {
    const movie = getMovie(params.slug);
    if (!movie) throw notFound();
    const related = MOVIES.filter((item) => item.status === movie.status && item.slug !== movie.slug).slice(0, 4);
    return { movie, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Film not found | ShowBuzz" }] };
    const { movie } = loaderData;
    return pageMeta({
      title: `${movie.title} (${movie.year}) cast and release | ShowBuzz`,
      path: `/movies/${movie.slug}`,
      description: movie.description,
      keywords: movie.keywords,
    });
  },
  component: MoviePage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That film is not in the guide yet</h1>
    </main>
  ),
});

function MoviePage() {
  const { movie, related } = Route.useLoaderData();
  const story = ESSAYS[movie.slug];
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Movie",
          name: movie.title,
          datePublished: movie.release,
          inLanguage: movie.language,
          description: movie.synopsis,
          director: movie.director ? { "@type": "Person", name: movie.director } : undefined,
          actor: movie.cast.map((credit) => ({ "@type": "Person", name: credit.name })),
          url: absUrl(`/movies/${movie.slug}`),
        }}
      />
      <p className="text-sm text-muted">
        <Link to="/movies" className="text-lagoon">Movies</Link> / {movie.language}
      </p>
      <div className="mt-4 overflow-hidden rounded-card border border-line bg-paper">
        <div className="relative min-h-72 text-white">
          <TitleBanner seed={movie.slug} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/80 via-[#041820]/35 to-[#041820]/15" />
          <div className="relative px-5 py-10 sm:px-8">
            <StatusPill status={movie.status} />
            <h1 className="mt-3 font-display text-4xl sm:text-6xl">{movie.title}</h1>
            <p className="mt-2 text-white/85">{movie.year} · {movie.genres.join(" · ")}</p>
          </div>
        </div>
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_16rem]">
          <article className="space-y-4 text-base leading-relaxed">
            {movieFile(movie).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {story ? (
              <>
                <h2 className="pt-2 font-display text-3xl">The story</h2>
                {story.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </>
            ) : null}
          </article>
          <dl className="h-fit space-y-3 rounded-2xl bg-mist p-4">
            <Item label="Release" value={movie.release} />
            <Item label="Language" value={movie.language} />
            {movie.director ? <Item label="Director" value={movie.director} /> : null}
            {movie.writer ? <Item label="Writer" value={movie.writer} /> : null}
          </dl>
        </div>
      </div>
      <h2 className="mt-8 font-display text-3xl">Cast</h2>
      <ul className="mt-3 divide-y divide-line rounded-card border border-line bg-paper">
        {movie.cast.map((credit) => (
          <li key={credit.name} className="flex items-baseline justify-between gap-3 px-4 py-3">
            {credit.slug ? (
              <Link to="/celebrities/$slug" params={{ slug: credit.slug }} className="font-medium text-lagoon">
                {credit.name}
              </Link>
            ) : (
              <span className="font-medium">{credit.name}</span>
            )}
            {credit.role ? <span className="text-sm text-muted">{credit.role}</span> : null}
          </li>
        ))}
      </ul>
      {related.length ? (
        <>
          <h2 className="mt-8 font-display text-3xl">More films</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to="/movies/$slug" params={{ slug: item.slug }} className="block rounded-card border border-line bg-paper px-4 py-3 hover:border-lagoon">
                  <span className="font-medium">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="mt-6 text-xs leading-relaxed text-muted">{movie.verified}</p>
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
