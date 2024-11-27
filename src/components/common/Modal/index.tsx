'use client'

import { ReactNode } from 'react'
import { cn } from '@/util'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
  bgClassName?: string
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  bgClassName,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50',
        bgClassName,
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <button
        type="button"
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        aria-label="닫기"
      />
      <div
        className={cn(
          'bg-white rounded-16 shadow-lg w-[80%] relative',
          className,
        )}
        role="document"
      >
        {title && (
          <header className="mb-16 p-24 bg-white rounded-16">
            <h2 id="modal-title" className="text-18 font-semibold">
              {title}
            </h2>
          </header>
        )}
        <div className="mt-45">{children}</div>
      </div>
    </div>
  )
}
