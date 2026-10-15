export const SITE_NAME = "ShowBuzz";
export const SITE_URL = "https://showbuzz.net";
export const UPDATED_LABEL = "15 October 2026";
export const UPDATED_ISO = "2026-10-15";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords: string;
}) {
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "keywords", content: opts.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "ShowBuzz Desk" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${opts.path}` }],
  };
}

export function absUrl(path: string) {
  return `${SITE_URL}${path}`;
}
