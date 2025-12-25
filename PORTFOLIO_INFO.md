# 📋 포트폴리오 배포 정보

## 🌐 배포 URL
- **프로덕션**: https://ai-portfolio-cyan-gamma.vercel.app
- **GitHub**: https://github.com/dev-leemin/ai-portfolio

## 📊 프로젝트 요약

### 포트폴리오 개요
ERP 전문 개발자의 실무 경력과 기술 스택을 보여주는 AI 챗봇 포함 포트폴리오 웹사이트

### 주요 특징
1. **AI 챗봇**: Groq API를 활용한 실시간 대화형 인터페이스
2. **프로젝트 카드**: 6개의 실무 프로젝트 경력 표시
3. **반응형 디자인**: 모바일/태블릿/데스크톱 완벽 지원
4. **보안**: XSS, Command Injection, DoS 방지 구현

---

## 🎨 포함된 프로젝트

### 1. KORAIL ERP - 급여시스템
- **기간**: 2021.05 - 2022.04
- **회사**: 한국철도공사
- **역할**: 개발자
- **기술**: WebSquare, 전자정부 프레임워크, Tibero, JavaScript

### 2. 가스안전공사 차세대 ERP
- **기간**: 2022.07 - 2023.03
- **회사**: 한국가스안전공사
- **역할**: 개발자
- **기술**: Nexacro, PowerMDD, Oracle

### 3. Zeniel ERP
- **기간**: 2023.04 - 2024.07
- **회사**: Zeniel
- **역할**: 개발자
- **기술**: WebSquare SP5, PostgreSQL, 전자정부 4.0

### 4. 노지 HD맵 프로젝트
- **기간**: 2024.11 - 2024.12
- **역할**: 개발자
- **기술**: WebSquare SP5, PostgreSQL, 전자정부 4.0

### 5. 인천환경공단 ERP
- **기간**: 2024.07 - 진행중
- **회사**: 인천광역시환경공단
- **역할**: PL (프로젝트 리더)
- **기술**: Nexacro, 전자정부, PostgreSQL

### 6. 실시간 협업 화이트보드
- **기간**: 2025.12
- **유형**: 개인 프로젝트
- **역할**: 풀스택 개발자
- **기술**: Next.js 16, React 19, Socket.io, Canvas API, Zustand
- **GitHub**: https://github.com/dev-leemin/collab-whiteboard
- **주요 기능**:
  - WebSocket 실시간 협업
  - Canvas API 드로잉
  - 다중 사용자 관리
  - Undo/Redo 히스토리

---

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Backend
- **AI**: Groq SDK (LLaMA 3.3 70B)
- **Runtime**: Node.js

### DevOps
- **배포**: Vercel
- **버전 관리**: Git/GitHub
- **Build Tool**: Turbopack

---

## 🔒 보안 기능

### 1. XSS 방지
```typescript
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

### 2. Command Injection 방지
```typescript
export function sanitizeInput(input: string, maxLength = 500): string {
  let sanitized = input.slice(0, maxLength)
  sanitized = sanitized.replace(/[<>{}[\]\\;`|$()]/g, '')
  return sanitized.trim()
}
```

### 3. Rate Limiting (DoS 방지)
- IP 기반 분당 10회 제한
- 입력 길이 제한 (500자)
- API 호출 제한

---

## 📈 성능 최적화

1. **React 19 최적화**
   - useState 초기값 함수화
   - Purity 규칙 준수

2. **API 스트리밍**
   - Groq API의 실시간 스트리밍 응답
   - 빠른 사용자 경험

3. **이미지 최적화**
   - Next.js Image 컴포넌트 사용
   - 자동 최적화 및 lazy loading

4. **Build 최적화**
   - Turbopack 사용
   - 빠른 빌드 및 HMR

---

## 🎯 주요 기능 상세

### AI 챗봇
- **모델**: Groq LLaMA 3.3 70B
- **스트리밍**: 실시간 응답
- **보안**: 입력 sanitization, Rate limiting
- **대화 주제**: 프로젝트 경력, 기술 스택, 경험

### Bento Grid 레이아웃
- 6개 프로젝트 카드
- 기술 스택 태그
- 호버 애니메이션
- 이미지 확대 모달
- 반응형 그리드

### Magnetic Button
- 마우스 추적 자석 효과
- 스프링 애니메이션
- Framer Motion 활용

---

## 📱 반응형 지원

- **모바일**: 320px ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px 이상

모든 컴포넌트가 완벽한 반응형 지원

---

## 🚀 배포 과정

1. GitHub Repository 생성
2. Vercel 연동
3. 자동 배포 설정
4. 환경 변수 설정 (GROQ_API_KEY)
5. 프로덕션 배포 완료

### 배포 정보
- **플랫폼**: Vercel
- **빌드 시간**: ~40초
- **자동 배포**: main 브랜치 푸시 시

---

## 📞 연락처

- **이름**: sm.lee
- **GitHub**: [@dev-leemin](https://github.com/dev-leemin)
- **Email**: leemin-dev@gmail.com
- **포트폴리오**: https://ai-portfolio-cyan-gamma.vercel.app

---

## 📝 업데이트 이력

### 2025.12.25
- ✅ 포트폴리오 초기 배포
- ✅ AI 챗봇 기능 구현 (Groq API)
- ✅ 6개 프로젝트 카드 추가
- ✅ 실시간 협업 화이트보드 프로젝트 추가
- ✅ 보안 기능 구현 (XSS, Command Injection, DoS 방지)
- ✅ Vercel 프로덕션 배포 완료

---

## 🎓 배운 점

1. **Next.js 16 + React 19**
   - App Router 구조
   - Server/Client Components
   - API Routes
   - Turbopack 빌드

2. **AI 통합**
   - Groq API 연동
   - 스트리밍 응답 처리
   - Rate limiting

3. **보안**
   - XSS 방지
   - Input sanitization
   - Rate limiting
   - 환경 변수 관리

4. **UI/UX**
   - Framer Motion 애니메이션
   - Tailwind CSS 4
   - 반응형 디자인
   - Bento Grid 레이아웃

5. **배포**
   - Vercel 배포 프로세스
   - 환경 변수 설정
   - 자동 배포 파이프라인

---

## 🔮 향후 계획

- [ ] 프로젝트 상세 페이지
- [ ] 다크/라이트 모드
- [ ] 다국어 지원 (한/영)
- [ ] SEO 최적화
- [ ] 성능 모니터링
- [ ] 추가 개인 프로젝트
