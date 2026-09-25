/**
 * 다솜교회 사이트 전역 설정 (영업용 데모, 더미 데이터).
 * 이 파일의 값만 바꾸면 화면에 그대로 반영됩니다. (컴포넌트 코드 수정 불필요)
 * 실제 계약 시 이 파일 전체를 실제 교회 정보로 교체하세요.
 *
 * 문의 폼 전송 키는 이 파일이 아니라 서버 환경변수 WEB3FORMS_ACCESS_KEY 로 관리합니다.
 * (브라우저 번들에 들어가지 않도록. 값이 없으면 데모 모드로 동작)
 */

export const SITE_CONFIG = {
  name: "다솜교회",
  nameEn: "Dasom Church",
  slogan: "사랑으로 세워가는 교회",
  pastorName: "김은혁 목사",
  addressFull: "서울특별시 마포구 성산로 128 (성산동)",
  addressShort: "마포구 성산동 · 6호선 광흥창역 도보 8분",
  hours: [
    { label: "주일 1부 예배", time: "오전 9:00", day: "주일" },
    { label: "주일 2부 예배", time: "오전 11:00", day: "주일" },
    { label: "수요 기도회", time: "저녁 7:30", day: "수요일" },
    { label: "새벽 기도회", time: "오전 5:30 (월~토)", day: "월~토" },
  ],
  /** 오시는 길 상세 (데모용 더미) */
  directions: {
    subway: "6호선 광흥창역 도보 8분",
    bus: "성산동 정류장 하차 후 도보 3분 (데모 안내)",
    parking: "예배당 앞 주차 공간은 협소합니다. 가급적 대중교통을 이용해 주세요. (데모 안내)",
  },
  contact: {
    phone: "02-0000-0000",
    email: "hello@dasom-church.kr",
    officeHours: "화~토 오전 10시 ~ 오후 5시 (데모 안내)",
  },
  /** 헌금 안내 (데모: 계좌는 실제 교회 확인 후 게시) */
  offering: {
    account: "계좌 정보는 교회 확인 후 게시됩니다 (데모)",
    note: "기부금 영수증은 문의 폼이나 사무실 전화로 신청해 주세요. 주민등록번호는 온라인으로 받지 않습니다.",
  },
  sns: {
    instagramUrl: "https://www.instagram.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
  naverMapUrl: "https://map.naver.com/p/search/다솜교회",
} as const;
