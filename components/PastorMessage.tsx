import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";
import { PHOTOS, unsplash } from "@/data/photos";

/** 목회 편지: 편지지처럼 날짜와 서명이 있는 짧은 글 + 책상 사진 */
export default function PastorMessage() {
  return (
    <section aria-labelledby="letter-title" className="section bg-bg-alt">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <RevealOnScroll className="lg:col-span-5">
          <div className="photo aspect-[4/5] w-full max-w-[460px] rounded-lg">
            <Image
              src={unsplash(PHOTOS.bibleCoffee.id, 1000)}
              alt={PHOTOS.bibleCoffee.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="lg:col-span-7">
          <p className="text-[15px] text-text-faint">9월, 목양실에서</p>
          <h2 id="letter-title" className="mt-3 text-[28px] leading-[1.45] md:text-[36px]">
            당신의 자리를 비워두고 기다립니다
          </h2>
          <div className="mt-6 max-w-[36rem] space-y-4 text-text-muted">
            <p>
              저희 교회는 작습니다. 하지만 작다는 것은 서로의 이름과 사정을 알 수 있다는 뜻이기도 합니다.
            </p>
            <p>
              지쳐서, 오랜만에, 혹은 태어나 처음으로 예배당 문을 여는 분도 있겠지요. 완벽한 신앙을 요구하지 않습니다.
              정직한 질문과 한 걸음이면 충분합니다.
            </p>
          </div>
          <p className="mt-6 font-display text-[20px] font-semibold text-text">{SITE_CONFIG.pastorName} 드림</p>
          <Link href="/about" className="link-arrow mt-3">
            교회가 걸어온 길
            <Icon name="arrow" size={18} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
