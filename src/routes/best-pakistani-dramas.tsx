import { Link, createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { TitleBanner } from "@/components/bits";
import { topDramas } from "@/data/catalog";
import { SITE_URL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/best-pakistani-dramas")({
  component: BestDramas,
  head: () =>
    pageMeta({
      title: "Top 20 Pakistani dramas of all time | ShowBuzz",
      path: "/best-pakistani-dramas",
      description:
        "ShowBuzz’s editorial top 20 Pakistani dramas, from Humsafar and Zindagi Gulzar Hai to Kabhi Main Kabhi Tum. Not a ratings chart.",
      keywords:
        "best Pakistani dramas, best Pakistani dramas of all time, top Pakistani dramas, Humsafar, Zindagi Gulzar Hai, Yaqeen Ka Safar",
    }),
});

function BestDramas() {
  const dramas = topDramas();
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Top 20 Pakistani dramas of all time",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: dramas.length,
          itemListElement: dramas.map((drama, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: drama.title,
            url: `${SITE_URL}/dramas/${drama.slug}`,
          })),
        }}
      />
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Editorial · October 2026</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Top 20 Pakistani dramas of all time</h1>
      <p className="mt-3 text-muted">
        A ShowBuzz ranking of serials that still define the form. It is not HUM’s TRP sheet and it is not
        “best of 2026”. Open any title for cast, writer and director.
      </p>
      <ol className="mt-6 space-y-3">
        {dramas.map((drama, index) => (
          <li key={drama.slug}>
            <Link
              to="/dramas/$slug"
              params={{ slug: drama.slug }}
              className="grid grid-cols-[7.5rem_1fr] overflow-hidden rounded-card border border-line bg-paper shadow-sm hover:border-lagoon"
            >
              <div className="relative min-h-24">
                <TitleBanner seed={drama.slug} className="absolute inset-0 h-full w-full" />
                <span className="absolute top-2 left-2 rounded-full bg-paper/90 px-2 py-0.5 text-xs font-semibold text-lagoon">{index + 1}</span>
              </div>
              <div className="p-4">
                <h2 className="font-display text-2xl">{drama.title}</h2>
                <p className="text-sm text-muted">
                  {drama.year} · {drama.channel}
                  {drama.writer ? ` · ${drama.writer}` : ""}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
