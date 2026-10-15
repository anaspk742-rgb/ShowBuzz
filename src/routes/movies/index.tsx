import { Link, createFileRoute } from "@tanstack/react-router";
import { MovieCard } from "@/components/bits";
import { MOVIES } from "@/data/catalog";
import type { MovieStatus } from "@/data/types";
import { pageMeta } from "@/lib/site";

const STATUSES = ["all", "in-theatres", "upcoming", "classic"] as const;

export const Route = createFileRoute("/movies/")({
  validateSearch: (search: Record<string, unknown>) => ({
    status: STATUSES.includes(search.status as (typeof STATUSES)[number])
      ? (search.status as (typeof STATUSES)[number])
      : "all",
  }),
  component: MoviesPage,
  head: () =>
    pageMeta({
      title: "Indian movies | In theatres, upcoming, all-time | ShowBuzz",
      path: "/movies",
      description:
        "Indian movies in theatres in October 2026, the releases through December, and ShowBuzz’s all-time Hindi-film list with cast and director.",
      keywords:
        "Bollywood movies, Bollywood movies 2026, upcoming Bollywood movies, best Bollywood movies of all time, Drishyam 3, King movie, Ramayana movie",
    }),
});

const FILTERS: { id: "all" | MovieStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "in-theatres", label: "In theatres" },
  { id: "upcoming", label: "Upcoming" },
  { id: "classic", label: "Classics" },
];

function MoviesPage() {
  const { status } = Route.useSearch();
  const list = MOVIES.filter((movie) => status === "all" || movie.status === status);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">India · Hindi cinema</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Movies</h1>
      <p className="mt-3 max-w-2xl text-muted">
        The living slate is Hindi films dated from October calendars. Tamil and Telugu openings the same week,
        such as Jailer 2 on 15 October, are noted in the news rather than filed as Hindi films.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <Link
            key={item.id}
            to="/movies"
            search={{ status: item.id }}
            className={
              status === item.id
                ? "inline-flex min-h-11 items-center rounded-full bg-lagoon px-4 text-sm font-semibold text-lagoon-ink"
                : "inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-ink"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        {list.map((movie) => (
          <MovieCard key={movie.slug} movie={movie} />
        ))}
      </div>
    </main>
  );
}