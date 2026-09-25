import type { Metadata } from "next";
import WelcomeHero from "@/components/WelcomeHero";
import NewsBoard from "@/components/NewsBoard";
import SermonList from "@/components/SermonList";
import VisitCards from "@/components/VisitCards";
import MinistryGrid from "@/components/MinistryGrid";
import PastorMessage from "@/components/PastorMessage";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** 순서: 예배당 사진 + 예배 시간 띠 → 이번 주 주보 → 지난 설교 → 처음 오는 주일 → 앨범 → 목회 편지 → 찾아오는 길 */
export default function HomePage() {
  return (
    <>
      <WelcomeHero />
      <NewsBoard />
      <SermonList />
      <VisitCards />
      <MinistryGrid />
      <PastorMessage />
      <ClosingCta />
    </>
  );
}
