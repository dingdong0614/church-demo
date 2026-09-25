import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { ALBUM, MINISTRIES } from "@/data/ministries";
import { unsplash } from "@/data/photos";

/**
 * variant="album": 홈의 사진 앨범(크기가 다른 모자이크).
 * variant="ministry": 교회소개의 공동체 소개(사진 + 글 교차 배치).
 */
export default function MinistryGrid({ variant = "album" }: { variant?: "album" | "ministry" }) {
  if (variant === "ministry") {
    return (
      <section aria-labelledby="ministry-title" className="section bg-bg">
        <div className="wrap">
          <RevealOnScroll>
            <h2 id="ministry-title" className="text-[30px] md:text-[40px]">
              예배 후에도 이어지는 모임
            </h2>
          </RevealOnScroll>
          <div className="mt-12 space-y-14 md:space-y-20">
            {MINISTRIES.map((m, i) => (
              <RevealOnScroll
                key={m.name}
                as="article"
                className={`grid items-center gap-6 md:grid-cols-12 md:gap-10`}
              >
                <div className={`photo aspect-[4/3] rounded-lg ${i % 2 ? "md:col-span-6 md:col-start-7 md:row-start-1" : "md:col-span-7"}`}>
                  <Image
                    src={unsplash(m.photo.id, 1400)}
                    alt={m.photo.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className={i % 2 ? "md:col-span-5 md:col-start-1 md:row-start-1" : "md:col-span-5"}>
                  <p className="text-[15px] font-semibold text-accent">{m.when}</p>
                  <h3 className="mt-2 text-[26px] md:text-[32px]">{m.name}</h3>
                  <p className="mt-3 text-text-muted">{m.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="album-title" className="section bg-bg">
      <div className="wrap">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="album-title" className="text-[30px] md:text-[40px]">
            요즘 다솜교회
          </h2>
          <p className="text-[15px] text-text-faint">사진은 분위기 예시입니다 (데모)</p>
        </RevealOnScroll>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {ALBUM.map((a, i) => (
            <RevealOnScroll
              key={a.caption}
              as="figure"
              delay={i * 0.05}
              className={`photo photo-zoom group relative overflow-hidden rounded-md ${
                a.span === "wide" ? "col-span-2 row-span-2" : a.span === "tall" ? "row-span-2" : ""
              }`}
            >
              <Image
                src={unsplash(a.photo.id, a.span ? 1400 : 800)}
                alt={a.photo.alt}
                fill
                sizes={a.span === "wide" ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 50vw, 25vw"}
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-[15px] font-semibold text-white">
                {a.caption}
              </figcaption>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
