"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden justify-center lg:flex" aria-label="Primary navigation">
      <ul className="flex items-center gap-1">
        {primaryNavigation.map((item) => {
          const isCurrent = isCurrentPath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                className={cn(
                  "relative inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-semibold text-slate transition duration-200 after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-pill after:bg-teal after:transition-transform after:duration-200 hover:bg-muted-bg hover:text-charcoal hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                  isCurrent && "bg-muted-bg text-charcoal after:scale-x-100"
                )}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
