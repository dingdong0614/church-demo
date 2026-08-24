import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "처음 오셨나요",
  description: `${SITE_CONFIG.name} 예배 시간, 오시는 길, 새가족 안내 절차를 확인하세요.`,
};

const STEPS = [
  { step: "1", title: "예배 시간에 맞춰 방문", desc: "등록 절차 없이 편하게 예배부터 드리셔도 좋습니다." },
  { step: "2", title: "안내데스크에서 환영", desc: "새가족부 봉사자가 자리 안내와 간단한 소개를 도와드립니다." },
  { step: "3", title: "새가족 모임 (선택)", desc: "원하시면 다음 주부터 4주 과정의 새가족 모임에 참여하실 수 있습니다." },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        crumb="처음 오셨나요"
        title="방문에 필요한 모든 정보"
        desc="예배 시간, 오시는 길, 새가족 안내까지 한 번에 확인하세요."
      />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">예배 시간</p>
            <ul className="mt-5 divide-y divide-line border-t border-b border-line">
              {SITE_CONFIG.hours.map((h) => (
                <li key={h.label} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-text-muted">{h.label}</span>
                  <span className="font-display text-lg">{h.time}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-xs tracking-[0.14em] text-accent-strong">오시는 길</p>
            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565571008567-59a4987d6646?auto=format&fit=crop&w=1200&q=80"
                alt="따뜻한 빛이 드는 예배당 좌석"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-text-muted">{SITE_CONFIG.addressFull}</p>
            <p className="mt-1 text-sm text-text-faint">{SITE_CONFIG.addressShort}</p>
            <a
              href={SITE_CONFIG.naverMapUrl}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              네이버 지도로 길찾기 <span aria-hidden>→</span>
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">새가족 안내</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">처음이라 어색해도 괜찮습니다</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 0.08}>
                <div className="h-full border border-line-strong bg-surface p-7">
                  <span className="font-display text-3xl text-accent-strong">{s.step}</span>
                  <p className="mt-4 font-display text-lg">{s.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
