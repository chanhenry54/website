import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Companies Henry Chan has worked at.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Where I&apos;ve worked.</p>
      </header>
      <EntryList
        items={work.map((entry) => ({
          href: `/work/${entry.slug}`,
          title: entry.company,
          subtitle: entry.role,
          period: entry.period,
          summary: entry.summary,
        }))}
      />
    </div>
  );
}
