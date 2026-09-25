"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";

/**
 * 유튜브 라이트 임베드: 처음에는 썸네일 이미지만 보여주고, 누를 때 플레이어(iframe)를 불러옵니다.
 * 유튜브 스크립트를 미리 받지 않아 첫 화면이 빠르고, 쿠키를 줄인 youtube-nocookie 도메인을 씁니다.
 * videoId가 비어 있으면(데모) 대표 사진 + 시연 안내를 보여줍니다.
 */
export default function LiteYouTube({
  videoId,
  title,
  fallbackImage,
  channelUrl,
}: {
  videoId: string;
  title: string;
  fallbackImage: string;
  channelUrl: string;
}) {
  const [active, setActive] = useState(false);
  const hasVideo = /^[A-Za-z0-9_-]{11}$/.test(videoId);
  const thumb = hasVideo ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : fallbackImage;

  if (active && hasVideo) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={`${title} 설교 영상`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="photo relative aspect-video w-full overflow-hidden rounded-lg">
      <Image src={thumb} alt="" fill sizes="(max-width: 1023px) 100vw, 60vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {active && !hasVideo ? (
        <div className="absolute inset-0 grid place-items-center p-6 text-center" role="status">
          <div className="max-w-md rounded-lg bg-night/90 p-6 text-cream">
            <p className="font-display text-[20px] font-semibold">시연용 화면입니다</p>
            <p className="mt-2 text-[16px] text-cream-muted">
              실제 교회 사이트에서는 이 자리에서 설교 영상이 바로 재생됩니다. 유튜브에 올리기만 하면 첫 화면이
              자동으로 바뀝니다.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-white underline underline-offset-4"
            >
              유튜브 채널 열기
              <Icon name="external" size={16} />
              <span className="sr-only">(새 창)</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`${title} 설교 영상 재생`}
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-accent shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform duration-[240ms] group-hover:scale-105 md:h-24 md:w-24">
            <Icon name="play" size={34} className="translate-x-[2px]" />
          </span>
        </button>
      )}
    </div>
  );
}
