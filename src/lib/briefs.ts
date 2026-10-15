import type { Drama, Movie, Person, Show } from "@/data/types";

const DRAMA_STATUS: Record<Drama["status"], string> = {
  "on-air": "on air",
  ended: "ended",
  upcoming: "not yet on air",
  listed: "listed among 2026 titles, without a confirmed current slot",
};

export function dramaFile(drama: Drama): string[] {
  const crew = [
    drama.writer ? `Written by ${drama.writer}.` : "",
    drama.director ? `Directed by ${drama.director}.` : "",
    drama.producer ? `Produced by ${drama.producer}.` : "",
  ].filter(Boolean);
  const when = [
    drama.premiere ? `Premiere: ${drama.premiere}.` : "",
    drama.finished ? `Last broadcast on record: ${drama.finished}.` : "",
    drama.schedule ? `Slot: ${drama.schedule}.` : "",
    drama.episodeCount ? `Episodes: ${drama.episodeCount}.` : "",
  ].filter(Boolean);
  const cast = drama.cast.map((credit) => (credit.role ? `${credit.name} as ${credit.role}` : credit.name));
  const paragraphs = [
    `${drama.title}${drama.urdu ? ` (${drama.urdu})` : ""} is a ${drama.year} Pakistani drama made for ${drama.channel}. On 15 October 2026 it is ${DRAMA_STATUS[drama.status]}. ${drama.genres.length ? `It is filed here as ${drama.genres.join(" and ").toLowerCase()}.` : ""}`.trim(),
  ];
  if (crew.length) paragraphs.push(crew.join(" "));
  if (when.length) paragraphs.push(when.join(" "));
  if (cast.length) paragraphs.push(`Cast on this page: ${cast.join("; ")}.`);
  paragraphs.push(drama.synopsis);
  if (drama.note) paragraphs.push(drama.note);
  return paragraphs;
}

export function movieFile(movie: Movie): string[] {
  const crew = [
    movie.director ? `Directed by ${movie.director}` : "",
    movie.writer ? `written by ${movie.writer}` : "",
  ].filter(Boolean);
  const cast = movie.cast.map((credit) => (credit.role ? `${credit.name} as ${credit.role}` : credit.name));
  return [
    `${movie.title} (${movie.year}) is a ${movie.language} film. Status on this guide: ${movie.status.replace("-", " ")}. Genres: ${movie.genres.join(", ")}.`,
    `${crew.join(", ")}${crew.length ? "." : ""} It was released ${movie.release}.`.replace(" .", "."),
    cast.length ? `Cast: ${cast.join("; ")}.` : "Cast was not confirmed for this page.",
    movie.synopsis,
  ];
}

export function showFile(show: Show): string[] {
  return [
    `${show.title} is a ${show.kind.toLowerCase()} on ${show.channel}. Status on 15 October 2026: ${show.status.replace("-", " ")}.`,
    [show.host ? `Host: ${show.host}.` : "", show.schedule ? `Schedule: ${show.schedule}` : ""].filter(Boolean).join(" "),
    show.synopsis,
  ].filter(Boolean);
}

export function personFile(person: Person): string[] {
  const lines = [person.bio];
  lines.push(
    `${person.name} is a ${person.country} ${person.roles.toLowerCase()}${person.born ? `, born ${person.born}` : ""}. ${
      person.knownFor.length ? `On ShowBuzz the work that defines the page is ${person.knownFor.join(", ")}.` : ""
    }`,
  );
  if (!person.photo) {
    lines.push(
      "There is no freely licensed photograph on this page. ShowBuzz does not use a studio still, a poster crop or a social-media photo unless the owner’s licence is on the file and the credit can sit under the picture.",
    );
  }
  return lines;
}
