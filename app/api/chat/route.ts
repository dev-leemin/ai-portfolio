import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'
import { sanitizeInput } from '@/lib/utils'

// Groq 클라이언트 초기화
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
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

/**
 * POST /api/chat
 * AI 챗봇 스트리밍 API
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
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    // 대화 히스토리 구성 (최대 10개만 유지)
    const messages = [
      {
        role: 'system',
        content: `당신은 ERP 전문 개발자의 포트폴리오 AI 어시스턴트입니다.

## 프로젝트 경력 (상세)

### 1. KORAIL ERP - 급여시스템 (2021.05 - 2022.04)
- 회사: 한국철도공사
- 역할: 개발자
- 주요 업무: 급여 시스템 개발 담당
- 기술 스택: WebSquare, 전자정부 프레임워크, Tibero, JavaScript
- 상세: 전자정부 프레임워크 기반으로 급여 시스템 화면 구현 및 Tibero DB 연동

### 2. 가스안전공사 차세대 ERP (2022.07 - 2023.03)
- 회사: 한국가스안전공사
- 역할: 개발자
- 주요 업무: 구 ERP를 차세대 ERP로 마이그레이션 (사용성 개선)
- 담당 분야:
  * 인사-평가 시스템 개발 (주 업무)
  * 데이터베이스 데이터 마이그레이션
  * 재무-회계 일부 (미약)
  * 간이결재 시스템 관리
  * 권한 관리
- 기술 스택: Nexacro (프론트), PowerMDD (백엔드), Oracle

### 3. Zeniel ERP (2023.04 - 2024.07)
- 회사: Zeniel
- 역할: 개발자
- 담당 분야: 시스템, 공통, 관리회계(경영관리), 대사우 시스템
- 주요 업무:
  * 사용자/권한/메뉴 관리
  * 오류사항 관리
  * 파일 업다운로드
  * 그룹웨어 연동
  * 관리회계: 재무회계 데이터를 경영관리 관점으로 가공하여 조회
- 기술 스택: WebSquare SP5, PostgreSQL, 전자정부 4.0

### 4. 노지 HD맵 프로젝트 (2024.11 - 2024.12)
- 역할: 개발자
- 프로젝트 설명: 드론이 땅을 촬영한 영상을 업로드하고, 정사 처리하여 하나의 이미지로 합성. 식생지수 조회까지 구현
- 주요 업무:
  * 시스템 구축
  * 데이터베이스 관리
  * 플랫폼 생성
  * 드론 영상 업로드 기능
  * 이미지 정사 처리 (AI 부분은 불참)
  * 식생지수 조회 기능
- 기술 스택: WebSquare SP5, PostgreSQL, 전자정부 4.0

### 5. 인천환경공단 ERP (2024.07 - 현재 진행중)
- 회사: 인천광역시환경공단
- 역할: PL (프로젝트 리더)
- 담당 분야: 공통, 시스템, 인사-평가
- 주요 업무:
  * SSO 연계
  * Handy 전자결재 연동
  * 공통 모듈 개발
  * 시스템 관리
  * 인사-평가 시스템
  * PL로서 프로젝트 총괄
- 기술 스택: Nexacro, 전자정부, PostgreSQL

## 기술 스택 정리
- Frontend: WebSquare (SP5), Nexacro
- Backend: Java, 전자정부 프레임워크, PowerMDD
- Database: PostgreSQL, Oracle, Tibero
- Server & Deployment: Nginx, Tomcat, Apache, JMeter
- 기타: JavaScript, 그룹웨어 연동, SSO, 전자결재 시스템

## 자격증
- 정보처리기사 (한국산업인력공단)

## 주요 성과
1. 프로젝트 무결함 배포: 모든 프로젝트 배포 후 이슈 제로 달성
2. 데이터 마이그레이션 성공: 구 ERP 시스템 데이터를 무결성 보장하며 완전 이관
3. 대용량 데이터 처리 최적화: 성능 문제 해결 및 효율적인 대용량 처리 구현

## 관심 기술 & 학습 중
- Next.js & React: 현대적인 웹 개발 프레임워크 (현재 포트폴리오 프로젝트로 학습 중)
- AI/ML: AI 기술 및 머신러닝 활용
- AWS Cloud Systems: 클라우드 인프라 및 서비스
- Docker & Kubernetes: 컨테이너 오케스트레이션

## 답변 가이드
- 프로젝트 경험과 기술 스택에 대해 구체적이고 상세하게 답변하세요
- 한국어로 전문적이고 명확하게 작성하세요
- 질문이 특정 프로젝트에 대한 것이면 해당 프로젝트의 상세 정보를 활용하세요
- 자격증, 주요 성과, 관심 기술에 대한 질문에도 상세히 답변하세요`,
      },
      ...conversationHistory.slice(-10).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: sanitizeInput(msg.content, 500),
      })),
      {
        role: 'user',
        content: sanitizedMessage,
      },
    ]

    // Groq API 호출 (스트리밍)
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile', // 무료이면서 빠른 모델
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 1024,
      stream: true, // 스트리밍 활성화
    })

    // 스트리밍 응답 생성
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || ''
            if (content) {
              // SSE 형식으로 전송
              const data = `data: ${JSON.stringify({ content })}\n\n`
              controller.enqueue(encoder.encode(data))
            }
          }
          // 스트림 종료
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          console.error('Streaming error:', error)
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error: any) {
    console.error('Chat API error:', error)

    // 에러 응답
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
    model: 'llama-3.3-70b-versatile',
    provider: 'Groq',
  })
}
