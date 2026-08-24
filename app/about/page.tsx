import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "교회소개",
  description: `${SITE_CONFIG.name} 소개, 담임목사 인사말, 걸어온 길을 소개합니다.`,
};

const TIMELINE = [
  { year: "2015", event: "일곱 가정이 모여 가정 예배로 시작" },
  { year: "2018", event: "성산동 현재 예배당으로 이전" },
  { year: "2021", event: "새가족부·구역 공동체 체계 정비" },
  { year: "2026", event: "출석 성도 200명, 지역 나눔 사역 확대" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="교회소개"
        title="숫자보다 이름을 세는 교회"
        desc={`${SITE_CONFIG.name}가 걸어온 길과 지금 지향하는 방향을 소개합니다.`}
      />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1706109576976-361ba78dcb56?auto=format&fit=crop&w=1000&q=80"
                alt="예배당 창가에 서 있는 담임목사"
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.14em] text-accent-strong">담임목사 인사말</p>
            <div className="mt-5 space-y-4 text-text-muted leading-relaxed">
              <p>
                안녕하세요, {SITE_CONFIG.name} 담임 {SITE_CONFIG.pastorName}입니다. 저희 교회는 작습니다.
                하지만 작다는 것은 서로의 이름과 사정을 알 수 있다는 뜻이기도 합니다.
              </p>
              <p>
                누군가는 지쳐서, 누군가는 오랜만에, 누군가는 태어나 처음으로 예배당 문을 엽니다. 그
                모든 걸음을 저희는 판단하지 않고 환영합니다. 완벽한 신앙을 요구하지 않습니다 — 정직한
                질문과 걸음이면 충분합니다.
              </p>
              <p>당신의 자리를 비워두고 기다리겠습니다.</p>
            </div>
            <p className="mt-6 font-display text-lg text-text">{SITE_CONFIG.pastorName}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">걸어온 길</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">작게 시작해, 꾸준히 걸어온 시간</h2>
          </RevealOnScroll>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {TIMELINE.map((t, i) => (
              <RevealOnScroll key={t.year} delay={i * 0.06}>
                <div className="flex items-baseline gap-6 py-5">
                  <span className="w-16 shrink-0 font-display text-lg text-accent-strong">{t.year}</span>
                  <span className="text-text-muted">{t.event}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
