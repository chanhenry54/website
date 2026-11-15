import Link from "next/link";
import type { Link as EntryLink, Section } from "@/content/types";

type EntryDetailProps = {
  back: { href: string; label: string };
  title: string;
  /** Lines shown under the title, e.g. role and location. Empty values are skipped. */
  meta: (string | undefined)[];
  summary: string;
  highlights: string[];
  tech: string[];
  sections: Section[];
  links?: EntryLink[];
};

/** Layout for a single work or project page. */
export function EntryDetail({
  back,
  title,
  meta,
  summary,
  highlights,
  tech,
  sections,
  links,
}: EntryDetailProps) {
  return (
    <article className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Link
          href={back.href}
          className="text-sm text-zinc-500 hover:text-foreground dark:text-zinc-400"
        >
          ← {back.label}
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {meta.filter(Boolean).join(" · ")}
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{summary}</p>
        {links && links.length > 0 && (
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {highlights.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-zinc-700 dark:text-zinc-300">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-7 text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {tech.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Tech</h2>
          <ul className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
