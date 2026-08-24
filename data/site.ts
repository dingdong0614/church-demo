/**
 * 다솜교회 사이트 전역 설정 (영업용 데모 — 더미 데이터).
 * 이 파일의 값만 바꾸면 화면에 그대로 반영됩니다. (컴포넌트 코드 수정 불필요)
 * 실제 계약 시 이 파일 전체를 실제 교회 정보로 교체하세요.
 */

export const SITE_CONFIG = {
  name: "다솜교회",
  nameEn: "Dasom Church",
  slogan: "사랑으로 세워가는 교회",
  pastorName: "김은혁 목사",
  addressFull: "서울특별시 마포구 성산로 128 (성산동)",
  addressShort: "마포구 성산동 · 6호선 광흥창역 도보 8분",
  hours: [
    { label: "주일 1부 예배", time: "오전 9:00" },
    { label: "주일 2부 예배", time: "오전 11:00" },
    { label: "수요 기도회", time: "저녁 7:30" },
    { label: "새벽 기도회", time: "오전 5:30 (월~토)" },
  ],
  contact: {
    phone: "02-0000-0000",
    email: "hello@dasom-church.kr",
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  },
  sns: {
    instagramUrl: "https://www.instagram.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
  naverMapUrl: "https://map.naver.com/p/search/다솜교회",
} as const;
