"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string, onChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => subscribe(query, onChange),
    () => window.matchMedia(query).matches,
    () => false
  );
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/* ---------- 사이트 내 "움직임 줄이기" 토글 (html[data-motion], localStorage) ---------- */

import { MOTION_STORAGE_KEY } from "@/lib/motion";
export { MOTION_STORAGE_KEY };
const MOTION_EVENT = "dasom-motion-change";

function subscribeMotion(onChange: () => void) {
  window.addEventListener(MOTION_EVENT, onChange);
  return () => window.removeEventListener(MOTION_EVENT, onChange);
}

export function useMotionPreference(): "reduce" | "full" {
  return useSyncExternalStore(
    subscribeMotion,
    () => (document.documentElement.dataset.motion === "reduce" ? "reduce" : "full"),
    () => "full"
  );
}

export function setMotionPreference(value: "reduce" | "full") {
  const root = document.documentElement;
  if (value === "reduce") root.dataset.motion = "reduce";
  else delete root.dataset.motion;
  try {
    localStorage.setItem(MOTION_STORAGE_KEY, value);
  } catch {
    /* 저장이 막힌 환경(시크릿 모드 등)에서도 현재 화면에는 적용됨 */
  }
  window.dispatchEvent(new Event(MOTION_EVENT));
}
