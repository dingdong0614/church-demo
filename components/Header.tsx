"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/site";

const NAV_LINKS = [
  { href: "/about", label: "교회소개" },
  { href: "/visit", label: "처음 오셨나요" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-colors ${
        scrolled ? "border-line bg-bg/90 backdrop-blur-md" : "border-transparent bg-bg/60 backdrop-blur-sm"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong font-display text-sm text-accent-strong">
            다
          </span>
          <span className="font-display text-lg tracking-wide">{SITE_CONFIG.name}</span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:flex items-center gap-8 text-[15px] text-text-muted">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors ${
                  isActive ? "text-accent-strong" : "hover:text-text"
                }`}
              >
                {link.label}
                {isActive && <span className="absolute -bottom-px left-0 right-0 h-px bg-accent-strong" />}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/visit"
          className="hidden md:inline-block bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          예배 시간 안내
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-9 w-9 shrink-0"
        >
          <span className="sr-only">메뉴 열기</span>
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-text transition-transform ${
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-text transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-text transition-transform ${
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <nav
        id="mobileNav"
        aria-label="모바일 메뉴"
        className={`md:hidden overflow-hidden border-t border-line bg-bg transition-[max-height] duration-300 ${
          open ? "max-h-[320px]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="wrap flex flex-col gap-1 py-4 text-[15px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2.5 ${pathname === link.href ? "text-accent-strong" : "text-text-muted"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/visit" className="mt-2 bg-accent py-2.5 text-center text-sm font-semibold text-white">
            예배 시간 안내
          </Link>
        </div>
      </nav>
    </header>
  );
}
