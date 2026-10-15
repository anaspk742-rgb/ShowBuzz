import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageMeta({
      title: "About ShowBuzz | Pakistani dramas and Bollywood films",
      path: "/about",
      description:
        "What ShowBuzz covers, how the 15 October 2026 update was checked, and why some credits are left blank on purpose.",
      keywords: "ShowBuzz, about ShowBuzz, Pakistani drama guide, Bollywood guide",
    }),
});

function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="font-display text-4xl sm:text-5xl">About ShowBuzz</h1>
      <div className="mt-5 space-y-4 text-base leading-relaxed">
        <p>
          ShowBuzz is an independent guide to Pakistani dramas and shows, and to Indian films, especially Hindi
          cinema. It is not a channel, not a studio, and not a place to watch episodes. If you want tonight’s
          telecast, use HUM, ARY, Geo, Green or the cinema near you.
        </p>
        <p>
          The desk date on this edition is 15 October 2026. On-air dramas were checked against channel uploads
          and schedule tables current that week. Films opening from mid-October through December were checked
          against calendars published on 1 October and 11 October 2026. Where two reports disagreed, the page
          says so.
        </p>
        <p>
          A blank writer or cast line is a choice. Several fan sites were already contradicting each other.
          ShowBuzz would rather leave a credit empty than print the wrong person.
        </p>
        <p>
          The top 20 lists are an editorial ranking of work that has lasted. They are not this week’s ratings
          and they are not a box-office table.
        </p>
        <p>
          Photographs appear only when a free licence allows it. The owner, the licence and the source are on
          the same page as the picture. Everyone else gets a monogram. That is deliberate, so a search
          console review is not looking at unlicensed celebrity photos.
        </p>
        <p>
          The name to remember is ShowBuzz. The intended address is showbuzz.net. A public contact email will
          be added on the contact page when the mailbox is ready.
        </p>
      </div>
    </main>
  );
}
