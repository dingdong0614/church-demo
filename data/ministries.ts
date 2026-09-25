/** 공동체 소개 (영업용 데모). 새 모임 = 배열에 객체 하나. */

import { PHOTOS } from "@/data/photos";

export const MINISTRIES = [
  {
    name: "새가족부",
    desc: "처음 오신 분들이 편안하게 정착할 수 있도록 한 학기 동안 동행합니다.",
    when: "주일 2부 예배 후",
    photo: PHOTOS.meal,
  },
  {
    name: "말씀 묵상 모임",
    desc: "매주 수요일 저녁, 삶으로 읽어내는 말씀 나눔 모임입니다.",
    when: "수요일 저녁",
    photo: PHOTOS.biblePages,
  },
  {
    name: "구역 공동체",
    desc: "가까운 이웃과 함께 예배하고 서로의 삶을 돌보는 소그룹입니다.",
    when: "지역별 모임",
    photo: PHOTOS.homeGroup,
  },
] as const;

/** 앨범 (지난 모임 사진). 실제 운영: 여러 장 올리면 촬영일 순으로 자동 정렬 */
export const ALBUM = [
  { photo: PHOTOS.meal, caption: "9월 21일, 2부 예배 후 점심", span: "wide" },
  { photo: PHOTOS.worship, caption: "주일 2부 예배", span: "tall" },
  { photo: PHOTOS.youthGroup, caption: "금요일 청년부 모임", span: "" },
  { photo: PHOTOS.clapping, caption: "주일 찬양", span: "" },
] as const;
