'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  'aria-label'?: string
}

/**
 * 마우스를 따라 움직이는 자석 효과 버튼
 * 트렌디한 인터랙션 효과
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // 자석 효과: 버튼 크기의 40%까지만 이동
    const maxDistance = Math.min(rect.width, rect.height) * 0.4
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const factor = Math.min(distance / maxDistance, 1)

    setPosition({
      x: (deltaX / distance) * factor * 12,
      y: (deltaY / distance) * factor * 12,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`inline-flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
