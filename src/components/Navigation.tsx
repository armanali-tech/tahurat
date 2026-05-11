"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/context", label: "Context" },
  { href: "/inquiry", label: "Inquiry" },
  { href: "/evidence", label: "Evidence" },
  { href: "/journey", label: "Journey" },
  { href: "/impact", label: "Impact" },
  { href: "/references", label: "References" },
  { href: "/ethics", label: "Ethics" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto max-w-[1120px] px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold gradient-text tracking-wide">
            Tahurat Jahan
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="hidden lg:flex gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                  pathname === l.href
                    ? "bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-50 border-t border-white/5 px-4 pb-3 bg-slate-900/95 backdrop-blur-md shadow-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-sm transition-all ${
                pathname === l.href
                  ? "bg-indigo-500/20 text-indigo-300 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
