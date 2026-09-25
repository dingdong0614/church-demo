/**
 * 설교 목록 (영업용 데모, 더미). 새 설교 = 배열 맨 앞에 객체 하나.
 *
 * youtubeId: 유튜브 주소 v= 뒤 11자리. 넣으면 누를 때 그 자리에서 재생(라이트 임베드).
 * 비워 두면 시연 안내 화면이 뜹니다. 실제 운영에서는 유튜브 업로드를 감지해 자동으로 채웁니다.
 */

import { PHOTOS } from "@/data/photos";

export type Sermon = {
  title: string;
  verse: string;
  date: string;
  preacher: string;
  service: string;
  youtubeUrl: string;
  youtubeId: string;
};

export const SERMONS: readonly Sermon[] = [
  {
    title: "너희는 세상의 빛이라",
    verse: "마태복음 5:14-16",
    date: "2026.09.20",
    preacher: "김은혁 목사",
    service: "주일 2부",
    youtubeUrl: "https://www.youtube.com/",
    youtubeId: "",
  },
  {
    title: "돌아온 탕자, 기다리는 아버지",
    verse: "누가복음 15:11-24",
    date: "2026.09.13",
    preacher: "김은혁 목사",
    service: "주일 2부",
    youtubeUrl: "https://www.youtube.com/",
    youtubeId: "",
  },
  {
    title: "선한 이웃이 되어주는 삶",
    verse: "누가복음 10:25-37",
    date: "2026.09.06",
    preacher: "김은혁 목사",
    service: "주일 2부",
    youtubeUrl: "https://www.youtube.com/",
    youtubeId: "",
  },
  {
    title: "수요일 저녁, 말씀 앞에 머무는 시간",
    verse: "시편 23편",
    date: "2026.09.02",
    preacher: "김은혁 목사",
    service: "수요 기도회",
    youtubeUrl: "https://www.youtube.com/",
    youtubeId: "",
  },
];

/** 유튜브 ID가 없을 때 쓰는 대표 사진 */
export const SERMON_FALLBACK = PHOTOS.preaching;
