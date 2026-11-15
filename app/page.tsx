const links = [
  { label: "GitHub", href: "https://github.com/chanhenry54" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-8 px-6 py-24">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Henry Chan</h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to my website. More coming soon.
        </p>
      </header>

      <nav aria-label="Elsewhere">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
