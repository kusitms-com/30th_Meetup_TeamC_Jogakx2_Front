'use client'

import { HeaderWithBack } from '@/components'
import Div from '@/components/common/Div'
import { useRouter } from 'next/navigation'
import FastCard from './components/FastCard'

export default function FastPage() {
  const router = useRouter()

  return (
    <HeaderWithBack title="빠른 시작" onBack={() => router.back()}>
      <Div>
        <div>
          <FastCard
            meridiem="오전"
            type="ONLINE"
            name="hi"
            hour={1}
            minute={1}
            spareTime={2}
          />
        </div>
      </Div>
    </HeaderWithBack>
  )
}
