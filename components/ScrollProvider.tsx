"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useMediaQuery, usePrefersReducedMotion, useMotionPreference } from "@/lib/use-media";

/**
 * 스무스 스크롤(Lenis)은 데스크톱 + 마우스 환경에서만.
 * 모바일·터치·모션 줄이기(OS 설정 또는 사이트 토글)에서는 기본 스크롤을 그대로 씁니다.
 */
export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const siteReduced = useMotionPreference() === "reduce";
  const isDesktopPointer = useMediaQuery("(min-width: 1024px) and (hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (reducedMotion || siteReduced || !isDesktopPointer) return;

    const lenis = new Lenis({ duration: 0.9, smoothWheel: true });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reducedMotion, siteReduced, isDesktopPointer]);

  return <>{children}</>;
}
