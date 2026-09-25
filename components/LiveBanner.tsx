"use client";

import { useSyncExternalStore } from "react";
import { SITE_CONFIG } from "@/data/site";

/**
 * "지금 예배 중" 띠: 한국 시간 기준 예배 시간대에만 자동으로 보입니다.
 * (주일 08:50~12:20, 수요일 19:20~20:40)
 * 시연용: 주소 뒤에 ?live=1 을 붙이면 언제든 표시됩니다.
 * 실제 운영에서는 유튜브 라이브 여부를 확인해 표시합니다.
 */
function isLiveNow() {
  if (new URLSearchParams(window.location.search).get("live") === "1") return true;
  const kst = new Date(Date.now() + 9 * 3600 * 1000);
  const day = kst.getUTCDay();
  const m = kst.getUTCHours() * 60 + kst.getUTCMinutes();
  if (day === 0 && m >= 530 && m <= 740) return true;
  if (day === 3 && m >= 1160 && m <= 1240) return true;
  return false;
}

const noop = () => () => {};

export default function LiveBanner() {
  const live = useSyncExternalStore(noop, isLiveNow, () => false);
  if (!live) return null;
  return (
    <div className="bg-accent text-white" role="status">
      <div className="wrap flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-[16px]">
        <p className="flex items-center gap-2 font-semibold">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
          지금 예배 중입니다
        </p>
        <a
          href={SITE_CONFIG.sns.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
        >
          유튜브 실황 보기<span className="sr-only">(새 창)</span>
        </a>
      </div>
    </div>
  );
}
