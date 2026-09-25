import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import MinistryGrid from "@/components/MinistryGrid";
import ClosingCta from "@/components/ClosingCta";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";
import { PHOTOS, unsplash } from "@/data/photos";

export const metadata: Metadata = {
  title: "교회소개",
  description: `${SITE_CONFIG.name} 소개, 담임목사 인사말, 걸어온 길을 소개합니다.`,
  alternates: { canonical: "/about" },
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
        desc={`일곱 가정의 거실 예배에서 시작한 ${SITE_CONFIG.name} 이야기입니다.`}
        image={{ src: unsplash(PHOTOS.congregation.id, 2400), alt: PHOTOS.congregation.alt }}
        position="50% 40%"
      />

      {/* 인사말: 편지 형식 */}
      <section aria-labelledby="greeting-title" className="section bg-bg">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
          <RevealOnScroll className="lg:col-span-7">
            <p className="text-[15px] text-text-faint">담임목사 인사말</p>
            <h2 id="greeting-title" className="mt-3 text-[30px] leading-[1.4] md:text-[40px]">
              안녕하세요,
              <br />
              {SITE_CONFIG.pastorName}입니다
            </h2>
            <div className="mt-8 space-y-5 text-[18px] leading-[1.9] text-text-muted md:text-[19px]">
              <p>
                저희 교회는 작습니다. 하지만 작다는 것은 서로의 이름과 사정을 알 수 있다는 뜻이기도 합니다.
              </p>
              <p>
                누군가는 지쳐서, 누군가는 오랜만에, 누군가는 태어나 처음으로 예배당 문을 엽니다. 그 모든 걸음을 저희는
                판단하지 않고 환영합니다. 완벽한 신앙을 요구하지 않습니다. 정직한 질문과 걸음이면 충분합니다.
              </p>
              <p>당신의 자리를 비워두고 기다리겠습니다.</p>
            </div>
            <p className="mt-8 font-display text-[22px] font-semibold text-text">{SITE_CONFIG.pastorName}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08} className="lg:col-span-5 lg:pt-12">
            <div className="photo aspect-[3/4] rounded-lg">
              <Image
                src={unsplash(PHOTOS.windowShadow.id, 1000)}
                alt={PHOTOS.windowShadow.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[14px] text-text-faint">실제 사이트에는 목사님 사진이 들어갑니다.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 걸어온 길 */}
      <section aria-labelledby="history-title" className="section bg-bg-alt">
        <div className="wrap">
          <RevealOnScroll>
            <h2 id="history-title" className="text-[30px] md:text-[40px]">
              2015년 거실에서, 지금 성산동까지
            </h2>
          </RevealOnScroll>
          <ol className="mt-12 grid gap-y-8 border-t-2 border-text pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {TIMELINE.map((t, i) => (
              <RevealOnScroll as="li" key={t.year} delay={i * 0.05}>
                <p className="font-display text-[40px] font-semibold leading-none text-accent">{t.year}</p>
                <p className="mt-3 text-[18px]">{t.event}</p>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <MinistryGrid variant="ministry" />
      <ClosingCta />
    </>
  );
}
