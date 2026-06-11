# Nova Studio 샘플 웹페이지

Codex로 처음 만든 화려한 샘플 웹페이지입니다. 지금 단계는 프론트엔드 UI이며, 다음 단계에서 동적 서버 API와 DB 연동을 붙일 수 있습니다.

## 실행 방법

PowerShell에서 프로젝트 폴더로 이동한 뒤 실행합니다.

```powershell
.\start-server.ps1
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

서버를 끄려면 PowerShell 창에서 `Ctrl + C`를 누르면 됩니다.

## 파일 구성

- `index.html`: 페이지 구조
- `styles.css`: 디자인과 반응형 레이아웃
- `app.js`: 카운터 애니메이션과 버튼 효과
- `server.mjs`: 로컬 개발 서버
- `start-server.ps1`: 실행용 PowerShell 스크립트

## 다음 단계

1. 문의 폼을 추가합니다.
2. `server.mjs`에 API 주소를 만듭니다.
3. 버튼/폼이 서버와 통신하게 합니다.
4. Supabase 같은 DB에 데이터를 저장합니다.
