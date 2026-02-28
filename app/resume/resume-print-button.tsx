'use client'

import { Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ResumePrintButton() {
  return (
    <div className="print:hidden fixed top-6 right-6 z-50 flex items-center gap-3">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        포트폴리오
      </Link>
      <button
        onClick={() => window.print()}
        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
      >
        <Download className="w-4 h-4" />
        PDF 다운로드
      </button>
    </div>
  )
}
