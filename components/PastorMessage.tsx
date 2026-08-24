import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function PastorMessage() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt py-20 md:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 -top-10 select-none font-display text-[9rem] leading-none text-accent/10 md:-top-16 md:text-[13rem]"
      >
        &ldquo;
      </span>

      <div className="wrap relative">
        <div className="relative max-w-xl md:ml-[6%]">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">담임목사 인사말</p>
            <p className="mt-5 font-display text-2xl leading-relaxed md:text-[2rem]">
              &ldquo;당신의 이름을 기억하고, 당신의 자리를 비워두는 교회가 되고 싶습니다.&rdquo;
            </p>
            <p className="mt-6 max-w-lg text-text-muted">
              큰 숫자보다 한 사람을 소중히 여기는 공동체를 꿈꿉니다. {SITE_CONFIG.name}는 완벽한
              신앙이 아니라 정직한 걸음을 응원하는 곳입니다. 지치고 낯선 걸음이어도 괜찮습니다 —
              여기, 당신의 자리를 마련해 두었습니다.
            </p>
            <p className="mt-6 font-display text-lg">{SITE_CONFIG.pastorName}</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          delay={0.15}
          className="relative mt-10 ml-auto w-48 rotate-2 md:absolute md:right-[8%] md:top-6 md:mt-0 md:w-60 lg:right-[12%]"
        >
          <div className="aspect-[3/4] overflow-hidden border-4 border-surface shadow-[0_24px_55px_-18px_rgba(42,31,38,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1706109576976-361ba78dcb56?auto=format&fit=crop&w=1000&q=80"
              alt="예배당 창가에 서 있는 담임목사"
              fill={false}
              width={480}
              height={640}
              sizes="(max-width: 767px) 50vw, 20vw"
              className="h-full w-full object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
