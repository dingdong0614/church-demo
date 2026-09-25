"use client";

import { setMotionPreference, useMotionPreference } from "@/lib/use-media";

/** 푸터의 "화면 움직임 줄이기" 스위치. 어르신·멀미에 민감한 분을 위한 선택지. */
export default function MotionToggle() {
  const pref = useMotionPreference();
  const reduced = pref === "reduce";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={reduced}
      onClick={() => setMotionPreference(reduced ? "full" : "reduce")}
      className="inline-flex min-h-11 items-center gap-3 text-[15px] text-text-muted hover:text-text"
    >
      <span
        aria-hidden
        className={`relative inline-block h-6 w-11 rounded-full border transition-colors ${
          reduced ? "border-accent bg-accent" : "border-line-strong bg-surface"
        }`}
      >
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-transform ${
            reduced ? "translate-x-[22px] bg-white" : "translate-x-[3px] bg-text-faint"
          }`}
        />
      </span>
      화면 움직임 줄이기
    </button>
  );
}
