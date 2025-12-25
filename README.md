# AI Portfolio - ERP 전문 개발자 포트폴리오

보안을 최우선으로 고려한 최신 기술 스택 기반 AI 챗봇 포트폴리오

## 실제 프로젝트 경력

### 1. KORAIL ERP
- **기술 스택**: WebSquare, Java, Oracle
- **설명**: 철도 공사 ERP 시스템 개발

### 2. 가스안전공사 ERP
- **기술 스택**: Nexacro, Java, PostgreSQL
- **설명**: 안전관리 시스템

### 3. HD맵 노지 프로젝트
- **기술 스택**: JavaScript, Java
- **설명**: 지도 기반 노지 관리 시스템

### 4. Zeniel ERP
- **기술 스택**: WebSquare, Java, Oracle
- **설명**: 전사적 자원관리 시스템

### 5. 인천환경공단 ERP
- **기술 스택**: WebSquare, Java, PostgreSQL
- **설명**: 환경 관리 및 업무 자동화 시스템

## 주요 기능

### 1. AI 챗봇 (Groq API 연동)
- **실시간 스트리밍 응답** - Groq LLaMA 3.3 70B 모델 사용
- 프로젝트 경력과 기술 스택에 대한 자동 응답
- **보안 기능**: 입력값 sanitization, Rate limiting, 최대 길이 제한

### 2. Bento Grid 레이아웃
- 실제 프로젝트 경력 카드 표시
- 기술 스택 태그 표시
- 반응형 그리드 시스템
- 호버 애니메이션 효과

### 3. Magnetic Button
- 마우스를 따라 움직이는 자석 효과
- 부드러운 스프링 애니메이션

### 4. 애니메이션
- Framer Motion을 활용한 부드러운 애니메이션
- 스크롤 기반 애니메이션
- 배경 라인 애니메이션

## 보안 고려사항

### XSS (Cross-Site Scripting) 방지
```typescript
// 입력값 HTML 이스케이프
export function escapeHtml(text: string): string {
  const map = {
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

### Command Injection / SQL Injection 방지
```typescript
// 위험한 문자 패턴 제거
export function sanitizeInput(input: string, maxLength = 500): string {
  let sanitized = input.slice(0, maxLength)
  sanitized = sanitized.replace(/[<>{}[\]\\;`|$()]/g, '')
  return sanitized.trim()
}
```

### Rate Limiting (DoS 방지)
```typescript
// API 라우트에서 IP 기반 Rate Limiting
function checkRateLimit(ip: string): boolean {
  const limit = 10 // 분당 10회
  const windowMs = 60 * 1000 // 1분
  // ... 구현
}
```

## 기술 스택

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **AI**: Groq SDK (LLaMA 3.3 70B)
- **Build Tool**: Turbopack

## 시작하기

### 1. 설치
```bash
npm install
```

### 2. Groq API 키 발급 (무료)
1. [Groq Console](https://console.groq.com/keys)에 접속
2. 회원가입 (Google 계정으로 간편 가입 가능)
3. "Create API Key" 클릭
4. API 키 복사

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 API 키를 입력하세요:

```bash
GROQ_API_KEY=your_groq_api_key_here
```

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 5. 빌드
```bash
npm run build
```

### 6. 프로덕션 실행
```bash
npm start
```

## 프로젝트 구조

```
ai-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # Groq API 엔드포인트
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   └── globals.css             # 글로벌 스타일
├── components/
│   ├── ChatBot.tsx             # AI 챗봇 (Groq 연동)
│   ├── BentoGrid.tsx           # 프로젝트 카드
│   └── MagneticButton.tsx      # 자석 효과 버튼
├── lib/
│   └── utils.ts                # 보안 유틸리티
└── public/                     # 정적 파일
```

## AI 챗봇 기능

### Groq API 특징
- **완전 무료** - 무료 tier로 충분히 사용 가능
- **매우 빠른 속도** - 실시간 스트리밍 응답
- **LLaMA 3.3 70B** - 최신 오픈소스 모델
- **분당 10회 제한** - Rate limiting으로 보호

### 대화 예시
- "어떤 프로젝트를 했나요?"
- "WebSquare 경험이 있나요?"
- "사용하는 데이터베이스는?"
- "서버 관리 가능한가요?"

## 성능 최적화

- React 19의 purity 규칙 준수
- useState 초기값 함수로 Math.random() 한 번만 실행
- API 스트리밍으로 빠른 응답
- 이미지 최적화 (Next.js Image 컴포넌트)

## 보안 체크리스트

- [x] XSS 방지 (입력값 sanitization)
- [x] Command Injection 방지 (특수문자 필터링)
- [x] DoS 방지 (Rate limiting, 입력 길이 제한)
- [x] Open Redirect 방지 (URL 검증)
- [x] 환경 변수 암호화 (.env.local)
- [x] API 키 노출 방지 (서버 측 처리)

## 향후 개선 사항

- [ ] 실제 프로젝트 이미지 추가
- [ ] 프로젝트 상세 페이지 구현
- [ ] 다크/라이트 모드 토글
- [ ] 다국어 지원 (영어)
- [ ] SEO 최적화
- [ ] 성능 모니터링
- [ ] Redis 기반 Rate Limiting

## 문의

AI 챗봇을 통해 실시간으로 프로젝트 경험과 기술 스택에 대해 질문하실 수 있습니다!

## 라이선스

MIT
