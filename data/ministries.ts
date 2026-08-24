/** 사역/공동체 소개 항목. 새 항목 추가 = 배열에 객체 하나 추가로 끝. */

export const MINISTRIES = [
  {
    name: "새가족부",
    desc: "처음 오신 분들이 편안하게 정착할 수 있도록 한 학기 동안 동행합니다.",
    image:
      "https://images.unsplash.com/photo-1604882737206-8a000c03d8fe?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "말씀 묵상 모임",
    desc: "매주 수요일 저녁, 삶으로 읽어내는 말씀 나눔 모임입니다.",
    image:
      "https://images.unsplash.com/photo-1600019246742-3b66977db044?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "구역 공동체",
    desc: "가까운 이웃과 함께 예배하고 서로의 삶을 돌보는 소그룹입니다.",
    image:
      "https://images.unsplash.com/photo-1565571008567-59a4987d6646?auto=format&fit=crop&w=1400&q=80",
  },
] as const;
