import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Portrait, Credit } from "@/components/bits";
import { JsonLd } from "@/components/json-ld";
import { ESSAYS } from "@/data/essays";
import { getPerson, worksFor } from "@/data/catalog";
import { CAREERS, type WorkLine } from "@/data/careers";
import { personFile } from "@/lib/briefs";
import { absUrl, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/celebrities/$slug")({
  loader: ({ params }) => {
    const person = getPerson(params.slug);
    if (!person) throw notFound();
    return { person, works: worksFor(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found | ShowBuzz" }] };
    const { person } = loaderData;
    return pageMeta({
      title: `${person.name} | Dramas, films and profile | ShowBuzz`,
      path: `/celebrities/${person.slug}`,
      description: person.description,
      keywords: person.keywords,
    });
  },
  component: PersonPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">That name is not in the guide yet</h1>
    </main>
  ),
});

function PersonPage() {
  const { person, works } = Route.useLoaderData();
  const story = ESSAYS[person.slug];
  const career = CAREERS[person.slug];
  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-4 py-8 lg:grid-cols-[18rem_1fr]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: person.name,
          nationality: person.country,
          description: person.bio,
          url: absUrl(`/celebrities/${person.slug}`),
          ...(person.photo
            ? {
                image: absUrl(person.photo.src),
                citation: `${person.photo.author}, ${person.photo.license}, ${person.photo.sourceUrl}`,
              }
            : {}),
        }}
      />
      <div>
        <Portrait person={person} large />
        {person.gallery?.map((photo) => (
          <figure key={photo.src} className="mt-4">
            <img
              src={photo.src}
              alt={photo.alt}
              width={640}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
            <Credit photo={photo} />
          </figure>
        ))}
      </div>
      <article>
        <p className="text-sm text-muted">
          <Link to="/celebrities" className="text-lagoon">Celebrities</Link> / {person.country}
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">{person.name}</h1>
        {person.urdu ? <p className="text-lg text-muted">{person.urdu}</p> : null}
        <p className="mt-1 text-sm text-muted">
          {person.roles}
          {person.born ? ` · Born ${person.born}` : ""}
        </p>
        <div className="mt-4 space-y-4 text-base leading-relaxed">
          {personFile(person).map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {story?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {career?.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        {career && career.awards.length > 0 ? (
          <>
            <h2 className="mt-8 font-display text-3xl">Awards and honours</h2>
            <ul className="mt-3 space-y-2 rounded-card border border-line bg-paper p-4">
              {career.awards.map((award) => (
                <li key={award.slice(0, 40)} className="text-sm leading-relaxed">{award}</li>
              ))}
            </ul>
          </>
        ) : null}
        {career && career.works.length > 0 ? (
          <>
            <h2 className="mt-8 font-display text-3xl">Films, dramas and shows</h2>
            <div className="mt-3 overflow-x-auto rounded-card border border-line bg-paper">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="border-b border-line text-xs tracking-widest text-lagoon uppercase">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Year</th>
                    <th className="px-3 py-2 font-semibold">Title</th>
                    <th className="px-3 py-2 font-semibold">Role</th>
                    <th className="px-3 py-2 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {career.works.map((work) => (
                    <tr key={`${work.year}-${work.title}`} className="border-b border-line last:border-0">
                      <td className="px-3 py-3 align-top text-muted">{work.year}</td>
                      <td className="px-3 py-3 align-top font-medium">
                        <WorkTitle work={work} />
                      </td>
                      <td className="px-3 py-3 align-top">{work.role}</td>
                      <td className="px-3 py-3 align-top text-muted">{work.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
        <h2 className="mt-8 font-display text-3xl">Work on ShowBuzz</h2>
        <ul className="mt-3 divide-y divide-line rounded-card border border-line bg-paper">
          {works.dramas.map((drama) => (
            <li key={drama.slug} className="px-4 py-3">
              <Link to="/dramas/$slug" params={{ slug: drama.slug }} className="font-medium text-lagoon">
                {drama.title}
              </Link>
              <p className="text-sm text-muted">Drama · {drama.channel} · {drama.year}. {drama.synopsis}</p>
            </li>
          ))}
          {works.movies.map((movie) => (
            <li key={movie.slug} className="px-4 py-3">
              <Link to="/movies/$slug" params={{ slug: movie.slug }} className="font-medium text-lagoon">
                {movie.title}
              </Link>
              <p className="text-sm text-muted">Film · {movie.year}. {movie.synopsis}</p>
            </li>
          ))}
          {works.shows.map((show) => (
            <li key={show.slug} className="px-4 py-3">
              <Link to="/shows/$slug" params={{ slug: show.slug }} className="font-medium text-lagoon">
                {show.title}
              </Link>
              <p className="text-sm text-muted">Show · {show.channel}. {show.synopsis}</p>
            </li>
          ))}
        </ul>
        {works.dramas.length + works.movies.length + works.shows.length === 0 ? (
          <p className="mt-3 text-muted">No linked title yet. The profile above is the page.</p>
        ) : null}
      </article>
    </main>
  );
}

function WorkTitle({ work }: { work: WorkLine }) {
  if (!work.slug) return work.title;
  if (work.kind === "Drama") {
    return (
      <Link to="/dramas/$slug" params={{ slug: work.slug }} className="text-lagoon">
        {work.title}
      </Link>
    );
  }
  if (work.kind === "Show") {
    return (
      <Link to="/shows/$slug" params={{ slug: work.slug }} className="text-lagoon">
        {work.title}
      </Link>
    );
  }
  return (
    <Link to="/movies/$slug" params={{ slug: work.slug }} className="text-lagoon">
      {work.title}
    </Link>
  );
}
