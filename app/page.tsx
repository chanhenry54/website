import Link from "next/link";
import { projects } from "@/content/projects";
import { work } from "@/content/work";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Henry Chan</h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          TODO: A short intro: what you do, what you&apos;re interested in.
        </p>
      </header>

      <HomeSection title="Work" href="/work" linkLabel="All work">
        {work.map((entry) => (
          <HomeRow
            key={entry.slug}
            href={`/work/${entry.slug}`}
            title={entry.company}
            detail={entry.role}
          />
        ))}
      </HomeSection>

      <HomeSection title="Projects" href="/projects" linkLabel="All projects">
        {projects.map((entry) => (
          <HomeRow
            key={entry.slug}
            href={`/projects/${entry.slug}`}
            title={entry.title}
            detail={entry.period}
          />
        ))}
      </HomeSection>
    </div>
  );
}

function HomeSection({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <Link
          href={href}
          className="text-sm text-zinc-500 hover:text-foreground dark:text-zinc-400"
        >
          {linkLabel} →
        </Link>
      </div>
      <ul className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {children}
      </ul>
    </section>
  );
}

function HomeRow({ href, title, detail }: { href: string; title: string; detail: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-baseline justify-between gap-4 py-3 hover:text-zinc-600 dark:hover:text-zinc-300"
      >
        <span className="font-medium">{title}</span>
        <span className="text-right text-sm text-zinc-500 dark:text-zinc-400">{detail}</span>
      </Link>
    </li>
  );
}
