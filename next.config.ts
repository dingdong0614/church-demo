import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 기본값은 [75]만 허용. 명시해 두어 프로덕션 400 함정을 방지.
    qualities: [75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // 설교 영상 썸네일 (유튜브 라이트 임베드)
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
