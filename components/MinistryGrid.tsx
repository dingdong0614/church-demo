import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { MINISTRIES } from "@/data/ministries";

export default function MinistryGrid() {
  return (
    <section className="border-b border-line bg-bg-alt py-16 md:py-24">
      <div className="wrap">
        <RevealOnScroll>
          <p className="text-xs tracking-[0.14em] text-accent-strong">공동체</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl">함께 걷는 삶의 자리들</h2>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(24px,calc((100vw-var(--content-max))/2))] pb-4">
          {MINISTRIES.map((m) => (
            <div
              key={m.name}
              className="group relative w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[45vw] md:w-[30vw] lg:w-[26vw]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 767px) 78vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <p className="font-display text-lg">{m.name}</p>
                  <p className="mt-1 text-sm text-cream/85">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
