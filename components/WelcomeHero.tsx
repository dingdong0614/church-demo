import Image from "next/image";
import Link from "next/link";
import { RevealHeading, RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

const FILMSTRIP = [
  {
    src: "https://images.unsplash.com/photo-1699830506478-af7b3f5e6cc9?auto=format&fit=crop&w=900&q=80",
    alt: "따뜻한 빛이 스며드는 예배당",
    rotate: "-rotate-3",
  },
  {
    src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80",
    alt: "함께 찬양하는 성도들",
    rotate: "rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    alt: "예배 후 교제를 나누는 성도들",
    rotate: "-rotate-2",
  },
] as const;

export default function WelcomeHero() {
  return (
    <section className="border-b border-line bg-bg py-16 md:pb-32 md:pt-24">
      <div className="wrap flex flex-col items-center text-center">
        <RevealOnScroll>
          <p className="text-xs tracking-[0.14em] text-accent-strong">환영합니다</p>
        </RevealOnScroll>
        <RevealHeading
          as="h1"
          text={`처음 오신 걸음도, ${SITE_CONFIG.slogan}로 맞이합니다`}
          className="mx-auto mt-4 max-w-2xl font-display text-[2rem] leading-[1.25] md:text-[2.8rem]"
        />
        <RevealOnScroll delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-text-muted">
            {SITE_CONFIG.name}는 큰 규모보다 서로의 이름을 부르는 관계를 소중히 여기는 공동체입니다.
            혼자 오셔도 괜찮습니다 — 새가족부가 첫 걸음부터 함께합니다.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.25} className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>

      <div className="mt-20 md:mt-28">
      <div className="wrap relative">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {FILMSTRIP.map((photo, i) => (
            <RevealOnScroll key={photo.src} delay={0.1 + i * 0.1} className={i === 1 ? "md:-translate-y-3" : ""}>
              <div
                className={`relative aspect-[3/4] w-full overflow-hidden border-4 border-surface shadow-[0_20px_45px_-20px_rgba(42,31,38,0.35)] ${photo.rotate}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 767px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll
          delay={0.5}
          className="relative mx-auto mt-8 max-w-xs border border-line-strong bg-surface p-5 md:absolute md:-bottom-8 md:right-[6%] md:mt-0 md:max-w-[15rem]"
        >
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
      </div>
    </section>
  );
}
