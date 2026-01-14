# AI Portfolio - ERP 전문 개발자 인터랙티브 포트폴리오

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3-orange?style=for-the-badge)

**AI 챗봇이 탑재된 인터랙티브 개발자 포트폴리오 웹사이트**

[Live Demo](https://ai-portfolio-cyan-gamma.vercel.app) | [GitHub](https://github.com/dev-leemin/ai-portfolio)

</div>

---

## 프로젝트 소개

AI Portfolio는 기존의 정적인 포트폴리오 사이트를 넘어, AI 챗봇을 통해 방문자가 실시간으로 개발자의 경력과 기술 스택에 대해 질문하고 답변받을 수 있는 인터랙티브 포트폴리오입니다.

### 왜 특별한가?

- **실시간 AI 대화**: Groq의 LLaMA 3.3 70B 모델로 경력, 프로젝트, 기술에 대해 즉시 응답
- **Bento Grid 레이아웃**: 모던하고 시각적으로 매력적인 프로젝트 카드 배치
- **Magnetic Button**: 마우스를 따라 움직이는 자석 효과 인터랙션
- **보안 중심 설계**: XSS, Injection, DoS 방지를 고려한 안전한 구현

---

## 프로젝트 경력

### 기업 ERP 프로젝트

| 프로젝트 | 기간 | 역할 | 기술 스택 |
|----------|------|------|-----------|
| **KORAIL ERP 급여시스템** | 2021.05 - 2022.04 | 개발자 | WebSquare, 전자정부, Tibero |
| **가스안전공사 차세대 ERP** | 2022.07 - 2023.03 | 개발자 | Nexacro, PowerMDD, Oracle |
| **Zeniel ERP** | 2023.04 - 2024.07 | 개발자 | WebSquare SP5, PostgreSQL, 전자정부 4.0 |
| **노지 HD맵 프로젝트** | 2024.11 - 2024.12 | 개발자 | WebSquare SP5, PostgreSQL |
| **인천환경공단 ERP** | 2024.07 - 현재 | **PL** | Nexacro, PostgreSQL, 전자정부 |

### 개인 프로젝트

| 프로젝트 | 기간 | 설명 | 기술 스택 |
|----------|------|------|-----------|
| **실시간 협업 화이트보드** | 2025.01 | WebSocket 기반 다중 사용자 실시간 드로잉 | Next.js 16, Socket.io, Canvas API, Zustand |
| **JobReady** | 2025.01 | AI 기반 취업 준비 SaaS 플랫폼 | Next.js 16, Prisma, PostgreSQL, Groq |
| **Lotto Predictor** | 2025.01 | ML 기반 로또 번호 분석 시스템 | Next.js 16, Prisma, ml-regression |

---

## 주요 기능

### 1. AI 챗봇

<details>
<summary><b>기능 상세 보기</b></summary>

- **Groq API 연동**: LLaMA 3.3 70B 모델 사용
- **실시간 스트리밍**: 타이핑 효과로 자연스러운 응답
- **컨텍스트 인식**: 프로젝트 경력과 기술 스택 정보 기반 응답
- **Rate Limiting**: 분당 10회 요청 제한으로 API 보호

#### 질문 예시
```
- "어떤 프로젝트를 했나요?"
- "WebSquare 경험이 있나요?"
- "백엔드 기술은 무엇을 사용하나요?"
- "ERP 개발 경력이 얼마나 되나요?"
```

</details>

### 2. Bento Grid 레이아웃

<details>
<summary><b>기능 상세 보기</b></summary>

- **프로젝트 카드**: 각 프로젝트를 시각적으로 표현
- **기술 스택 태그**: 사용 기술 한눈에 확인
- **반응형 그리드**: 모바일/태블릿/데스크탑 대응
- **호버 애니메이션**: 부드러운 인터랙션 효과

</details>

### 3. Magnetic Button

<details>
<summary><b>기능 상세 보기</b></summary>

- **자석 효과**: 마우스 위치에 따라 버튼이 자연스럽게 이동
- **스프링 애니메이션**: Framer Motion의 spring physics 적용
- **부드러운 복귀**: 마우스 이탈 시 원위치로 자연스럽게 복귀

</details>

### 4. 애니메이션

<details>
<summary><b>기능 상세 보기</b></summary>

- **스크롤 기반**: 요소가 뷰포트에 들어올 때 애니메이션
- **배경 라인**: 움직이는 배경 라인 효과
- **페이드 인/아웃**: 부드러운 요소 등장/퇴장
- **Stagger 효과**: 순차적인 요소 등장

</details>

---

## 기술 스택

### Frontend
| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 16.1 | App Router 기반 프레임워크 |
| React | 19 | UI 라이브러리 |
| TypeScript | 5.0 | 타입 안정성 |
| Tailwind CSS | 4.0 | 유틸리티 기반 스타일링 |
| Framer Motion | - | 애니메이션 라이브러리 |
| Lucide React | - | 아이콘 시스템 |

### AI & Backend
| 기술 | 용도 |
|------|------|
| Groq SDK | LLaMA 3.3 70B AI 모델 |
| Next.js API Routes | 서버리스 API 엔드포인트 |
| Turbopack | 빠른 개발 서버 빌드 |

---

## 보안 구현

### 1. XSS (Cross-Site Scripting) 방지

```typescript
// HTML 이스케이프 처리
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  return text.replace(/[&<>"'/]/g, (char) => map[char])
}
```

### 2. Injection 방지

```typescript
// 위험한 문자 패턴 필터링
export function sanitizeInput(input: string, maxLength = 500): string {
  let sanitized = input.slice(0, maxLength)
  sanitized = sanitized.replace(/[<>{}[\]\\;`|$()]/g, '')
  return sanitized.trim()
}
```

### 3. Rate Limiting (DoS 방지)

```typescript
// IP 기반 요청 제한
const RATE_LIMIT = {
  windowMs: 60 * 1000,  // 1분
  maxRequests: 10       // 최대 10회
}

function checkRateLimit(ip: string): boolean {
  const record = rateLimitMap.get(ip)
  // 제한 초과 시 false 반환
}
```

### 보안 체크리스트

- [x] XSS 방지 (입력값 HTML 이스케이프)
- [x] Command Injection 방지 (특수문자 필터링)
- [x] SQL Injection 방지 (파라미터화된 쿼리)
- [x] DoS 방지 (Rate Limiting, 입력 길이 제한)
- [x] Open Redirect 방지 (URL 검증)
- [x] 환경 변수 보호 (.env.local)
- [x] API 키 노출 방지 (서버 사이드 처리)

---

## 프로젝트 구조

```
ai-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # Groq AI API 엔드포인트
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   └── globals.css             # 글로벌 스타일
├── components/
│   ├── ChatBot.tsx             # AI 챗봇 컴포넌트
│   ├── BentoGrid.tsx           # 프로젝트 카드 그리드
│   ├── MagneticButton.tsx      # 자석 효과 버튼
│   ├── AnimatedLines.tsx       # 배경 라인 애니메이션
│   └── Header.tsx              # 네비게이션 헤더
├── lib/
│   └── utils.ts                # 보안 유틸리티 함수
├── public/
│   └── images/                 # 정적 이미지
└── .env.local                  # 환경 변수 (API 키)
```

---

## 시작하기

### 사전 요구사항

- Node.js 18.17 이상
- npm 또는 yarn
- Groq API 키 (무료)

### 1. 저장소 클론

```bash
git clone https://github.com/dev-leemin/ai-portfolio.git
cd ai-portfolio
```

### 2. 의존성 설치

```bash
npm install
```

### 3. Groq API 키 발급

1. [Groq Console](https://console.groq.com/keys)에 접속
2. Google 계정으로 회원가입
3. "Create API Key" 클릭
4. API 키 복사

### 4. 환경 변수 설정

`.env.local` 파일 생성:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 5. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인하세요.

### 6. 프로덕션 빌드

```bash
npm run build
npm start
```

---

## Groq API 특징

| 항목 | 내용 |
|------|------|
| **가격** | 무료 tier로 충분히 사용 가능 |
| **속도** | 매우 빠른 추론 속도 (실시간 스트리밍) |
| **모델** | LLaMA 3.3 70B (최신 오픈소스) |
| **제한** | 분당 요청 수 제한 있음 |

---

## 성능 최적화

- **React 19 최적화**: purity 규칙 준수, 불필요한 리렌더링 방지
- **지연 로딩**: 큰 컴포넌트는 dynamic import
- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **스트리밍 응답**: AI 응답을 청크 단위로 전송
- **캐싱**: 정적 자산 캐싱으로 로딩 속도 향상

---

## 개발 현황

### 완료된 기능

- [x] AI 챗봇 (Groq LLaMA 3.3 연동)
- [x] Bento Grid 프로젝트 카드
- [x] Magnetic Button 인터랙션
- [x] 스크롤 기반 애니메이션
- [x] 배경 라인 애니메이션
- [x] 보안 유틸리티 함수
- [x] Rate Limiting
- [x] 반응형 디자인
- [x] Vercel 배포

### 진행 예정

- [ ] 다크/라이트 모드 토글
- [ ] 다국어 지원 (영어)
- [ ] 프로젝트 상세 페이지
- [ ] SEO 최적화
- [ ] 성능 모니터링 대시보드
- [ ] Redis 기반 Rate Limiting

---

## 라이선스

MIT License

---

## 문의

AI 챗봇을 통해 실시간으로 프로젝트 경험과 기술 스택에 대해 질문하실 수 있습니다!

프로젝트에 대한 문의사항이나 협업 제안은 [Issues](https://github.com/dev-leemin/ai-portfolio/issues)에 등록해주세요.
