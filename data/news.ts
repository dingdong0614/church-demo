/**
 * 이번 주 주보 · 교회 소식 · 일정 (영업용 데모, 더미 데이터).
 * 실제 운영: 주보는 PDF 한 번 업로드, 소식은 관리자 화면에서 작성, 일정은 구글 캘린더 입력으로 자동 반영.
 */

export const BULLETIN = {
  /** 주보 기준 주일 (실제 운영에서는 최신 주보가 자동 선택됨) */
  dateLabel: "2026년 9월 27일",
  weekLabel: "9월 넷째 주일",
  pdf: "/bulletin/dasom-2026-09-27.pdf",
  sermon: { title: "오늘을 사는 믿음", verse: "히브리서 11:1-6", preacher: "김은혁 목사" },
  /** 주일 2부 예배 순서 */
  order: [
    { part: "예배로 부름", who: "인도자" },
    { part: "찬송", who: "다 함께" },
    { part: "대표 기도", who: "구역장" },
    { part: "성경 봉독", who: "히브리서 11:1-6" },
    { part: "설교", who: "오늘을 사는 믿음" },
    { part: "봉헌과 광고", who: "" },
    { part: "축도", who: "김은혁 목사" },
  ],
  familyWorship: "이번 주 가정예배는 시편 1편을 함께 읽습니다. 순서지는 주보 뒷면에 있어요.",
} as const;

export const NOTICES = [
  {
    date: "09.21",
    category: "새가족",
    title: "10월 새가족 모임이 시작됩니다",
    summary: "10월 5일부터 4주 동안, 주일 2부 예배 후 2층 소예배실에서 차 한 잔 나누며 교회를 소개합니다.",
  },
  {
    date: "09.14",
    category: "나눔",
    title: "가을 이웃 나눔 바자회 봉사자를 찾습니다",
    summary: "10월 18일 예배당 앞마당. 물품 기증은 10월 11일 주일까지 친교실로 가져와 주세요.",
  },
  {
    date: "09.07",
    category: "친교",
    title: "주일 2부 예배 후 점심 교제 다시 시작",
    summary: "처음 오신 분도 친교실로 오세요. 새가족부가 자리를 마련해 둡니다.",
  },
  {
    date: "09.07",
    category: "안내",
    title: "수요 기도회 영상도 올라갑니다",
    summary: "사정상 못 오신 분은 목요일 오전부터 유튜브에서 다시 보실 수 있습니다.",
  },
] as const;

export const EVENTS = [
  { date: "10.05", day: "주일", title: "새가족 모임 1주차", time: "오후 1:00", place: "2층 소예배실" },
  { date: "10.18", day: "토", title: "가을 이웃 나눔 바자회", time: "오전 10:00", place: "예배당 앞마당" },
  { date: "10.26", day: "주일", title: "추수감사 준비 찬양의 밤", time: "오후 6:00", place: "본당" },
] as const;
