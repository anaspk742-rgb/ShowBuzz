import { createFileRoute } from "@tanstack/react-router";
import { UPDATED_LABEL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () =>
    pageMeta({
      title: "Privacy policy | ShowBuzz",
      path: "/privacy",
      description:
        "ShowBuzz privacy policy. No accounts. The contact form stays in your browser until an email address is added. Updated 15 October 2026.",
      keywords: "ShowBuzz privacy policy, privacy",
    }),
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="font-display text-4xl sm:text-5xl">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted">Updated {UPDATED_LABEL}</p>
      <div className="mt-5 space-y-4 leading-relaxed">
        <p>
          ShowBuzz does not ask you to create an account. Reading dramas, films, shows, celebrity pages and
          news does not require your name or email.
        </p>
        <p>
          The contact form stores what you type in local storage on your own device, under the key
          “showbuzz-contact-draft”. It is not uploaded. You can clear it by clearing this site’s data in your
          browser. When a public email address is added later, this policy will be updated before any message
          is sent off the device.
        </p>
        <p>
          ShowBuzz does not sell personal information. There is no advertising profile on this site. Pages are
          written so a search engine can index the guide. That indexing is of the articles, not of you.
        </p>
        <p>
          Photographs of public figures are included only under a free licence. Each picture names the
          photographer or agency, the licence, and the source page. If you are a rights holder and a credit is
          wrong, use the contact page and keep a copy of your note. We will correct the page.
        </p>
        <p>
          ShowBuzz is not affiliated with the actors, channels or studios named in the guide. Names are used
          to identify publicly released work.
        </p>
      </div>
    </main>
  );
}
