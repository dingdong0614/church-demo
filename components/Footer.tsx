import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg">{SITE_CONFIG.name}</p>
          <p className="mt-3 text-sm text-text-muted">{SITE_CONFIG.addressFull}</p>
          <p className="mt-1 text-sm text-text-muted">
            {SITE_CONFIG.contact.phone} · {SITE_CONFIG.contact.email}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 text-xs tracking-[0.14em] text-text-faint">SITE</p>
          <Link href="/about" className="text-text-muted hover:text-text">
            교회소개
          </Link>
          <Link href="/visit" className="text-text-muted hover:text-text">
            처음 오셨나요
          </Link>
          <Link href="/contact" className="text-text-muted hover:text-text">
            문의
          </Link>
          <Link href="/privacy" className="text-text-muted hover:text-text">
            개인정보처리방침
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 text-xs tracking-[0.14em] text-text-faint">CHANNEL</p>
          <a href={SITE_CONFIG.sns.instagramUrl} target="_blank" rel="noopener" className="text-text-muted hover:text-text">
            Instagram
          </a>
          <a href={SITE_CONFIG.sns.youtubeUrl} target="_blank" rel="noopener" className="text-text-muted hover:text-text">
            YouTube
          </a>
          <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener" className="text-text-muted hover:text-text">
            네이버 지도
          </a>
        </div>
      </div>
      <div className="wrap border-t border-line py-5 text-xs text-text-faint">
        &copy; {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
