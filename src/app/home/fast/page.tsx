'use client'

import { Button, HeaderWithBack, Div, Plus } from '@/components'
import { useRouter } from 'next/navigation'
import FastCard from './components/FastCard'
import { useQuickStartContext } from './components/Fetcher'
import { QuickStart } from '../api/type'

export default function FastPage({} : QuickStart) {
  const router = useRouter()
  const { quickStartResponses } = useQuickStartContext()

  return (
    <HeaderWithBack title="빠른 시작" onBack={() => router.back()}>
      <Div className="flex flex-col gap-15 pb-100">
        {quickStartResponses.map(
          ({ id, meridiem, type, name, hour, minute, spareTime }) => (
            <FastCard
              key={id}
              meridiem={meridiem}
              type={type}
              name={name}
              hour={hour}
              minute={minute}
              spareTime={spareTime}
            />
          ),
        )}
      </Div>
      <Button
        className="fixed inset-x-0 bottom-30 mx-auto w-[60%] whitespace-nowrap"
        onClick={() => router.push('/home/fast/add')}
        rightIcon={<Plus />}
      >
        빠른 시작 추가하기
      </Button>
    </HeaderWithBack>
  )
}
