import Link from "next/link";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

const STEPS = [
  {
    idx: "01",
    tag: "예배 시간",
    title: "주일과 수요일, 새벽까지",
    desc: "1부·2부 주일예배와 수요기도회, 새벽기도회 시간을 확인하세요.",
    href: "/visit",
    cta: "예배 시간 보기",
  },
  {
    idx: "02",
    tag: "오시는 길",
    title: SITE_CONFIG.addressShort,
    desc: "네이버 지도로 길찾기를 도와드립니다.",
    href: SITE_CONFIG.naverMapUrl,
    cta: "지도에서 보기",
    external: true,
  },
  {
    idx: "03",
    tag: "처음이신가요?",
    title: "새가족부가 함께합니다",
    desc: "등록 절차 없이 편하게 예배부터 드리셔도 좋습니다.",
    href: "/visit",
    cta: "새가족 안내",
  },
];

export default function VisitCards() {
  return (
    <section className="border-b border-line bg-bg-alt py-16 md:py-24">
      <div className="wrap">
        <RevealOnScroll>
          <p className="text-xs tracking-[0.14em] text-accent-strong">처음 오셨나요?</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl">방문에 필요한 정보만 골라 담았습니다</h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={step.idx} delay={i * 0.1} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="font-display text-4xl text-accent/25">{step.idx}</span>
              <p className="mt-4 text-xs tracking-[0.1em] text-text-faint">{step.tag}</p>
              <p className="mt-2 font-display text-xl">{step.title}</p>
              <p className="mt-2 text-sm text-text-muted">{step.desc}</p>
              <Link
                href={step.href}
                target={step.external ? "_blank" : undefined}
                rel={step.external ? "noopener" : undefined}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent"
              >
                {step.cta} <span aria-hidden>→</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
