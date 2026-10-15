import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import type { ReactNode } from "react";
import { UPDATED_LABEL } from "@/lib/site";

const NAV = [
  { to: "/dramas", label: "Dramas" },
  { to: "/movies", label: "Movies" },
  { to: "/shows", label: "Shows" },
  { to: "/celebrities", label: "Celebrities" },
  { to: "/news", label: "Celebrity news" },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="min-w-0 shrink-0">
            <span className="block font-display text-2xl leading-none text-ink">ShowBuzz</span>
            <span className="block text-xs tracking-wide text-muted">Dramas & films</span>
          </Link>
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-paper"
                activeProps={{ className: "rounded-full bg-paper px-3 py-2 text-sm font-semibold text-lagoon" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form action="/search" className="ml-auto hidden min-w-0 flex-1 items-center gap-2 sm:flex sm:max-w-xs">
            <label htmlFor="site-search" className="sr-only">
              Search ShowBuzz
            </label>
            <input
              id="site-search"
              name="q"
              placeholder="Search a drama, film, star"
              className="w-full rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink placeholder:text-muted"
            />
            <button
              type="submit"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-lagoon text-lagoon-ink"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>
          </form>
          <details className="group relative ml-auto lg:hidden">
            <summary className="inline-flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-paper [&::-webkit-details-marker]:hidden">
              <Menu className="size-5 group-open:hidden" />
              <X className="hidden size-5 group-open:block" />
              <span className="sr-only">Menu</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,22rem)] rounded-card border border-line bg-paper p-3 shadow-lg">
              <form action="/search" className="mb-3 flex gap-2">
                <label htmlFor="mobile-search" className="sr-only">
                  Search ShowBuzz
                </label>
                <input
                  id="mobile-search"
                  name="q"
                  placeholder="Search"
                  className="w-full rounded-full border border-line bg-mist px-4 py-3 text-base text-ink"
                />
                <button type="submit" className="min-h-11 rounded-full bg-lagoon px-4 text-sm font-semibold text-lagoon-ink">
                  Search
                </button>
              </form>
              <div className="grid gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-xl px-3 py-3 text-base font-medium hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/about" className="rounded-xl px-3 py-3 text-base font-medium hover:bg-mist">About</Link>
                <Link to="/contact" className="rounded-xl px-3 py-3 text-base font-medium hover:bg-mist">Contact</Link>
              </div>
            </div>
          </details>
        </div>
      </header>
      <div id="content">{children}</div>
      <footer className="mt-16 border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">ShowBuzz</p>
            <p className="mt-2 text-sm text-muted">
              An independent guide to Pakistani dramas and shows, and to Indian films. Desk update{" "}
              {UPDATED_LABEL}.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-lagoon uppercase">Watch</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/dramas" className="hover:text-lagoon">All dramas</Link></li>
              <li><Link to="/movies" className="hover:text-lagoon">Movies</Link></li>
              <li><Link to="/shows" className="hover:text-lagoon">Shows</Link></li>
              <li><Link to="/best-pakistani-dramas" className="hover:text-lagoon">Top 20 dramas</Link></li>
              <li><Link to="/best-bollywood-movies" className="hover:text-lagoon">Top 20 movies</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-lagoon uppercase">People</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/celebrities" className="hover:text-lagoon">Celebrities</Link></li>
              <li><Link to="/news" className="hover:text-lagoon">Celebrity news</Link></li>
              <li><Link to="/search" search={{ q: "" }} className="hover:text-lagoon">Search</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-lagoon uppercase">House</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-lagoon">About</Link></li>
              <li><Link to="/contact" className="hover:text-lagoon">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-lagoon">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-line px-4 py-4 text-center text-xs text-muted">
          ShowBuzz is not affiliated with HUM, ARY, Geo, Green, Express, or any studio. Photographs are used
          only under a free licence, with the owner credited on the page.
        </p>
      </footer>
    </div>
  );
}
