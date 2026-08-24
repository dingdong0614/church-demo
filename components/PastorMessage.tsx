import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function PastorMessage() {
  return (
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
          <p className="mt-4 font-display text-2xl leading-relaxed md:text-[1.7rem]">
            &ldquo;당신의 이름을 기억하고, 당신의 자리를 비워두는 교회가 되고 싶습니다.&rdquo;
          </p>
          <p className="mt-6 max-w-lg text-text-muted">
            큰 숫자보다 한 사람을 소중히 여기는 공동체를 꿈꿉니다. {SITE_CONFIG.name}는 완벽한 신앙이
            아니라 정직한 걸음을 응원하는 곳입니다. 지치고 낯선 걸음이어도 괜찮습니다 — 여기, 당신의
            자리를 마련해 두었습니다.
          </p>
          <p className="mt-6 font-display text-lg">{SITE_CONFIG.pastorName}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
