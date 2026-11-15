import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryDetail } from "@/components/entry-detail";
import { getProject, projects } from "@/content/projects";

// Every real slug is prerendered by generateStaticParams, so navigations to them are already
// instant. Only unknown slugs block, and they should block to return a proper 404.
export const instant = false;

export function generateStaticParams() {
  return projects.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const entry = getProject((await params).slug);
  return entry ? { title: entry.title, description: entry.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const entry = getProject((await params).slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      back={{ href: "/projects", label: "All projects" }}
      title={entry.title}
      meta={[entry.period]}
      summary={entry.summary}
      highlights={entry.highlights}
      tech={entry.tech}
      sections={entry.sections}
      links={entry.links}
    />
  );
}
