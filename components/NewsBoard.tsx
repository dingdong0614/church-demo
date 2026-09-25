import Link from "next/link";
import Icon from "@/components/Icon";
import { RevealOnScroll } from "@/components/Reveal";
import { BULLETIN, EVENTS, NOTICES } from "@/data/news";
import { SITE_CONFIG } from "@/data/site";

/**
 * 이번 주 주보: 종이 주보를 펼친 듯한 3단 편집 지면.
 * 실제 운영: 주보 PDF를 올리면 이 지면의 날짜·말씀·PDF가 자동으로 바뀌고, 지난 주보는 보관함으로.
 */
export default function NewsBoard() {
  return (
    <section id="news" aria-labelledby="bulletin-title" className="section scroll-mt-20 bg-bg">
      <div className="wrap">
        <RevealOnScroll className="rounded-lg border border-line-strong bg-surface px-5 py-8 shadow-[0_1px_0_rgba(36,26,32,0.04)] md:px-10 md:py-12">
          {/* 제호 */}
          <header className="flex flex-col gap-2 border-b-[3px] border-double border-text pb-5 md:flex-row md:items-end md:justify-between">
            <h2 id="bulletin-title" className="text-[34px] leading-none md:text-[48px]">
              다솜 주보
            </h2>
            <p className="text-[16px] text-text-muted md:text-right">
              <time dateTime="2026-09-27" className="font-semibold text-text">
                {BULLETIN.dateLabel}
              </time>
              <span className="mx-2 text-line-strong">|</span>
              {BULLETIN.weekLabel}
            </p>
          </header>

          <div className="grid gap-10 pt-8 lg:grid-cols-12 lg:gap-0">
            {/* 1단: 오늘의 말씀 + 예배 순서 */}
            <article className="lg:col-span-5 lg:pr-10">
              <p className="text-[15px] font-semibold text-accent">이번 주일 말씀</p>
              <p className="mt-2 font-display text-[30px] font-semibold leading-snug md:text-[36px]">
                {BULLETIN.sermon.title}
              </p>
              <p className="mt-1 text-text-muted">
                {BULLETIN.sermon.verse} · {BULLETIN.sermon.preacher}
              </p>

              <h3 className="mt-8 font-body text-[16px] font-semibold tracking-normal text-text">주일 2부 예배 순서</h3>
              <ol className="mt-3 text-[16px]">
                {BULLETIN.order.map((o) => (
                  <li key={o.part} className="flex items-baseline gap-2 py-1.5">
                    <span className="shrink-0">{o.part}</span>
                    <span aria-hidden className="mx-1 flex-1 translate-y-[-4px] border-b border-dotted border-line-strong" />
                    <span className="shrink-0 text-text-muted">{o.who}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 border-l-2 border-accent pl-4 text-[16px] text-text-muted">{BULLETIN.familyWorship}</p>

              <a
                href={BULLETIN.pdf}
                target="_blank"
                rel="noopener"
                className="btn btn-primary mt-7"
              >
                이번 주 주보 PDF 보기
                <span className="text-[14px] font-normal text-white/80">(2쪽)</span>
              </a>
            </article>

            {/* 2단: 교회 소식 */}
            <div className="border-t border-line-strong pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:px-10 lg:pt-0">
              <h3 className="font-body text-[16px] font-semibold tracking-normal text-accent">교회 소식</h3>
              <ul>
                {NOTICES.map((n, i) => (
                  <li key={n.title} className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}>
                    <p className="text-[14px] text-text-faint">
                      {n.date} · {n.category}
                    </p>
                    <p className="mt-1 font-display text-[20px] font-semibold leading-snug">{n.title}</p>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-text-muted">{n.summary}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3단: 일정 · 헌금 */}
            <aside className="border-t border-line-strong pt-8 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-body text-[16px] font-semibold tracking-normal text-accent">다가오는 일정</h3>
              <ul className="mt-3">
                {EVENTS.map((e) => (
                  <li key={e.title} className="grid grid-cols-[64px_1fr] gap-3 border-b border-line py-4">
                    <span className="font-display text-[22px] font-semibold leading-tight text-accent">
                      {e.date}
                      <span className="block font-body text-[13px] font-normal text-text-faint">{e.day}</span>
                    </span>
                    <span>
                      <span className="block font-semibold leading-snug">{e.title}</span>
                      <span className="block text-[15px] text-text-muted">
                        {e.time} · {e.place}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-body text-[16px] font-semibold tracking-normal text-accent">헌금 안내</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{SITE_CONFIG.offering.account}</p>
              <Link href="/visit#offering" className="link-arrow text-[15px]">
                영수증 신청 방법
                <Icon name="arrow" size={16} />
              </Link>
            </aside>
          </div>

          <p className="mt-10 border-t border-line pt-5 text-[14px] leading-relaxed text-text-faint">
            시연 안내: 실제 운영에서는 사무실에서 주보 PDF를 한 번 올리면 이 지면이 바뀌고, 일정은 구글 캘린더에 적으면
            자동으로 들어옵니다.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
