import type { Metadata, Viewport } from "next";
import "./fonts/wanted/wanted-sans.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";
import LiveBanner from "@/components/LiveBanner";
import { SITE_CONFIG } from "@/data/site";
import { MOTION_STORAGE_KEY } from "@/lib/motion";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dasom-church.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.addressShort}. ${SITE_CONFIG.slogan}. 처음 오신 분도 편안하게 예배드릴 수 있는 공동체입니다.`,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_CONFIG.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1ec",
};

/** 첫 페인트 전에 실행: JS 사용 표시 + 저장된 "움직임 줄이기" 선택 복원 (고정 문자열, 사용자 입력 없음) */
const BOOT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('${MOTION_STORAGE_KEY}')==='reduce'){d.dataset.motion='reduce';}}catch(e){}})();`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.nameEn,
  url: SITE_URL,
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "성산로 128",
    addressLocality: "마포구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[200] focus:rounded focus:bg-accent focus:px-4 focus:py-3 focus:text-white"
        >
          본문 바로가기
        </a>
        <ScrollProvider>
          <LiveBanner />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
