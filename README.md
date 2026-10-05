# 화양계곡 능운대펜션

2026-10-03 새 벤치마크를 반영해 개편한 홈페이지입니다. GitHub Pages 공개 주소는 [hwayanghotel.github.io](https://hwayanghotel.github.io/)입니다. 실제 풍경으로 시작하는 화면, 흰 바탕과 Pretendard 단일 서체, 사진 중심의 객실·식당 소개를 적용한 정적 프론트입니다. **운영용 API 서버·DB·로그인·관리자 기능이 없습니다.**

- 숙박: [떠나요 예약 현황](https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342)
- 식사: `043-832-4281` 전화 연결
- 주요 10페이지: 홈, 객실 비교와 4개 상세, 계곡과 산책, 식당, 오시는 길, 이용 안내
- 모바일 예약 영역, 키보드로 조작하는 사진 확대, FAQ, 주소 복사·지도 연결
- 평상·자체 예약 폼·Firebase·고객정보 수집 없음

## 실행

Node.js 22.12 이상이 필요합니다.

```bash
npm ci
npm run dev
```

기본 주소: [http://localhost:4321](http://localhost:4321). 이미지와 폰트가 포함되어 있어 개발 서버를 켜기 위해 기존 사이트나 예약 API에 연결할 필요가 없습니다.

```bash
npm run check
npm run build
npm run preview
```

배포 파일은 `dist/`입니다. 빌드용 Node는 사이트의 별도 API 서버가 아닙니다. `src`, `research`, `node_modules`를 배포하지 않습니다.

## 페이지

| 주소 | 내용 |
|---|---|
| `/` | 홈 |
| `/rooms/` | 네 객실 비교 |
| `/rooms/neungundae/` | 능운대 |
| `/rooms/haksodae/` | 학소대 |
| `/rooms/waryongam/` | 와룡암 |
| `/rooms/cheomseongdae/` | 첨성대 |
| `/valley/` | 계곡과 산책 |
| `/dining/` | 식당·전화 예약 |
| `/visit/` | 주소·지도·차량 진입 |
| `/guide/` | 이용 안내·FAQ |

이 밖에 404, 사이트맵, 기존 주요 Wix URL 10개의 호환 페이지가 있습니다. 미배포 Angular의 주요 해시 링크도 새 경로로 연결합니다. 호환 HTML은 HTTP 301과 다릅니다. 실제 301은 지원 호스팅의 `_redirects` 설정을 이용합니다.

## 수정할 곳

- [src/data/site.ts](src/data/site.ts): 상호·전화·주소·예약 링크·객실·FAQ
- [src/pages](src/pages): 페이지별 내용
- [src/styles/global.css](src/styles/global.css): 색·폰트·레이아웃·모바일
- [src/data/asset-sources.json](src/data/asset-sources.json): 사용 사진 원본과 조사 자산 ID
- [src/assets/photos](src/assets/photos): 선별한 25개 원본
- [scripts/prepare-assets.mjs](scripts/prepare-assets.mjs): 크기별 WebP와 공유 이미지 생성
- [public/fonts](public/fonts): 공식 글꼴과 공식 Pretendard 서브셋. 라이선스는 `public/licenses`에 보존

사진을 추가·수정하면 원본 대응표를 수정하고 `npm run assets`를 실행하세요. 빌드 전에도 자동 실행됩니다. 원본보다 확대하지 않으며 400·740·1100·1600px 중 가능한 크기만 만듭니다. 큰 풍경·식사 배너는 2000·2400px도 제공하며 모바일 세로 크롭에 필요한 해상도로 선택합니다. 홈은 모바일에서 별도의 세로 계곡 사진을 사용합니다.

## 검증

```bash
npx playwright install chromium
npm run verify
```

Playwright는 PC·모바일 Chromium에서 모든 페이지, 링크, 접근성, 사진 확대, 주소 복사, FAQ, 메뉴, 기존 URL, 404를 검사합니다. 별도 설치한 Chromium을 쓰려면 `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`로 실행 파일을 지정할 수 있습니다.

미리보기 실행 후 `node scripts/audit-site.mjs`로 전체 화면 캡처·실제 이미지 로드·JavaScript 없는 기본 동작을 확인합니다. 결과는 `artifacts/`에 기록됩니다. `npm run format`은 소스 형식을 정리합니다.

## 운영과 배포

`main`에 소스를 푸시하면 [배포 워크플로](.github/workflows/pages.yml)가 검사·빌드 후 결과를 `gh-pages`에 게시하고 GitHub Pages 빌드를 요청합니다. GitHub Pages 설정은 **Deploy from a branch → gh-pages → / (root)**를 사용합니다. 사용자 지정 도메인은 설정하지 않습니다.

- [공개 사이트](https://hwayanghotel.github.io/)
- [배포 실행 기록](https://github.com/hwayanghotel/hwayanghotel.github.io/actions)
- [구현·검증 기록](docs/IMPLEMENTATION.md)
- [배포와 운영 정보 수정 안내](docs/DEPLOYMENT.md)

개편 조사 자료, 전체 원본 아카이브, 이전 시안과 캡처는 별도 로컬 작업 폴더에 보존했습니다. 이 저장소에는 빌드에 필요한 소스·선별 원본·서비스 이미지·폰트와 라이선스를 포함합니다. 기존 Angular 소스는 Git 이력과 기존 백업 브랜치에 남아 있습니다.

요금은 고정 표시하지 않고 떠나요·전화로 안내합니다. 첨성대 최대 3인은 2026-10-02 예약 화면 기준으로 반영했습니다. 공개 운영 전 객실 정원·시설의 현재 모습, 사진 사용권, 사업자 정보, 차량 진입 절차를 확인할 항목은 배포 안내에 정리했습니다.
