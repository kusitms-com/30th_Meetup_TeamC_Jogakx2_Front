'use client'

import { Button, HeaderWithBack } from '@/components'
import Div from '@/components/common/Div'
import { useRouter } from 'next/navigation'
import FastCard from './components/FastCard'
import { useQuickStartContext } from './components/Fetcher'
import Plus from '@/components/Icons/\bPlus'

export default function FastPage() {
  const router = useRouter()
  const { quickStartResponse } = useQuickStartContext()

  return (
    <HeaderWithBack title="빠른 시작" onBack={() => router.back()}>
      <Div className="flex flex-col gap-15 pb-100">
        {quickStartResponse.map((item) => (
          <FastCard
            key={item.id}
            meridiem={item.meridiem}
            type={item.type}
            name={item.name}
            hour={item.hour}
            minute={item.minute}
            spareTime={item.spareTime}
          />
        ))}
      </Div>
      <Button
        className="fixed inset-x-0 bottom-20 w-[60%] whitespace-nowrap"
        onClick={() => router.push('/fast/add')}
        rightIcon={<Plus />}
      >
        빠른 시작 추가하기
      </Button>
    </HeaderWithBack>
  )
}
