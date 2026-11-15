import type { WorkEntry } from "./types";

// Listed in the order shown on /work (most recent first).
// TODO: replace the placeholder text below with real details.
export const work: WorkEntry[] = [
  {
    slug: "niantic",
    company: "Niantic / Niantic Spatial",
    role: "TODO: Role title",
    period: "TODO: Start – End",
    location: "TODO: City or Remote",
    summary: "TODO: One or two sentences on what you worked on at Niantic.",
    highlights: [
      "TODO: Key accomplishment",
      "TODO: Key accomplishment",
    ],
    tech: ["TODO"],
    sections: [
      {
        heading: "Overview",
        paragraphs: ["TODO: The team, the product and your role on it."],
      },
      {
        heading: "What I built",
        paragraphs: ["TODO: Projects you led or contributed to, and their impact."],
      },
    ],
  },
  {
    slug: "mongodb",
    company: "MongoDB",
    role: "TODO: Role title",
    period: "TODO: Start – End",
    location: "TODO: City or Remote",
    summary: "TODO: One or two sentences on what you worked on at MongoDB.",
    highlights: [
      "TODO: Key accomplishment",
      "TODO: Key accomplishment",
    ],
    tech: ["TODO"],
    sections: [
      {
        heading: "Overview",
        paragraphs: ["TODO: The team, the product and your role on it."],
      },
      {
        heading: "What I built",
        paragraphs: ["TODO: Projects you led or contributed to, and their impact."],
      },
    ],
  },
];

export function getWork(slug: string): WorkEntry | undefined {
  return work.find((entry) => entry.slug === slug);
}
