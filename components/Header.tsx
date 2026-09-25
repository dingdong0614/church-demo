"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/site";
import Icon from "@/components/Icon";

const NAV_LINKS = [
  { href: "/visit", label: "처음 오셨나요" },
  { href: "/about", label: "교회소개" },
  { href: "/#sermon", label: "설교" },
  { href: "/#news", label: "주보·소식" },
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

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[100] border-b bg-bg transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-3" aria-label={`${SITE_CONFIG.name} 홈`}>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-[15px] text-white"
          >
            다
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[19px] font-semibold">{SITE_CONFIG.name}</span>
            <span className="text-[12px] tracking-[0.12em] text-text-faint">{SITE_CONFIG.nameEn.toUpperCase()}</span>
          </span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center px-3.5 text-[16px] transition-colors ${
                  isActive ? "font-semibold text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
                {isActive && <span className="absolute inset-x-3.5 bottom-1.5 h-[2px] bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/visit#times" className="btn btn-primary !min-h-11 !px-5 !text-[16px]">
            <Icon name="clock" size={18} />
            예배 시간
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-2 inline-flex h-12 min-w-12 items-center justify-center gap-2 px-2 text-[15px] font-semibold lg:hidden"
        >
          <span>{open ? "닫기" : "메뉴"}</span>
          <span aria-hidden className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 bg-text transition-transform ${
                open ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 bg-text transition-transform ${
                open ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobileNav"
        aria-label="모바일 메뉴"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <div className="wrap flex flex-col py-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`flex min-h-14 items-center justify-between border-b border-line text-[18px] ${
                pathname === link.href ? "font-semibold text-accent" : "text-text"
              }`}
            >
              {link.label}
              <Icon name="arrow" size={18} className="text-text-faint" />
            </Link>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3 pb-3">
            <Link href="/visit#times" onClick={() => setOpen(false)} className="btn btn-primary">
              예배 시간
            </Link>
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="btn btn-ghost">
              <Icon name="phone" size={18} />
              전화하기
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
