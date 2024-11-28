import type { Metadata } from 'next'
import './globals.css'
import { GlobalErrorBoundary } from '@/react-utils/ErrorBoundary'
import { Suspense } from 'react'
import { QueryProvider } from '@/lib'
import { cn } from '@/util'
import MobileWrapper from '@/components/MobileWrapper/MobileWrapper'
import { pretendard, wavvepado } from '../../public/fonts'

export const metadata: Metadata = {
  title: '나의 시간조각을 모아, 조각조각',
  description: '자투리 시간 앱',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.variable, wavvepado.variable)}>
        <GlobalErrorBoundary renderFallback={<div>에러가 발생했어요 !</div>}>
          <Suspense fallback={<div>로딩 중입니다...</div>}>
            <QueryProvider>
              <MobileWrapper>{children}</MobileWrapper>
            </QueryProvider>
          </Suspense>
        </GlobalErrorBoundary>
      </body>
    </html>
  )
}
