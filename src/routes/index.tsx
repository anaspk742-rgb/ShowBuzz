import { createFileRoute, Link } from "@tanstack/react-router";
import { DramaCard, MovieCard, PersonCard, SectionTitle, StatusPill } from "@/components/bits";
import { JsonLd } from "@/components/json-ld";
import { DRAMAS, MOVIES, NEWS, PEOPLE, topDramas, topMovies } from "@/data/catalog";
import { SITE_URL, UPDATED_LABEL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageMeta({
      title: "ShowBuzz | Pakistani dramas, Indian movies and celebrities",
      path: "/",
      description:
        "ShowBuzz is the independent guide to Pakistani dramas and shows and to Hindi films. On-air serials, all-time lists, cast, writers and upcoming movies. Updated 15 October 2026.",
      keywords:
        "Pakistani dramas, Pakistani dramas 2026, best Pakistani dramas, HUM TV drama, Indian movies, upcoming Indian movies 2026, Mahira Khan, Fawad Khan, Yumna Zaidi, Shah Rukh Khan",
    }),
});

const DOORS = [
  { to: "/dramas", title: "Dramas", text: "Every serial on this desk: on air now, just ended, and the ones people still rewatch." },
  { to: "/movies", title: "Movies", text: "Indian films in theatres, the October–December slate, and the all-time list." },
  { to: "/shows", title: "Shows", text: "Jeeto Pakistan, Tamasha, KBC, Bigg Boss and Kapil Sharma, dated to this month." },
  { to: "/celebrities", title: "Celebrities", text: "Pakistani and Indian stars, each with their own page and only licensed photos." },
  { to: "/news", title: "Celebrity news", text: "Short desk notes on what actually changed this month. No recycled rumours." },
] as const;

function Home() {
  const onAir = DRAMAS.filter((drama) => drama.status === "on-air");
  const opening = MOVIES.filter((movie) => movie.status !== "classic").slice(0, 6);
  const stars = ["mahira-khan", "fawad-khan", "yumna-zaidi", "durefishan-saleem", "shah-rukh-khan", "ajay-devgn"]
    .map((slug) => PEOPLE.find((person) => person.slug === slug))
    .filter((person) => person != null);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ShowBuzz",
          url: SITE_URL,
          description: "Independent guide to Pakistani dramas and Hindi films.",
          dateModified: "2026-10-15",
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/search?q={query}`,
            "query-input": "required name=query",
          },
        }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-2">
        <div className="overflow-hidden rounded-card border border-line bg-paper">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-5 py-8 sm:px-10 sm:py-12">
              <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">
                Pakistan dramas · Indian movies · Updated {UPDATED_LABEL}
              </p>
              <h1 className="mt-3 font-display text-4xl text-ink sm:text-6xl">
                The showbiz guide that tells you what is on, and who made it.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Pakistani dramas and shows, and Indian movies. Every serial page carries the channel, writer,
                director, cast and the latest episode that was actually confirmed. The two faces on this page
                are Mahira Khan and Fawad Khan, the Humsafar pair, used only because the photographs are free
                to publish.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/dramas" className="inline-flex min-h-11 items-center rounded-full bg-lagoon px-5 font-semibold text-lagoon-ink">
                  Dramas on air
                </Link>
                <Link to="/movies" className="inline-flex min-h-11 items-center rounded-full border border-line bg-mist px-5 font-semibold text-ink">
                  Indian movies
                </Link>
                <Link to="/news" className="inline-flex min-h-11 items-center rounded-full border border-line px-5 font-semibold">
                  Celebrity news
                </Link>
              </div>
            </div>
            <div className="grid min-h-80 grid-cols-2 lg:min-h-full">
              <img
                src="/media/people/mahira-khan-hero.jpg"
                alt="Mahira Khan in 2024"
                width={900}
                height={1100}
                fetchPriority="high"
                decoding="async"
                className="h-full max-h-[34rem] w-full object-cover object-top"
              />
              <img
                src="/media/people/fawad-khan-hero.jpg"
                alt="Fawad Khan at the Vogue Beauty Awards in 2015"
                width={900}
                height={1100}
                fetchPriority="high"
                decoding="async"
                className="h-full max-h-[34rem] w-full object-cover object-top"
              />
            </div>
          </div>
          <p className="border-t border-line px-5 py-3 text-xs leading-relaxed text-muted sm:px-8">
            Mahira Khan photograph: The Citizens Foundation,{" "}
            <a className="underline" href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>,{" "}
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:Mahira_Khan_2024_(1).png">Wikimedia Commons</a>.
            Fawad Khan photograph: Bollywood Hungama,{" "}
            <a className="underline" href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>,{" "}
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:Fawad_Khan_at_Vogue_Beauty_awards.jpg">Wikimedia Commons</a>.
            ShowBuzz cropped both for the banner.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 lg:grid-cols-5">
        {DOORS.map((door) => (
          <Link key={door.to} to={door.to} className="rounded-card border border-line bg-paper p-4 hover:border-lagoon">
            <h2 className="font-display text-2xl">{door.title}</h2>
            <p className="mt-2 text-sm text-muted">{door.text}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle
          kicker="On air"
          title="Pakistani dramas this week"
          lede="Episode counts are the last ones a channel upload or a dated listing confirmed. Tonight’s episode may already be one ahead."
        />
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          {onAir.map((drama) => (
            <DramaCard key={drama.slug} drama={drama} />
          ))}
        </div>
        <Link to="/dramas" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-lagoon">
          All dramas
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle
          kicker="Cinema"
          title="In theatres and opening next"
          lede="Hindi films only on the main slate. Dates checked against calendars published 1–11 October 2026."
        />
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          {opening.map((movie) => (
            <MovieCard key={movie.slug} movie={movie} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle kicker="Faces" title="Stars with their own pages" />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stars.map((person) => (
            <PersonCard key={person.slug} person={person} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle kicker="Desk" title="Celebrity news" />
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {NEWS.slice(0, 3).map((item) => (
            <Link key={item.slug} to="/news/$slug" params={{ slug: item.slug }} className="rounded-card border border-line bg-paper p-5">
              <p className="text-xs font-semibold tracking-widest text-lagoon uppercase">{item.kicker}</p>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
              <p className="mt-3 text-xs text-muted">{item.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2">
        <Ranking
          kicker="All-time"
          title="Top 20 Pakistani dramas"
          href="/best-pakistani-dramas"
          rows={topDramas().map((drama) => ({
            href: `/dramas/${drama.slug}`,
            title: drama.title,
            detail: `${drama.year} · ${drama.channel}`,
          }))}
        />
        <Ranking
          kicker="All-time"
          title="Top 20 Indian movies"
          href="/best-bollywood-movies"
          rows={topMovies().map((movie) => ({
            href: `/movies/${movie.slug}`,
            title: movie.title,
            detail: movie.year,
          }))}
        />
      </section>
      <p className="mx-auto max-w-6xl px-4 pb-4 text-sm text-muted">
        The top 20 lists are a ShowBuzz editorial ranking, not a box-office chart and not an award.{" "}
        <StatusPill status="on-air" /> marks something airing in October 2026.
      </p>
    </main>
  );
}

function Ranking({
  kicker,
  title,
  href,
  rows,
}: {
  kicker: string;
  title: string;
  href: "/best-pakistani-dramas" | "/best-bollywood-movies";
  rows: { href: string; title: string; detail: string }[];
}) {
  return (
    <div className="rounded-card border border-line bg-paper p-5">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl">{title}</h2>
      <ol className="mt-4 space-y-2">
        {rows.map((row, index) => (
          <li key={row.href}>
            <a href={row.href} className="flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 border-b border-line py-2 text-sm last:border-0 hover:text-lagoon">
              <span className="w-6 font-semibold text-lagoon">{index + 1}</span>
              <span className="font-medium">{row.title}</span>
              <span className="text-muted sm:ml-auto">{row.detail}</span>
            </a>
          </li>
        ))}
      </ol>
      <Link to={href} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-lagoon">
        Open the full ranking
      </Link>
    </div>
  );
}
