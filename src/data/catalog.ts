import { DRAMAS, TOP_DRAMA_SLUGS, getDrama } from "./dramas";
import { MOVIES as BASE_MOVIES, TOP_MOVIE_SLUGS } from "./movies";
import { MORE_MOVIES } from "./more-movies";
import { NEWS, getNews } from "./news";
import { PEOPLE, getPerson } from "./people";
import { SHOWS, getShow } from "./shows";
import type { Drama, Movie, NewsItem, Person, Show } from "./types";

export const MOVIES: Movie[] = [...BASE_MOVIES, ...MORE_MOVIES];

export function getMovie(slug: string) {
  return MOVIES.find((movie) => movie.slug === slug);
}

export { DRAMAS, SHOWS, PEOPLE, NEWS, TOP_DRAMA_SLUGS, TOP_MOVIE_SLUGS, getDrama, getShow, getPerson, getNews };

export function topDramas(): Drama[] {
  return TOP_DRAMA_SLUGS.map((slug) => getDrama(slug)).filter((item): item is Drama => Boolean(item));
}

export function topMovies(): Movie[] {
  return TOP_MOVIE_SLUGS.map((slug) => getMovie(slug)).filter((item): item is Movie => Boolean(item));
}

export function worksFor(slug: string): { dramas: Drama[]; movies: Movie[]; shows: Show[] } {
  return {
    dramas: DRAMAS.filter((drama) => drama.cast.some((credit) => credit.slug === slug)),
    movies: MOVIES.filter((movie) => movie.cast.some((credit) => credit.slug === slug)),
    shows: SHOWS.filter((show) => show.host?.toLowerCase().includes(getPerson(slug)?.name.split(" ")[0].toLowerCase() ?? "___")),
  };
}

export type SearchHit = {
  href: string;
  kind: string;
  title: string;
  detail: string;
};

export function searchAll(raw: string): SearchHit[] {
  const q = raw.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];
  const has = (...parts: Array<string | undefined>) => parts.filter(Boolean).join(" ").toLowerCase().includes(q);

  for (const drama of DRAMAS) {
    if (has(drama.title, drama.urdu, drama.channel, drama.writer, drama.director, ...drama.cast.map((c) => c.name))) {
      hits.push({ href: `/dramas/${drama.slug}`, kind: "Drama", title: drama.title, detail: `${drama.channel} · ${drama.year}` });
    }
  }
  for (const movie of MOVIES) {
    if (has(movie.title, movie.director, movie.language, ...movie.cast.map((c) => c.name))) {
      hits.push({ href: `/movies/${movie.slug}`, kind: "Movie", title: movie.title, detail: `${movie.language} · ${movie.year}` });
    }
  }
  for (const show of SHOWS) {
    if (has(show.title, show.channel, show.host, show.kind)) {
      hits.push({ href: `/shows/${show.slug}`, kind: "Show", title: show.title, detail: show.channel });
    }
  }
  for (const person of PEOPLE) {
    if (has(person.name, person.urdu, person.country, person.bio)) {
      hits.push({ href: `/celebrities/${person.slug}`, kind: "Celebrity", title: person.name, detail: person.country });
    }
  }
  for (const item of NEWS) {
    if (has(item.title, item.summary, item.kicker)) {
      hits.push({ href: `/news/${item.slug}`, kind: "News", title: item.title, detail: item.date });
    }
  }
  return hits;
}

export function allPaths(): string[] {
  return [
    "/",
    "/dramas",
    "/movies",
    "/shows",
    "/celebrities",
    "/news",
    "/about",
    "/contact",
    "/privacy",
    "/search",
    "/best-pakistani-dramas",
    "/best-bollywood-movies",
    ...DRAMAS.map((item) => `/dramas/${item.slug}`),
    ...MOVIES.map((item) => `/movies/${item.slug}`),
    ...SHOWS.map((item) => `/shows/${item.slug}`),
    ...PEOPLE.map((item) => `/celebrities/${item.slug}`),
    ...NEWS.map((item) => `/news/${item.slug}`),
  ];
}

export type { Drama, Movie, Show, Person, NewsItem };
