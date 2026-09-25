import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";
import { FIRST_SUNDAY } from "@/data/visit";
import { PHOTOS, unsplash } from "@/data/photos";

/** 처음 오시는 날: 출입문 사진 + 주일 2부 기준 시간표 형식의 하루 흐름 */
export default function VisitCards() {
  return (
    <section aria-labelledby="first-title" className="bg-bg-alt">
      <div className="grid lg:grid-cols-12">
        <div className="photo relative min-h-[320px] sm:min-h-[420px] lg:col-span-5 lg:min-h-full">
          <Image
            src={unsplash(PHOTOS.door.id, 1400)}
            alt={PHOTOS.door.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 42vw"
            className="object-cover object-[50%_35%]"
          />
        </div>

        <div className="px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:col-span-7 lg:px-16 xl:px-20">
          <RevealOnScroll>
            <h2 id="first-title" className="text-[30px] leading-[1.35] md:text-[40px]">
              처음 오는 주일은
              <br />
              이렇게 흘러갑니다
            </h2>
            <p className="mt-3 text-text-muted">처음이시면 주일 2부(오전 11시)를 권해 드려요. 예배 후에 새가족부가 기다립니다.</p>
          </RevealOnScroll>

          <ol className="mt-10 max-w-2xl">
            {FIRST_SUNDAY.map((s, i) => (
              <RevealOnScroll
                as="li"
                key={s.time}
                delay={i * 0.06}
                className="grid grid-cols-[72px_1fr] gap-4 border-t border-line-strong py-5 md:grid-cols-[96px_1fr]"
              >
                <span className="font-display text-[24px] font-semibold leading-tight text-accent md:text-[28px]">
                  {s.time}
                </span>
                <span>
                  <span className="block text-[19px] font-semibold">{s.title}</span>
                  <span className="mt-1 block text-text-muted">{s.desc}</span>
                </span>
              </RevealOnScroll>
            ))}
          </ol>

          <RevealOnScroll className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact?type=newcomer" className="btn btn-primary">
              새가족 등록하기
              <Icon name="arrow" size={18} />
            </Link>
            <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon name="pin" size={18} />
              네이버 지도 길찾기
              <span className="sr-only">(새 창)</span>
            </a>
          </RevealOnScroll>
          <p className="mt-5 text-[15px] text-text-faint">
            현관과 주보에 붙은 QR을 찍어도 같은 등록 화면이 열립니다. 종이 카드는 쓰지 않아요.
          </p>
        </div>
      </div>
    </section>
  );
}
