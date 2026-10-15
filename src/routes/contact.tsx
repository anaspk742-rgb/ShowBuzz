import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageMeta({
      title: "Contact ShowBuzz",
      path: "/contact",
      description:
        "Write to the ShowBuzz desk. A public email address will be added later. Until then your note stays on this device.",
      keywords: "ShowBuzz contact, contact Pakistani drama website",
    }),
});

function Contact() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="mx-auto max-w-xl px-4 py-8">
      <h1 className="font-display text-4xl sm:text-5xl">Contact</h1>
      <p className="mt-3 text-muted">
        A public email address is not connected yet. It will be added on this page later. Until then you can
        draft a note here. It is saved only in this browser, not sent to a server.
      </p>
      <form
        className="mt-6 space-y-4 rounded-card border border-line bg-paper p-5"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const note = {
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            message: String(data.get("message") ?? ""),
            savedAt: new Date().toISOString(),
          };
          localStorage.setItem("showbuzz-contact-draft", JSON.stringify(note));
          setSaved(true);
        }}
      >
        <label className="block text-sm font-semibold" htmlFor="name">
          Name
          <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-line bg-mist px-3 py-3 text-base" />
        </label>
        <label className="block text-sm font-semibold" htmlFor="email">
          Email
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-line bg-mist px-3 py-3 text-base" />
        </label>
        <label className="block text-sm font-semibold" htmlFor="message">
          Message
          <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-xl border border-line bg-mist px-3 py-3 text-base" />
        </label>
        <button type="submit" className="min-h-11 rounded-full bg-lagoon px-5 font-semibold text-lagoon-ink">
          Save on this device
        </button>
        {saved ? (
          <p className="text-sm text-lagoon" role="status">
            Saved in this browser. Nothing was emailed. When the mailbox is live, this form will send for real.
          </p>
        ) : null}
      </form>
    </main>
  );
}
