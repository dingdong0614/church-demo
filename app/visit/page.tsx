import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import VisitCards from "@/components/VisitCards";
import Icon from "@/components/Icon";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";
import { FAQ } from "@/data/visit";
import { PHOTOS, unsplash } from "@/data/photos";

export const metadata: Metadata = {
  title: "처음 오셨나요",
  description: `${SITE_CONFIG.name} 예배 시간, 오시는 길, 새가족 안내 절차를 확인하세요.`,
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        crumb="처음 오셨나요"
        title="처음 오시는 분께"
        desc="예배 시간, 찾아오는 길, 도착해서 무슨 일이 있는지까지 이 페이지에 다 적어 두었습니다."
        image={{ src: unsplash(PHOTOS.arches.id, 2400), alt: PHOTOS.arches.alt }}
        position="50% 55%"
      />

      {/* 예배 시간표 */}
      <section id="times" aria-labelledby="times-title" className="section scroll-mt-24 bg-bg">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-4">
            <h2 id="times-title" className="text-[30px] md:text-[40px]">
              예배 시간
            </h2>
            <p className="mt-3 text-text-muted">처음이시면 주일 2부를 권해 드려요. 예배 후 새가족부가 인사드립니다.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.06} className="lg:col-span-8">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">다솜교회 예배 시간표</caption>
              <thead>
                <tr className="border-b-2 border-text text-[15px] text-text-faint">
                  <th scope="col" className="py-3 font-semibold">
                    예배
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    요일
                  </th>
                  <th scope="col" className="py-3 text-right font-semibold">
                    시간
                  </th>
                </tr>
              </thead>
              <tbody>
                {SITE_CONFIG.hours.map((h, i) => (
                  <tr key={h.label} className={`border-b border-line ${i === 1 ? "bg-accent-soft" : ""}`}>
                    <th scope="row" className="py-5 pl-0 pr-3 text-[18px] font-semibold md:text-[20px]">
                      {h.label}
                      {i === 1 && <span className="mt-1 block text-[14px] font-semibold text-accent">처음 오신 분께 추천</span>}
                    </th>
                    <td className="py-5 pr-3 text-text-muted">{h.day}</td>
                    <td className="py-5 text-right font-display text-[22px] font-semibold text-accent md:text-[26px]">
                      {h.time.replace(" (월~토)", "")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="directions" aria-labelledby="dir-title" className="section scroll-mt-24 border-t border-line bg-bg">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-4">
            <h2 id="dir-title" className="text-[30px] md:text-[40px]">
              찾아오는 길
            </h2>
            <p className="mt-3 text-[19px] font-semibold">{SITE_CONFIG.addressFull}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                네이버 지도로 길찾기
                <Icon name="external" size={18} />
                <span className="sr-only">(새 창)</span>
              </a>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="btn btn-ghost">
                <Icon name="phone" size={18} />
                전화 문의
              </a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.06} className="lg:col-span-8">
            <dl className="border-t-2 border-text">
              {[
                { k: "지하철", v: SITE_CONFIG.directions.subway },
                { k: "버스", v: SITE_CONFIG.directions.bus },
                { k: "주차", v: SITE_CONFIG.directions.parking },
              ].map((row) => (
                <div key={row.k} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="font-semibold text-accent">{row.k}</dt>
                  <dd className="text-text-muted">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[15px] text-text-faint">
              실제 사이트에서는 이 자리에 지도가 들어갑니다 (정적 지도 이미지 또는 네이버·카카오 지도).
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div id="newcomer" className="scroll-mt-24">
        <VisitCards />
      </div>

      {/* 자주 묻는 질문 */}
      <section id="faq" aria-labelledby="faq-title" className="section scroll-mt-24 bg-bg">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-4">
            <h2 id="faq-title" className="text-[30px] leading-[1.35] md:text-[40px]">
              물어보기
              <br />
              망설여지는 것들
            </h2>
          </RevealOnScroll>
          <div className="lg:col-span-8">
            <div className="border-t-2 border-text">
              {FAQ.map((item) => (
                <details key={item.q} className="faq border-b border-line-strong">
                  <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-[19px] font-semibold">
                    {item.q}
                    <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong text-accent">
                      <Icon name="plus" size={18} />
                    </span>
                  </summary>
                  <p className="pb-6 pr-12 text-text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 헌금 안내 */}
      <section id="offering" aria-labelledby="offering-title" className="scroll-mt-24 bg-bg-alt">
        <div className="wrap grid gap-6 py-14 md:grid-cols-[1fr_2fr] md:items-start md:py-16">
          <h2 id="offering-title" className="text-[26px] md:text-[32px]">
            헌금 안내
          </h2>
          <div>
            <p className="text-[19px] font-semibold">{SITE_CONFIG.offering.account}</p>
            <p className="mt-2 text-text-muted">{SITE_CONFIG.offering.note}</p>
            <Link href="/contact" className="link-arrow mt-3">
              영수증 신청하기
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
