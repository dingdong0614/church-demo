@AGENTS.md

## doion 사이트 안내
- 사이트: 다솜교회 (교회, doion 영업용 데모)
- GitHub: dingdong0614/church-demo (origin). 기본 브랜치: master (main 아님)
- 라이브: https://dasom-church-demo.vercel.app. 코드 기본 도메인 dasom-church.kr 연결 여부는 확인 필요. Vercel 프로젝트: dasom-church-demo
- 스택: Next 16.3.6 (App Router) + React 19 + TypeScript + Tailwind, lenis. 문의 폼 서버 라우트 app/api/contact (검증·honeypot·인메모리 rate limit)
- 빌드·로컬 확인: npm run dev (localhost:3000), npm run build, npm run lint. 테스트 스크립트 없음.
- 배포: 기본 브랜치(master)에 push하면 Vercel 자동 배포(수동 vercel deploy는 저장소와 어긋나므로 쓰지 않음). 미리보기 브랜치 배포는 Vercel 로그인 보호. push는 대표 요청·승인 후에만.
- 폰트·문구 재생성 스크립트: 없음. 사진 출처는 docs/image-credits.md에 기록
- 검사 스크립트: 없음
- 건드리면 안 되는 것: 문의 폼의 서버 검증·honeypot·rate limit 제거 금지. 데모라 실제 교회 이름·인물로 오인될 표현 금지
- 공통 규칙: doion 공통 규칙은 doion 프로젝트 메모리(제작 방식·실무표준)를 따름.
