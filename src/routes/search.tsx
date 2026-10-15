import { Link, createFileRoute } from "@tanstack/react-router";
import { searchAll } from "@/data/catalog";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  component: SearchPage,
  head: () =>
    pageMeta({
      title: "Search ShowBuzz",
      path: "/search",
      description: "Search Pakistani dramas, Bollywood movies, shows and celebrities on ShowBuzz.",
      keywords: "search Pakistani drama, search Bollywood movie, ShowBuzz search",
    }),
});

function SearchPage() {
  const { q } = Route.useSearch();
  const hits = searchAll(q);
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="font-display text-4xl">Search</h1>
      <form action="/search" className="mt-4 flex gap-2">
        <label htmlFor="q" className="sr-only">Search</label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="Try Humsafar, Yumna, King, Jeeto"
          className="w-full rounded-full border border-line bg-paper px-4 py-3 text-base"
        />
        <button type="submit" className="min-h-11 rounded-full bg-lagoon px-5 font-semibold text-lagoon-ink">
          Search
        </button>
      </form>
      {q.trim().length < 2 ? (
        <p className="mt-6 text-muted">Type at least two letters. Try a drama, a film, or a surname.</p>
      ) : hits.length === 0 ? (
        <p className="mt-6 text-muted">Nothing matched “{q}”. The guide is Pakistan dramas and Hindi films, not every show on earth.</p>
      ) : (
        <ul className="mt-6 space-y-2">
          {hits.map((hit) => (
            <li key={hit.href}>
              <a href={hit.href} className="block rounded-card border border-line bg-paper px-4 py-3">
                <span className="text-xs font-semibold tracking-widest text-lagoon uppercase">{hit.kind}</span>
                <span className="mt-1 block font-medium">{hit.title}</span>
                <span className="text-sm text-muted">{hit.detail}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-8 text-sm text-muted">
        Or browse <Link to="/dramas" className="text-lagoon">dramas</Link>,{" "}
        <Link to="/movies" className="text-lagoon">movies</Link> and{" "}
        <Link to="/celebrities" className="text-lagoon">celebrities</Link>.
      </p>
    </main>
  );
}
