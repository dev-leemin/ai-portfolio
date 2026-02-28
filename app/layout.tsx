import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ai-portfolio-cyan-gamma.vercel.app";

export const metadata: Metadata = {
  title: "이상민 | ERP 전문 개발자 포트폴리오",
  description:
    "4년+ 공공기관 ERP 전문 개발자 이상민의 포트폴리오. 한국철도공사, 가스안전공사, 인천환경공단 등 대형 프로젝트 수행. Next.js, React, AI 기반 사이드 프로젝트.",
  keywords: [
    "이상민",
    "ERP 개발자",
    "공공기관 ERP",
    "포트폴리오",
    "WebSquare",
    "Nexacro",
    "Next.js",
    "풀스택 개발자",
  ],
  authors: [{ name: "이상민" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "이상민 포트폴리오",
    title: "이상민 | ERP 전문 개발자",
    description:
      "4년+ 공공기관 ERP 전문 개발자. 신입에서 PL로 성장한 이상민의 포트폴리오.",
    images: [
      {
        url: `${SITE_URL}/profile.jpg`,
        width: 600,
        height: 600,
        alt: "이상민 - ERP 전문 개발자",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
