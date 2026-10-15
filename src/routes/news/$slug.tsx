import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { getNews } from "@/data/catalog";
import { SITE_NAME, absUrl, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = getNews(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found | ShowBuzz" }] };
    const { item } = loaderData;
    return pageMeta({
      title: `${item.title} | ShowBuzz`,
      path: `/news/${item.slug}`,
      description: item.description,
      keywords: item.keywords,
    });
  },
  component: NewsArticle,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That note is not on the desk</h1>
    </main>
  ),
});

function NewsArticle() {
  const { item } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: item.title,
          datePublished: item.iso,
          dateModified: "2026-10-15",
          author: { "@type": "Organization", name: SITE_NAME },
          description: item.summary,
          url: absUrl(`/news/${item.slug}`),
        }}
      />
      <p className="text-sm text-muted">
        <Link to="/news" className="text-lagoon">Celebrity news</Link>
      </p>
      <p className="mt-3 text-sm font-semibold tracking-widest text-lagoon uppercase">{item.kicker} · {item.date}</p>
      <h1 className="mt-2 font-display text-4xl">{item.title}</h1>
      <p className="mt-4 text-lg text-muted">{item.summary}</p>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        {item.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
