import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind 클래스 병합 유틸리티
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * XSS 방지: HTML 이스케이프
 * 사용자 입력값을 안전하게 렌더링하기 위한 함수
 */
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

/**
 * 입력값 검증: 특수문자 제한
 * Command Injection, SQL Injection 방지
 */
export function sanitizeInput(input: string, maxLength: number = 500): string {
  // 최대 길이 제한
  let sanitized = input.slice(0, maxLength)

  // 위험한 문자 패턴 제거
  sanitized = sanitized.replace(/[<>{}[\]\\;`|$()]/g, '')

  // 연속된 특수문자 제거
  sanitized = sanitized.replace(/([!@#%^&*]){2,}/g, '$1')

  return sanitized.trim()
}

/**
 * URL 검증
 * Open Redirect 방지
 */
export function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    // HTTP/HTTPS만 허용
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Rate Limiting을 위한 간단한 토큰 생성
 */
export function generateRateLimitKey(identifier: string): string {
  return `ratelimit:${identifier}:${Date.now()}`
}

/**
 * 안전한 JSON 파싱
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T
  } catch {
    return fallback
  }
}
