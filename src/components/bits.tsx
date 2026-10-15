import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Drama, DramaStatus, Movie, MovieStatus, Person, PhotoCredit } from "@/data/types";

const DRAMA_LABEL: Record<DramaStatus, string> = {
  "on-air": "On air",
  ended: "Ended",
  upcoming: "Upcoming",
  listed: "2026 title",
};

const MOVIE_LABEL: Record<MovieStatus, string> = {
  "in-theatres": "In theatres",
  upcoming: "Upcoming",
  classic: "Classic",
};

export function StatusPill({ status }: { status: DramaStatus | MovieStatus | string }) {
  const label =
    status in DRAMA_LABEL
      ? DRAMA_LABEL[status as DramaStatus]
      : status in MOVIE_LABEL
        ? MOVIE_LABEL[status as MovieStatus]
        : status;
  const live = status === "on-air" || status === "in-theatres" || status === "finale";
  return (
    <span
      className={
        live
          ? "inline-flex rounded-full bg-clay px-2.5 py-1 text-xs font-semibold text-clay-ink"
          : "inline-flex rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-lagoon"
      }
    >
      {label}
    </span>
  );
}

export function Credit({ photo }: { photo: PhotoCredit }) {
  return (
    <figcaption className="mt-2 text-xs leading-relaxed text-muted">
      Photograph: {photo.author}. Licence:{" "}
      <a className="underline" href={photo.licenseUrl} rel="license noopener noreferrer">
        {photo.license}
      </a>
      . Source:{" "}
      <a className="underline" href={photo.sourceUrl} rel="noopener noreferrer">
        {photo.sourceName}
      </a>
      . {photo.note}
    </figcaption>
  );
}

export function Portrait({ person, large = false }: { person: Person; large?: boolean }) {
  if (!person.photo) {
    const initials = person.name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("");
    return (
      <div>
        <div
          className={
            large
              ? "flex aspect-[4/5] items-end rounded-2xl bg-lagoon p-5 text-lagoon-ink"
              : "flex aspect-square items-end rounded-2xl bg-lagoon p-4 text-lagoon-ink"
          }
          aria-hidden="true"
        >
          <span className="font-display text-5xl">{initials}</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          No freely licensed photograph is on file. ShowBuzz does not publish unlicensed celebrity photos.
        </p>
      </div>
    );
  }
  return (
    <figure>
      <img
        src={person.photo.src}
        alt={person.photo.alt}
        width={large ? 640 : 400}
        height={large ? 800 : 400}
        loading={large ? "eager" : "lazy"}
        decoding="async"
        className={
          large
            ? "aspect-[4/5] w-full rounded-2xl object-cover object-top"
            : "aspect-square w-full rounded-2xl object-cover object-top"
        }
      />
      <Credit photo={person.photo} />
    </figure>
  );
}

const PALETTES: [string, string, string][] = [
  ["#082f3d", "#0e7490", "#e7c98a"],
  ["#12243f", "#3d6f8f", "#f3ddb0"],
  ["#2a1c33", "#6d4c6a", "#f0d2b0"],
  ["#102e28", "#1f6f5b", "#ead7a6"],
  ["#1a2438", "#4a6280", "#f6e7c8"],
  ["#3a241c", "#8a5340", "#f3d7b4"],
  ["#0f2c3a", "#2a6f88", "#d5e6ef"],
  ["#241c38", "#4c5d8a", "#e4d4f0"],
];

function bannerHue(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const PHOTO_BANNERS = new Set([
  "hurmat",
  "zehar-e-mohabbat",
  "bombay-tailors",
  "khushi",
  "tark-e-tamanna",
  "mohabbat-mukhtasir",
  "gulbahar",
  "kaisa-yeh-ishq",
  "uswah",
  "khafa",
  "nashtar",
  "mohabbat-geo",
  "dar-e-nijaat",
  "rutba",
  "mitti-de-baway",
  "hey-fam",
  "nizaam",
  "humsafar",
  "zindagi-gulzar-hai",
  "yaqeen-ka-safar",
  "tere-bin",
  "parizaad",
  "ishq-murshid",
  "kabhi-main-kabhi-tum",
  "kaisi-teri-khudgarzi",
  "cheekh",
  "dastaan",
  "drishyam-the-conclusion",
  "prahaar",
  "nayyi-navelli",
  "udta-teer",
  "tu-hai-meri-kiran",
  "little-thomas",
  "sholay",
  "dilwale-dulhania-le-jayenge",
  "3-idiots",
  "pathaan",
  "dangal",
]);

export function TitleBanner({ seed, className = "" }: { seed: string; className?: string }) {
  if (PHOTO_BANNERS.has(seed)) {
    return (
      <img
        src={`/media/banners/${seed}.jpg`}
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className={`${className} object-cover`}
      />
    );
  }
  const hue = bannerHue(seed);
  const [deep, mid, gold] = PALETTES[hue % PALETTES.length];
  const id = `ban-${seed.replace(/[^a-z0-9-]/gi, "")}`;
  const motif = hue % 3;
  return (
    <svg viewBox="0 0 800 280" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={deep} />
          <stop offset="100%" stopColor={mid} />
        </linearGradient>
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="35%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#041820" stopOpacity="0.62" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill={`url(#${id})`} />
      <circle cx={90 + (hue % 160)} cy="20" r="150" fill={gold} opacity="0.2" />
      <circle cx="690" cy="240" r="170" fill="#fff" opacity="0.07" />
      {motif === 0 ? (
        <path d="M36 230 C200 70 360 70 520 230" fill="none" stroke={gold} strokeWidth="1.6" opacity="0.75" />
      ) : null}
      {motif === 1 ? (
        <>
          <rect x="500" y="-30" width="240" height="340" transform="rotate(16 620 140)" fill="#fff" opacity="0.06" />
          <rect x="48" y="36" width="86" height="128" rx="43" fill="none" stroke={gold} strokeWidth="1.4" opacity="0.6" />
        </>
      ) : null}
      {motif === 2
        ? Array.from({ length: 9 }, (_, i) => (
            <circle key={i} cx={36 + i * 26} cy="26" r="3.5" fill={gold} opacity="0.8" />
          ))
        : null}
      <rect width="800" height="280" fill={`url(#${id}-shade)`} />
      <rect y="274" width="800" height="6" fill={gold} />
    </svg>
  );
}

export function DramaCard({ drama }: { drama: Drama }) {
  const names = drama.cast
    .slice(0, 3)
    .map((credit) => credit.name)
    .join(" · ");
  return (
    <Link
      to="/dramas/$slug"
      params={{ slug: drama.slug }}
      className="group overflow-hidden rounded-card border border-line bg-paper shadow-sm transition hover:-translate-y-0.5 hover:border-lagoon hover:shadow-md"
    >
      <div className="relative h-44">
        <TitleBanner seed={drama.slug} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/85 via-[#041820]/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white/80">
            {drama.channel} · {drama.year}
          </p>
          <h3 className="font-display text-3xl leading-none">{drama.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill status={drama.status} />
          <span className="text-xs text-muted">{drama.genres[0]}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted">{drama.synopsis}</p>
        {names ? <p className="mt-2 truncate text-sm">{names}</p> : null}
      </div>
    </Link>
  );
}

export function MovieCard({ movie }: { movie: Movie }) {
  const names = movie.cast
    .slice(0, 3)
    .map((credit) => credit.name)
    .join(" · ");
  return (
    <Link
      to="/movies/$slug"
      params={{ slug: movie.slug }}
      className="group overflow-hidden rounded-card border border-line bg-paper shadow-sm transition hover:-translate-y-0.5 hover:border-lagoon hover:shadow-md"
    >
      <div className="relative h-44">
        <TitleBanner seed={movie.slug} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041820]/85 via-[#041820]/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white/80">
            {movie.language} · {movie.year}
          </p>
          <h3 className="font-display text-3xl leading-none">{movie.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <StatusPill status={movie.status} />
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted">{movie.synopsis}</p>
        {names ? <p className="mt-2 truncate text-sm">{names}</p> : null}
      </div>
    </Link>
  );
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <Link
      to="/celebrities/$slug"
      params={{ slug: person.slug }}
      className="overflow-hidden rounded-card border border-line bg-paper p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-lagoon hover:shadow-md"
    >
      <Portrait person={person} />
      <h3 className="mt-3 font-display text-xl">{person.name}</h3>
      <p className="text-sm text-muted">
        {person.country} · {person.roles}
      </p>
    </Link>
  );
}

export function SectionTitle({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-widest text-lagoon uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-3 text-muted">{lede}</p> : null}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-base leading-relaxed text-ink">{children}</div>;
}
