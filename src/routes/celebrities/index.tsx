import { Link, createFileRoute } from "@tanstack/react-router";
import { PersonCard } from "@/components/bits";
import { PEOPLE } from "@/data/catalog";
import { pageMeta } from "@/lib/site";

const COUNTRIES = ["All", "Pakistan", "India"] as const;

export const Route = createFileRoute("/celebrities/")({
  validateSearch: (search: Record<string, unknown>) => ({
    country: COUNTRIES.includes(search.country as (typeof COUNTRIES)[number])
      ? (search.country as (typeof COUNTRIES)[number])
      : "All",
  }),
  component: PeoplePage,
  head: () =>
    pageMeta({
      title: "Pakistani and Bollywood celebrities | ShowBuzz",
      path: "/celebrities",
      description:
        "Profiles of Pakistani actors and Bollywood stars, including Mahira Khan, Yumna Zaidi, Durefishan Saleem and Shah Rukh Khan. Photos only with a licence and a credit.",
      keywords:
        "Pakistani celebrities, Bollywood celebrities, Mahira Khan, Yumna Zaidi, Durefishan Saleem, Hania Aamir, Shah Rukh Khan, Pakistani actors",
    }),
});

function PeoplePage() {
  const { country } = Route.useSearch();
  const list = PEOPLE.filter((person) => country === "All" || person.country === country);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Pakistan and India</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Celebrities</h1>
      <p className="mt-3 max-w-2xl text-muted">
        If a photograph is on the page, the photographer or agency is named under it, with the licence.
        If there is no free photograph, you get initials instead of a stolen picture.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {COUNTRIES.map((item) => (
          <Link
            key={item}
            to="/celebrities"
            search={{ country: item }}
            className={
              country === item
                ? "inline-flex min-h-11 items-center rounded-full bg-lagoon px-4 text-sm font-semibold text-lagoon-ink"
                : "inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-ink"
            }
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((person) => (
          <PersonCard key={person.slug} person={person} />
        ))}
      </div>
    </main>
  );
}