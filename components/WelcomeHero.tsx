import Image from "next/image";
import Link from "next/link";
import { RevealHeading, RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function WelcomeHero() {
  return (
    <section className="border-b border-line bg-bg">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1fr_1.1fr] md:gap-16 md:py-24">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">환영합니다</p>
          </RevealOnScroll>
          <RevealHeading
            as="h1"
            text={`처음 오신 걸음도, ${SITE_CONFIG.slogan}로 맞이합니다`}
            className="mt-4 font-display text-[2rem] leading-[1.25] md:text-[2.6rem]"
          />
          <RevealOnScroll delay={0.15}>
            <p className="mt-6 max-w-md text-text-muted">
              {SITE_CONFIG.name}는 큰 규모보다 서로의 이름을 부르는 관계를 소중히 여기는 공동체입니다.
              혼자 오셔도 괜찮습니다 — 새가족부가 첫 걸음부터 함께합니다.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.25} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/visit"
              className="bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              처음 오셨나요?
            </Link>
            <Link href="/about" className="text-sm text-text-muted underline underline-offset-4 hover:text-text">
              교회 소개 보기
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35} className="mt-10 border border-line-strong bg-surface p-5">
            <p className="text-xs tracking-[0.1em] text-text-faint">SUNDAY WORSHIP</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {SITE_CONFIG.hours.slice(0, 2).map((h) => (
                <li key={h.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-text-muted">{h.label}</span>
                  <span className="font-display">{h.time}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2} className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1699830506478-af7b3f5e6cc9?auto=format&fit=crop&w=1400&q=80"
              alt="따뜻한 빛이 스며드는 예배당"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
