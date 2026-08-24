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

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:[&>*:first-child]:col-span-2 md:[&>*:first-child]:row-span-2">
          {MINISTRIES.map((m, i) => (
            <RevealOnScroll key={m.name} delay={i * 0.08} className="group relative overflow-hidden">
              <div className={`relative w-full overflow-hidden ${i === 0 ? "aspect-[16/11] md:h-full" : "aspect-[4/3]"}`}>
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <p className="font-display text-lg">{m.name}</p>
                  <p className="mt-1 max-w-xs text-sm text-cream/85">{m.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
