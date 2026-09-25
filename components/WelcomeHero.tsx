import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE_CONFIG } from "@/data/site";
import { PHOTOS, unsplash } from "@/data/photos";

/**
 * 첫 화면: 예배당 사진을 화면 가득 + 사진 바로 아래 이번 주 예배 시간 띠.
 * 정보는 애니메이션 없이 즉시 (고령 성도·저사양 기기, LCP 보호).
 */
export default function WelcomeHero() {
  return (
    <section aria-label="다솜교회 첫 화면">
      <div className="relative h-[68svh] min-h-[440px] w-full overflow-hidden bg-night md:h-[78svh] md:max-h-[860px]">
        <Image
          src={unsplash(PHOTOS.sanctuary.id, 2400)}
          alt={PHOTOS.sanctuary.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-10 md:pb-16">
          <p className="text-[16px] font-semibold text-white/90 md:text-[18px]">마포구 성산동 · 광흥창역에서 걸어서 8분</p>
          <h1 className="mt-3 max-w-[15em] text-[36px] leading-[1.28] text-white sm:text-[48px] md:text-[60px]">
            처음 오셔도
            <br />
            어색하지 않은 교회
          </h1>
        </div>
      </div>

      {/* 이번 주 예배 시간 띠 */}
      <div className="bg-accent-strong text-white">
        <div className="wrap grid gap-y-5 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-10 md:py-7">
          <p className="font-display text-[20px] font-semibold md:border-r md:border-white/25 md:pr-10">
            이번 주 예배
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {SITE_CONFIG.hours.map((h) => (
              <li key={h.label} className="leading-snug">
                <span className="block text-[15px] text-white/80">{h.label.replace(" 예배", "")}</span>
                <span className="block font-display text-[21px] font-semibold md:text-[23px]">
                  {h.time.replace(" (월~토)", "")}
                </span>
                {h.day === "월~토" && <span className="block text-[14px] text-white/80">월~토</span>}
              </li>
            ))}
          </ul>
          <Link
            href="/visit"
            className="inline-flex min-h-12 items-center gap-2 justify-self-start rounded-md bg-white px-5 font-semibold text-accent-strong transition-transform hover:-translate-y-0.5"
          >
            처음이세요? 이렇게 오시면 돼요
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
