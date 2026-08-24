import { RevealOnScroll } from "@/components/Reveal";
import { SERMONS } from "@/data/sermons";

export default function SermonList() {
  return (
    <section className="border-b border-line bg-bg py-16 md:py-24">
      <div className="wrap">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.14em] text-accent-strong">최근 설교</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">지난 주 말씀 다시 듣기</h2>
          </div>
        </RevealOnScroll>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {SERMONS.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 0.06}>
              <a
                href={s.youtubeUrl}
                target="_blank"
                rel="noopener"
                className="group flex flex-wrap items-center justify-between gap-3 py-5 transition-colors hover:bg-surface"
              >
                <div>
                  <p className="font-display text-lg">{s.title}</p>
                  <p className="mt-1 text-sm text-text-muted">
                    {s.verse} · {s.preacher}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-faint">
                  <span>{s.date}</span>
                  <span className="text-accent-strong opacity-0 transition-opacity group-hover:opacity-100">
                    설교 보기 →
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
