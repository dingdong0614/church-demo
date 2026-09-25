import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";
import MotionToggle from "@/components/MotionToggle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-night bg-night text-cream">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">{SITE_CONFIG.name}</p>
          <p className="mt-2 text-[15px] text-cream-muted">{SITE_CONFIG.slogan}</p>
          <address className="mt-6 space-y-1 text-[15px] not-italic text-cream-muted">
            <p>{SITE_CONFIG.addressFull}</p>
            <p>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-white">
                {SITE_CONFIG.contact.phone}
              </a>
              <span aria-hidden> · </span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">
                {SITE_CONFIG.contact.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="하단 메뉴" className="flex flex-col text-[15px]">
          <p className="mb-2 text-[13px] font-semibold tracking-[0.12em] text-cream-muted">둘러보기</p>
          {[
            { href: "/visit", label: "처음 오셨나요" },
            { href: "/about", label: "교회소개" },
            { href: "/contact", label: "문의" },
            { href: "/privacy", label: "개인정보처리방침" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex min-h-11 items-center text-cream hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col text-[15px]">
          <p className="mb-2 text-[13px] font-semibold tracking-[0.12em] text-cream-muted">채널</p>
          <a href={SITE_CONFIG.sns.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">
            유튜브 설교 채널
          </a>
          <a href={SITE_CONFIG.sns.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">
            인스타그램
          </a>
          <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">
            네이버 지도
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-5 text-[14px] text-cream-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.name}. 이 사이트는 doion의 교회 웹사이트 시연용 데모이며, 모든 정보는 가상입니다. 사진: Unsplash
          </p>
          <div className="[&_button]:text-cream-muted [&_button:hover]:text-white">
            <MotionToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
