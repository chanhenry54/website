export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400">
        <span>Henry Chan</span>
        <a
          href="https://github.com/chanhenry54"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
