import Link from "next/link";
import { Suspense } from "react";
import { NavLinks, NavLinksFallback } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5"
      >
        <Link href="/" className="font-semibold tracking-tight">
          Henry Chan
        </Link>
        {/* usePathname suspends on routes whose params aren't known at build time. */}
        <Suspense fallback={<NavLinksFallback />}>
          <NavLinks />
        </Suspense>
      </nav>
    </header>
  );
}
