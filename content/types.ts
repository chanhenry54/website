export type Link = {
  label: string;
  href: string;
};

/** A titled block of prose on a detail page. */
export type Section = {
  heading: string;
  paragraphs: string[];
};

/** Fields shared by work and project entries. */
type EntryBase = {
  /** URL segment, e.g. "mongodb" → /work/mongodb. Must be unique within its list. */
  slug: string;
  /** Free-form date range, e.g. "Jun 2023 – Present". */
  period: string;
  /** One or two sentences shown on the index page and under the title. */
  summary: string;
  /** Short bullet points of key accomplishments. */
  highlights: string[];
  /** Languages, frameworks and tools. */
  tech: string[];
  /** Longer write-up sections on the detail page. */
  sections: Section[];
  links?: Link[];
};

export type WorkEntry = EntryBase & {
  company: string;
  role: string;
  location?: string;
};

export type ProjectEntry = EntryBase & {
  title: string;
};
