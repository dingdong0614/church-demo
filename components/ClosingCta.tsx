import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE_CONFIG } from "@/data/site";
import { PHOTOS, unsplash } from "@/data/photos";

/** 페이지 끝: 나무 사진 위 찾아오는 길 한 줄 + 전화·길찾기 */
export default function ClosingCta() {
  return (
    <section aria-labelledby="closing-title" className="relative overflow-hidden bg-night">
      <Image
        src={unsplash(PHOTOS.youth.id, 2000)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_45%] opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="wrap on-night relative py-20 text-white md:py-28">
        <h2 id="closing-title" className="max-w-xl text-[30px] leading-[1.4] text-white md:text-[42px]">
          이번 주일 11시,
          <br />
          성산동에서 뵙겠습니다
        </h2>
        <p className="mt-4 max-w-lg text-white/85">
          {SITE_CONFIG.addressFull}
          <br />
          {SITE_CONFIG.directions.subway}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-accent-strong hover:-translate-y-0.5">
            <Icon name="pin" size={18} />
            네이버 지도로 길찾기
            <span className="sr-only">(새 창)</span>
          </a>
          <a href={`tel:${SITE_CONFIG.contact.phone}`} className="btn btn-ghost">
            <Icon name="phone" size={18} />
            {SITE_CONFIG.contact.phone}
          </a>
          <Link href="/contact" className="btn btn-ghost">
            문의 남기기
          </Link>
        </div>
      </div>
    </section>
  );
}
