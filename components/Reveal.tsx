"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * 스크롤 진입 리빌 (IntersectionObserver + CSS, transform/opacity만).
 * - 한 번 보이면 끝(재실행 없음), 레이아웃 시프트 0
 * - prefers-reduced-motion 또는 사이트 내 "움직임 줄이기"면 CSS가 즉시 표시
 * - JS가 꺼져 있어도 내용은 보임 (html.js 일 때만 숨김 시작)
 * 이전 framer-motion 버전과 같은 이름(RevealOnScroll, RevealHeading)을 유지.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as,
  id,
}: {
  children: ReactNode;
  className?: string;
  /** 초 단위 (기존 API 호환). 최대 0.3초로 제한 */
  delay?: number;
  as?: ElementType;
  id?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = (as ?? "div") as ElementType;
  const ms = Math.min(delay, 0.3) * 1000;
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={ms ? ({ "--reveal-delay": `${ms}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

export function RevealHeading({
  text,
  as = "h1",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll as={as} className={className} delay={delay}>
      {text}
    </RevealOnScroll>
  );
}
