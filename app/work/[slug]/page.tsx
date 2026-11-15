import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/entry-detail";
import { getWork, work } from "@/content/work";

// Every real slug is prerendered by generateStaticParams, so navigations to them are already
// instant. Only unknown slugs block, and they should block to return a proper 404.
export const instant = false;

export function generateStaticParams() {
  return work.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const entry = getWork((await params).slug);
  return entry ? { title: entry.company, description: entry.summary } : {};
}

export default async function WorkEntryPage({ params }: PageProps<"/work/[slug]">) {
  const entry = getWork((await params).slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      back={{ href: "/work", label: "All work" }}
      title={entry.company}
      meta={[entry.role, entry.period, entry.location]}
      summary={entry.summary}
      highlights={entry.highlights}
      tech={entry.tech}
      sections={entry.sections}
      links={entry.links}
    />
  );
}
