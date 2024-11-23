'use client'

import { ReactNode } from 'react'
import { cn } from '@/util'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={onClose}
    >
      <div
        className={cn('bg-white rounded-16 shadow-lg w-[80%]', className)}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="mb-16 fixed p-24 bg-white rounded-16">
            <h2 className="text-18 font-semibold">{title}</h2>
          </div>
        )}
        <div className="mt-45 p-24">{children}</div>
      </div>
    </div>
  )
}
