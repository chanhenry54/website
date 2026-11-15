import type { ProjectEntry } from "./types";

// Listed in the order shown on /projects.
// TODO: replace these placeholders with your real projects (add or remove entries freely).
export const projects: ProjectEntry[] = [
  {
    slug: "project-one",
    title: "TODO: Project One",
    period: "TODO: Year",
    summary: "TODO: One or two sentences on what this project is.",
    highlights: ["TODO: What makes it interesting"],
    tech: ["TODO"],
    sections: [
      {
        heading: "Overview",
        paragraphs: ["TODO: The problem, your approach and the result."],
      },
    ],
    links: [{ label: "Source", href: "https://github.com/chanhenry54" }],
  },
  {
    slug: "project-two",
    title: "TODO: Project Two",
    period: "TODO: Year",
    summary: "TODO: One or two sentences on what this project is.",
    highlights: ["TODO: What makes it interesting"],
    tech: ["TODO"],
    sections: [
      {
        heading: "Overview",
        paragraphs: ["TODO: The problem, your approach and the result."],
      },
    ],
  },
];

export function getProject(slug: string): ProjectEntry | undefined {
  return projects.find((entry) => entry.slug === slug);
}
