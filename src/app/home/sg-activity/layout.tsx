import type { Metadata } from 'next'
import { StrictPropsWithChildren } from '@/types'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '조각조각 - 활동 추천받기',
  description: '조각조각 - 활동 추천받기',
}

export default function SGactivityLayout({
  children,
}: StrictPropsWithChildren) {
  return (
    <div className="overflow-hidden w-full font-pretendard">
      <Script
        type="text/javascript"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services`}
        strategy="beforeInteractive"
      />
      {children}
    </div>
  )
}
