"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
];

const base = "transition-colors hover:text-foreground";

/** Nav links with the current section highlighted. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6 text-sm font-medium">
      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`${base} ${active ? "text-foreground" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Same links without highlighting, shown while the pathname is unknown during prerendering. */
export function NavLinksFallback() {
  return (
    <ul className="flex gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={`${base} text-zinc-500 dark:text-zinc-400`}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
