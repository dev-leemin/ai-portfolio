import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.anthropic.com https://*.neon.tech wss://*.neon.tech",
      "frame-src 'self' https://googleads.g.doubleclick.net",
    ].join('; ')
  )

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // XSS Protection
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Referrer Policy - don't leak full URL
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Prevent browser features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  )

  // Strict Transport Security (HTTPS only)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )

  // Block direct image hotlinking from other sites
  const referer = request.headers.get('referer')
  const pathname = request.nextUrl.pathname

  if (
    pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) &&
    referer &&
    !referer.includes('lotto-predictor') &&
    !referer.includes('ai-portfolio') &&
    !referer.includes('vercel.app') &&
    !referer.includes('localhost')
  ) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
