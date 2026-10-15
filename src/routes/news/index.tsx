import { Link, createFileRoute } from "@tanstack/react-router";
import { NEWS } from "@/data/catalog";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/news/")({
  component: NewsPage,
  head: () =>
    pageMeta({
      title: "Celebrity news | Pakistani dramas and Bollywood | ShowBuzz",
      path: "/news",
      description:
        "ShowBuzz desk notes for October 2026: dramas on air, Mahira Khan’s new serial, Tamasha’s finale, and the Bollywood films opening this month.",
      keywords:
        "Pakistani celebrity news, Bollywood news October 2026, drama news, Mahira Khan news, Tamasha news",
    }),
});

function NewsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">Desk</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Celebrity news</h1>
      <p className="mt-3 text-muted">
        Original notes written by ShowBuzz. They are dated. They are not copied from a newspaper, and they do not
        invent a scandal to fill a slot.
      </p>
      <ul className="mt-6 space-y-3">
        {NEWS.map((item) => (
          <li key={item.slug}>
            <Link to="/news/$slug" params={{ slug: item.slug }} className="block rounded-card border border-line bg-paper p-5">
              <p className="text-xs font-semibold tracking-widest text-lagoon uppercase">{item.kicker} · {item.date}</p>
              <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
