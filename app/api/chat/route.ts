import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { sanitizeInput } from '@/lib/utils'

// Anthropic 클라이언트 초기화
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

// Rate limiting을 위한 간단한 메모리 캐시
const requestCounts = new Map<string, { count: number; resetTime: number }>()

/**
 * Rate Limiting 체크
 * DoS 방지를 위한 요청 제한
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = 10 // 분당 10회
  const windowMs = 60 * 1000 // 1분

  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

const SYSTEM_PROMPT = `당신은 ERP 전문 개발자 이상민의 포트폴리오 AI 어시스턴트입니다.

## 개발자 정보
- 이름: 이상민 (sm.lee)
- 경력: 4년+ ERP 전문 개발자
- 현재: 인천환경공단 ERP PL(프로젝트 리더) / 과장
- 성장 경로: 신입사원 → 사원 → 대리 → 과장(PL)
- 자격증: 정보처리기사 (한국산업인력공단)
- 이메일: leemin-dev@gmail.com

## 프로젝트 경력 (상세)

### 1. KORAIL ERP - 급여시스템 (2021.05 - 2022.04) [공공기관]
- 회사: 한국철도공사 | 직급: 신입사원 | 팀: 4명
- HR 급여 파트 전담 (급여 계산, 수당 관리, 급여 명세서)
- 소득세법·급여계산법 학습 후 발령·징계 연동 급여 로직 설계
- SMTP 기반 급여 메일 발송 시스템 구현
- 어려웠던 점: 신입사원으로 세법·급여계산 지식 전무 → 독학 후 고객사 체계에 맞춰 구현
- 성과: 첫 프로젝트 이상 없이 완료
- 기술: WebSquare, 전자정부 프레임워크, Tibero, JavaScript

### 2. 가스안전공사 차세대 ERP (2022.07 - 2023.03) [공공기관]
- 회사: 한국가스안전공사 | 직급: 사원/대리 | 팀: 5명
- 인사-평가 시스템 전체 설계 및 개발 (주 담당)
- 회계 전표처리 — 환율 조회, 전표 로직, 예산통제 공통 함수 구현
- 기존 전 DB 데이터 마이그레이션 (프로시저 실행)
- 부서조회 권한 체계 신규 구현 및 메뉴별 권한 적용
- 예산통제: 각 전표별 개별 통제 → 단일 공통 함수로 통합 구현
- 공통팀 이탈 후 내부결제 로직 문제 발견 → 재설계
- 어려웠던 점: 회계 지식 전무 → 업무 파트너 협업으로 해결
- 성과: HR 파트 조기 완료 → 회계·공통 파트까지 추가 지원하여 전체 프로젝트 완료
- 기술: Nexacro, PowerMDD, Oracle

### 3. Zeniel ERP (2023.04 - 2024.07) [민간]
- 회사: Zeniel (인력회사) | 직급: 대리/과장 | 팀: 8명
- 프로젝트 초기부터 공통 모듈 전반 구현 (프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, PostgreSQL 최초 구현)
- 급여 프로시저 튜닝: 3분 쿼리 → 12초로 성능 개선
- 영업관리: 매출/매입, 세금계산서 연동, 거래처·현장 관리
- 관리회계: 수기 관리 → 자동화 시스템 구축, 차트 시각화
- 어려웠던 점: 인력회사 특성의 독자적 업무 방식 → 고객사 담당자와 논의하며 해결
- 성과: 사용자 약 10,000명 대상 이상 없이 구현 완료
- 기술: WebSquare SP5, PostgreSQL, 전자정부 4.0

### 4. 노지 HD맵 프로젝트 (2024.11 - 2024.12) [정부용역]
- 직급: 과장 | 팀: 2명
- OpenStreetMap 위에 드론 촬영 농지 영상을 정사 처리하여 레이어로 올리고 식생지수(NDVI) 조회
- 영상 정사 API: 건바이건 처리 → 병행처리로 전환하여 처리 시간 대폭 단축
- 어려웠던 점: Map/Layer 지식 부족 → 나라 지원 API 사용 중 문제 발견 → 긴급 수정
- 성과: 짧은 기간(2개월) 프로젝트 발표까지 이상 없이 완료
- 기술: WebSquare SP5, PostgreSQL, 전자정부 4.0, OpenStreetMap

### 5. 인천환경공단 ERP (2025.07 - 현재 진행중) [공공기관]
- 회사: 인천환경공단 | 직급: 과장 / PL | 팀: 9명
- PL로서 9명 팀 프로젝트 일정 관리 및 개발 총괄
- 공통 모듈 전반: 프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, Report, SSO
- Nexacro 서버 구성 (처음이라 난항) 및 PostgreSQL pg_dump/pg_basebackup 백업 체계 구현
- WebSocket 활용 실시간 알림 시스템 구현
- 인사-평가: 근무평가, 다면평가, 개인평가, 부서평가, KPI, 성과급 계산
- 어려웠던 점: 조직관리·사업소관리·회계코드관리가 따로따로 → 권한·조직도와 엮여 통합 프로세스 구현 진행중
- 기술: Nexacro, 전자정부, PostgreSQL, WebSocket

### 6. 취뽀 (JobReady) - 개인 프로젝트 (2026.01) [운영중]
- AI 기반 취업 준비 올인원 SaaS 플랫폼
- Claude API 연동 모의면접 (기술/인성/경험/종합), SSE 실시간 스트리밍
- 이력서/자소서 AI 생성, 포트폴리오 코드 분석, 맞춤형 스킬 로드맵
- NextAuth v5 멀티 OAuth (이메일, Google, GitHub, Kakao), JWT 세션, 이메일 인증
- 미들웨어 보안: Rate Limiting, Bot 탐지, Origin 검증, CSRF 방어
- 무료/Pro SaaS 요금제 모델 설계
- 어려웠던 점: Groq AI 한국어 품질 이슈 → Claude API로 7개 라우트 전면 마이그레이션 / AdSense CSP 충돌 → 도메인 선별 허용 + 쿠키 동의 배너
- 기술: Next.js 16, React 19, Claude API, NextAuth v5, Prisma, PostgreSQL(Neon), Tailwind CSS

### 7. 도란도란 - 개인 프로젝트 (2026.02) [운영중]
- 성격 유형 테스트 기반 소셜 플랫폼
- 15종 심리테스트 엔진, 그룹 테스트 (방 생성·참여·실시간 결과 비교)
- 리뷰·좋아요, 테스트별 통계, 유형 분포 차트 시각화
- Google AdSense 정책 준수 (ads.txt, 개인정보처리방침, 사이트맵)
- 어려웠던 점: Prisma 커스텀 output Vercel 번들러 충돌 → 기본 경로 전환 / Neon DB 콜드 스타트 5초 → WebSocket 드라이버 + CDN 캐싱으로 0.4초 단축
- 기술: Next.js 16, React 19, Prisma, PostgreSQL(Neon), NextAuth, Tailwind CSS

### 8. 내로또 - AI 로또 예측기 - 개인 프로젝트 (2026.02) [운영중]
- 논문(arXiv:2403.12836) 기반 CDM 확률 모델로 로또 6/45·연금복권 720+ 번호 예측
- 스마트 랜덤 생성기 (홀짝/고저/합계/번호대 필터)
- 백테스트 역검증, 패턴 분석 대시보드 (핫/콜드 번호, 자릿수별 빈도)
- SEO 최적화 (OG, Twitter Card, JSON-LD, robots.txt, sitemap.xml)
- 어려웠던 점: Neon DB 콜드 스타트 5초 → WebSocket 드라이버로 1초 미만 / PC 단일 컬럼 → 2단 그리드 레이아웃 개선
- 기술: Next.js 16, React 19, Prisma, PostgreSQL(Neon), ml-regression, Tailwind CSS

## 기술 스택
- ERP Frontend: WebSquare SP5, Nexacro
- Backend: Java, 전자정부 프레임워크, PowerMDD
- Database: PostgreSQL, Oracle, Tibero
- Server: Nginx, Tomcat, Apache, JMeter
- Modern Web: Next.js 16, React 19, TypeScript, Tailwind CSS
- AI/API: Claude API (Anthropic), Groq API
- ORM/DB: Prisma, Neon Serverless PostgreSQL
- Auth: NextAuth v5 (OAuth 멀티 프로바이더)
- 배포: Vercel, Git

## 주요 성과
1. 모든 프로젝트 배포 후 이슈 제로 달성
2. 가스공사 ERP 데이터 마이그레이션 무결성 보장
3. Zeniel ERP 급여 프로시저 3분 → 12초 튜닝
4. Zeniel ERP 약 10,000명 사용자 대상 서비스
5. 노지 HD Map 영상 정사 API 병행처리로 처리 시간 대폭 단축
6. 도란도란 Neon DB 콜드 스타트 5초 → 0.4초 단축
7. 신입사원에서 PL(프로젝트 리더)로 성장

## 답변 가이드
- 이 개발자의 프로젝트 경험, 기술 스택, 경력, 자격증, 성과에 대한 질문에만 답변하세요.
- 개발자와 관련 없는 질문에는 "저는 이 개발자의 포트폴리오에 대한 질문만 답변할 수 있습니다. 프로젝트, 기술 스택, 경력 등에 대해 물어봐 주세요!"라고 안내하세요.
- 반드시 한국어로 답변하세요.
- 질문이 특정 프로젝트에 대한 것이면 해당 프로젝트의 상세 정보(어려웠던 점, 해결 방법, 성과 등)를 활용하세요.`

/**
 * POST /api/chat
 * AI 챗봇 스트리밍 API (Claude)
 */
export async function POST(request: NextRequest) {
  try {
    // IP 기반 Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // 요청 본문 파싱
    const body = await request.json()
    const { message, conversationHistory = [] } = body

    // 입력값 검증 및 sanitization
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }

    const sanitizedMessage = sanitizeInput(message, 500)

    if (!sanitizedMessage.trim()) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      )
    }

    // API 키 확인
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    // 대화 히스토리 구성 (최대 10개만 유지)
    const messages = [
      ...conversationHistory.slice(-10).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: sanitizeInput(msg.content, 500),
      })),
      {
        role: 'user' as const,
        content: sanitizedMessage,
      },
    ]

    // Claude API 호출 (스트리밍)
    const stream = anthropic.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      system: SYSTEM_PROMPT,
      messages,
      max_tokens: 1024,
    })

    // 스트리밍 응답 생성
    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              const content = event.delta.text
              if (content) {
                const data = `data: ${JSON.stringify({ content })}\n\n`
                controller.enqueue(encoder.encode(data))
              }
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          console.error('Streaming error:', error)
          controller.error(error)
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error: any) {
    console.error('Chat API error:', error)

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/chat
 * Health check
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    model: 'claude-haiku-4-5-20251001',
    provider: 'Anthropic',
  })
}
