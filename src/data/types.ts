export type PhotoCredit = {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
};

export type CastCredit = {
  name: string;
  role?: string;
  slug?: string;
};

export type Beat = {
  label: string;
  detail: string;
};

export type DramaStatus = "on-air" | "ended" | "upcoming" | "listed";

export type Drama = {
  slug: string;
  title: string;
  urdu?: string;
  year: string;
  status: DramaStatus;
  channel: string;
  genres: string[];
  schedule?: string;
  premiere?: string;
  finished?: string;
  episodeCount?: string;
  writer?: string;
  director?: string;
  producer?: string;
  cast: CastCredit[];
  synopsis: string;
  beats: Beat[];
  note?: string;
  verified: string;
  keywords: string;
  description: string;
};

export type MovieStatus = "in-theatres" | "upcoming" | "classic";

export type Movie = {
  slug: string;
  title: string;
  year: string;
  status: MovieStatus;
  language: string;
  genres: string[];
  release: string;
  director?: string;
  writer?: string;
  cast: CastCredit[];
  synopsis: string;
  verified: string;
  keywords: string;
  description: string;
};

export type Show = {
  slug: string;
  title: string;
  status: "on-air" | "ended" | "finale";
  channel: string;
  kind: string;
  schedule?: string;
  host?: string;
  synopsis: string;
  beats: Beat[];
  verified: string;
  keywords: string;
  description: string;
};

export type Person = {
  slug: string;
  name: string;
  urdu?: string;
  country: "Pakistan" | "India";
  roles: string;
  born?: string;
  photo?: PhotoCredit;
  gallery?: PhotoCredit[];
  bio: string;
  knownFor: string[];
  keywords: string;
  description: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  iso: string;
  kicker: string;
  summary: string;
  body: string[];
  keywords: string;
  description: string;
};
