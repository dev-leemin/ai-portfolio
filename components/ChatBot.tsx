'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, User } from 'lucide-react'
import { sanitizeInput } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatBotProps {
  onClose: () => void
}

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '안녕하세요! 프로젝트 경험과 기술 스택에 대해 궁금한 점을 물어보세요.',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [streamingMessage, setStreamingMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingMessage])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const sanitizedInput = sanitizeInput(input, 500)
    if (!sanitizedInput.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: sanitizedInput,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    setStreamingMessage('')

    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: sanitizedInput,
          conversationHistory: messages.slice(-10),
        }),
        signal: abortControllerRef.current.signal,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let accumulatedContent = ''

      if (!reader) throw new Error('No response body')

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') {
              const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: accumulatedContent,
                timestamp: new Date(),
              }
              setMessages((prev) => [...prev, botMessage])
              setStreamingMessage('')
              setIsTyping(false)
              break
            }

            try {
              const parsed = JSON.parse(data)
              if (parsed.content) {
                accumulatedContent += parsed.content
                setStreamingMessage(accumulatedContent)
              }
            } catch {
              // ignore parse errors
            }
          }
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error)
      if (error.name !== 'AbortError') {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
      setIsTyping(false)
      setStreamingMessage('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 500) setInput(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-navy-light border border-navy-lighter rounded-lg shadow-2xl w-full max-w-2xl h-[600px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-navy-lighter">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lightest-slate text-sm">AI Assistant</h3>
              <p className="text-xs text-dev-slate font-mono">Claude Haiku 4.5</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-navy-lighter flex items-center justify-center transition-colors"
            aria-label="채팅 닫기"
          >
            <X className="w-4 h-4 text-dev-slate" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center flex-shrink-0 ${
                    message.role === 'assistant'
                      ? 'bg-accent/10'
                      : 'bg-navy-lighter'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <Bot className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <User className="w-3.5 h-3.5 text-slate-light" />
                  )}
                </div>

                <div
                  className={`max-w-[75%] rounded-lg px-4 py-3 ${
                    message.role === 'assistant'
                      ? 'bg-navy border border-navy-lighter text-slate-light'
                      : 'bg-accent/10 border border-accent/20 text-lightest-slate'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                    {message.content}
                  </p>
                  <p className="text-xs text-dev-slate mt-2 font-mono">
                    {message.timestamp.toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {streamingMessage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="max-w-[75%] bg-navy border border-navy-lighter rounded-lg px-4 py-3">
                <p className="text-sm text-slate-light whitespace-pre-wrap break-words leading-relaxed">
                  {streamingMessage}
                  <span className="inline-block w-0.5 h-4 bg-accent ml-1 animate-pulse" />
                </p>
              </div>
            </motion.div>
          )}

          {isTyping && !streamingMessage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="bg-navy border border-navy-lighter rounded-lg px-4 py-3">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-accent/60 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-navy-lighter">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="메시지를 입력하세요..."
              className="flex-1 bg-navy border border-navy-lighter rounded-lg px-4 py-2.5 text-sm text-lightest-slate placeholder-dev-slate focus:outline-none focus:border-accent/50 transition-colors"
              maxLength={500}
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-2.5 bg-accent/10 border border-accent/30 text-accent rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/20 transition-colors"
              aria-label="메시지 전송"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-dev-slate mt-2 font-mono">
            {input.length}/500 {isTyping && '· responding...'}
          </p>
        </form>
      </motion.div>
    </motion.div>
  )
}
