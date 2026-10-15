import { Link, createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { TitleBanner } from "@/components/bits";
import { topMovies } from "@/data/catalog";
import { SITE_URL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/best-bollywood-movies")({
  component: BestMovies,
  head: () =>
    pageMeta({
      title: "Top 20 Indian movies of all time | ShowBuzz",
      path: "/best-bollywood-movies",
      description:
        "ShowBuzz’s editorial top 20 Hindi films, from Sholay and Mother India to Dangal and Haider. Cast and director on each page.",
      keywords:
        "best Bollywood movies, best Bollywood movies of all time, top Hindi films, Sholay, 3 Idiots, DDLJ, Dangal",
    }),
});

function BestMovies() {
  const movies = topMovies();
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Top 20 Indian movies of all time",
          numberOfItems: movies.length,
          itemListElement: movies.map((movie, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: movie.title,
            url: `${SITE_URL}/movies/${movie.slug}`,
          })),
        }}
      />
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Editorial · October 2026</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Top 20 Indian movies of all time</h1>
      <p className="mt-3 text-muted">
        Hindi films that have lasted, not this month’s box office. New releases such as Drishyam 3 and King
        are on the movies page until they have had time to earn a place here.
      </p>
      <ol className="mt-6 space-y-3">
        {movies.map((movie, index) => (
          <li key={movie.slug}>
            <Link
              to="/movies/$slug"
              params={{ slug: movie.slug }}
              className="grid grid-cols-[7.5rem_1fr] overflow-hidden rounded-card border border-line bg-paper shadow-sm hover:border-lagoon"
            >
              <div className="relative min-h-24">
                <TitleBanner seed={movie.slug} className="absolute inset-0 h-full w-full" />
                <span className="absolute top-2 left-2 rounded-full bg-paper/90 px-2 py-0.5 text-xs font-semibold text-lagoon">{index + 1}</span>
              </div>
              <div className="p-4">
                <h2 className="font-display text-2xl">{movie.title}</h2>
                <p className="text-sm text-muted">
                  {movie.year}
                  {movie.director ? ` · ${movie.director}` : ""}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
