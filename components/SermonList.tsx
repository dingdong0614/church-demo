import Icon from "@/components/Icon";
import LiteYouTube from "@/components/LiteYouTube";
import { RevealOnScroll } from "@/components/Reveal";
import { SERMONS, SERMON_FALLBACK } from "@/data/sermons";
import { unsplash } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

/** 설교 다시 보기: 지난 주일 설교를 크게, 그 전 설교는 날짜 목록으로 */
export default function SermonList() {
  const [featured, ...rest] = SERMONS;

  return (
    <section id="sermon" aria-labelledby="sermon-title" className="on-night section scroll-mt-20 bg-night text-cream">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
        <RevealOnScroll className="lg:col-span-8">
          <h2 id="sermon-title" className="text-[30px] text-cream md:text-[40px]">
            지난 주일 설교
          </h2>
          <p className="mt-2 text-cream-muted">
            {featured.date} {featured.service} · {featured.preacher}
          </p>
          <div className="mt-8">
            <LiteYouTube
              videoId={featured.youtubeId}
              title={featured.title}
              fallbackImage={unsplash(SERMON_FALLBACK.id, 1600)}
              channelUrl={featured.youtubeUrl}
            />
          </div>
          <p className="mt-6 font-display text-[26px] font-semibold text-cream md:text-[32px]">{featured.title}</p>
          <p className="mt-1 font-display text-[18px] text-cream-muted">{featured.verse}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="lg:col-span-4 lg:pt-3">
          <p className="border-b border-white/20 pb-3 text-[16px] font-semibold text-cream">그 전 설교</p>
          <ul>
            {rest.map((s) => (
              <li key={s.title} className="border-b border-white/15">
                <a
                  href={s.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5"
                >
                  <span>
                    <span className="block text-[14px] text-cream-muted">
                      {s.date} · {s.service}
                    </span>
                    <span className="mt-1 block font-display text-[20px] font-semibold leading-snug text-cream group-hover:underline group-hover:underline-offset-4">
                      {s.title}
                    </span>
                    <span className="mt-0.5 block text-[15px] text-cream-muted">{s.verse}</span>
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-cream transition-colors group-hover:border-cream">
                    <Icon name="play" size={16} className="translate-x-[1px]" />
                    <span className="sr-only">(유튜브, 새 창)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE_CONFIG.sns.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-cream underline decoration-white/40 underline-offset-[6px] hover:decoration-cream"
          >
            유튜브 채널에서 전체 보기
            <Icon name="external" size={16} />
            <span className="sr-only">(새 창)</span>
          </a>
          <p className="mt-4 text-[15px] leading-relaxed text-cream-muted">
            주일 영상은 월요일, 수요 기도회 영상은 목요일 오전에 올라옵니다.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
