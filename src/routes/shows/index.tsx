import { Link, createFileRoute } from "@tanstack/react-router";
import { TitleBanner } from "@/components/bits";
import { SHOWS } from "@/data/catalog";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/shows/")({
  component: ShowsPage,
  head: () =>
    pageMeta({
      title: "Pakistani shows | Jeeto Pakistan, Tamasha, morning TV | ShowBuzz",
      path: "/shows",
      description:
        "Pakistani television shows on air in October 2026: Jeeto Pakistan, Tamasha Season 5 and Good Morning Pakistan, with hosts and dates.",
      keywords: "Pakistani TV shows, Jeeto Pakistan 2026, Tamasha season 5, Good Morning Pakistan, Nida Yasir, Fahad Mustafa",
    }),
});

function ShowsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Pakistan and India</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Shows</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Game shows, reality and morning television. Not dramas. Each page is dated to a real October 2026 broadcast.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {SHOWS.map((show) => (
          <li key={show.slug}>
            <Link to="/shows/$slug" params={{ slug: show.slug }} className="block overflow-hidden rounded-card border border-line bg-paper shadow-sm transition hover:-translate-y-0.5 hover:border-lagoon hover:shadow-md">
              <div className="relative h-40">
                <TitleBanner seed={show.slug} className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white/80">{show.kind}</p>
                  <h2 className="font-display text-3xl leading-none">{show.title}</h2>
                </div>
              </div>
              <p className="px-4 py-3 text-sm text-muted">{show.channel}{show.host ? ` · ${show.host}` : ""}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
