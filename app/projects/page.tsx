import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Henry Chan has worked on.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Things I&apos;ve built.</p>
      </header>
      <EntryList
        items={projects.map((entry) => ({
          href: `/projects/${entry.slug}`,
          title: entry.title,
          period: entry.period,
          summary: entry.summary,
        }))}
      />
    </div>
  );
}
