/**
 * 사이트에서 쓰는 사진 (Unsplash 무료 라이선스, 대표 확인 후보 풀에서만 선택).
 * 작가·ID 기록은 docs/image-credits.md. 실제 계약 시 교회 사진으로 교체.
 */

export function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const PHOTOS = {
  sanctuary: { id: "photo-1519491050282-cf00c82424b4", alt: "나무 천장 아래 장의자가 놓인 따뜻한 조명의 예배당" },
  arches: { id: "photo-1787078989236-1b5e25e845e6", alt: "아치 아래 줄지어 놓인 나무 장의자" },
  worship: { id: "photo-1737524379854-d3c9d351fcd5", alt: "따뜻한 조명의 예배당에서 예배드리는 회중" },
  biblePages: { id: "photo-1504052434569-70ad5836ab65", alt: "성경 페이지를 넘기는 손" },
  bibleCoffee: { id: "photo-1604882737206-8a000c03d8fe", alt: "나무 탁자 위 성경과 커피 한 잔" },
  meal: { id: "photo-1774173822625-2415a7e9525d", alt: "여럿이 둘러앉아 함께 식사하는 테이블" },
  youth: { id: "photo-1762158008445-8355e4137bd0", alt: "눈을 감고 가슴에 손을 얹고 찬양하는 청년들" },
  windowShadow: { id: "photo-1529047033375-f402d3da24ca", alt: "벽에 비친 창문 그림자" },
  backlitTree: { id: "photo-1593264787646-f07221d3b7de", alt: "햇빛이 비치는 나무" },
  preaching: { id: "photo-1787625793434-069095bc1526", alt: "마이크를 들고 설교하는 목사" },
  youthGroup: { id: "photo-1783869085350-8e801ec86fcf", alt: "따뜻한 조명 아래 모인 청년부" },
  homeGroup: { id: "photo-1715102961710-529b3c6009e6", alt: "방 안에 모인 가족과 이웃" },
  congregation: { id: "photo-1765947382522-ca6d359af08c", alt: "밝은 예배당에서 예배드리는 회중" },
  clapping: { id: "photo-1769755013296-95f73288bb28", alt: "손뼉 치며 찬양하는 청년들" },
  door: { id: "photo-1550684393-8e0b1468ca57", alt: "나무로 된 교회 출입문" },
} as const;
