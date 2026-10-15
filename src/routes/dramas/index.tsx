import { Link, createFileRoute } from "@tanstack/react-router";
import { DramaCard } from "@/components/bits";
import { DRAMAS } from "@/data/catalog";
import type { DramaStatus } from "@/data/types";
import { pageMeta } from "@/lib/site";

const STATUSES = ["all", "on-air", "ended"] as const;

export const Route = createFileRoute("/dramas/")({
  validateSearch: (search: Record<string, unknown>) => ({
    status: STATUSES.includes(search.status as (typeof STATUSES)[number])
      ? (search.status as (typeof STATUSES)[number])
      : "all",
  }),
  component: DramasPage,
  head: () =>
    pageMeta({
      title: "Pakistani dramas | On air, cast and episodes | ShowBuzz",
      path: "/dramas",
      description:
        "Pakistani dramas on HUM, Geo, ARY and Green in October 2026, plus the serials people still search. Writer, director, cast and confirmed episodes.",
      keywords:
        "Pakistani dramas, Pakistani dramas 2026, ongoing Pakistani dramas, HUM TV dramas, Geo TV dramas, ARY Digital dramas, best Pakistani dramas",
    }),
});

const FILTERS: { id: "all" | DramaStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "on-air", label: "On air" },
  { id: "ended", label: "Ended" },
];

function DramasPage() {
  const { status } = Route.useSearch();
  const list = DRAMAS.filter((drama) => status === "all" || drama.status === status);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Pakistan</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Dramas</h1>
      <p className="mt-3 max-w-2xl text-muted">
        On-air serials are dated to mid-October 2026. Classics stay because people still search the cast,
        the writer and the ending. Open any title for the full credit block.
      </p>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter dramas">
        {FILTERS.map((item) => (
          <Link
            key={item.id}
            to="/dramas"
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
        {list.map((drama) => (
          <DramaCard key={drama.slug} drama={drama} />
        ))}
      </div>
    </main>
  );
}