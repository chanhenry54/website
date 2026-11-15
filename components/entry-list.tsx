import Link from "next/link";

export type EntryListItem = {
  href: string;
  title: string;
  subtitle?: string;
  period: string;
  summary: string;
};

/** A vertical list of linked cards, used by the /work and /projects index pages. */
export function EntryList({ items }: { items: EntryListItem[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group block rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold tracking-tight">
                {item.title}
                <span
                  aria-hidden
                  className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </h2>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</span>
            </div>
            {item.subtitle && (
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {item.subtitle}
              </p>
            )}
            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
