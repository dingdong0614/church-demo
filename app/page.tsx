import Link from "next/link";
import WelcomeHero from "@/components/WelcomeHero";
import VisitCards from "@/components/VisitCards";
import PastorMessage from "@/components/PastorMessage";
import SermonList from "@/components/SermonList";
import MinistryGrid from "@/components/MinistryGrid";
import { RevealOnScroll } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <WelcomeHero />
      <VisitCards />
      <PastorMessage />
      <SermonList />
      <MinistryGrid />

      <section className="py-16 md:py-24">
        <RevealOnScroll className="wrap flex flex-col items-start gap-5 border border-line-strong bg-surface p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl">궁금한 점이 있으신가요?</p>
            <p className="mt-2 text-sm text-text-muted">언제든 편하게 문의 남겨주세요. 목양팀이 직접 답변드립니다.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            문의하기
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
