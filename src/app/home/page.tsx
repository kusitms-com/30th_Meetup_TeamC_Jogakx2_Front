'use client'

import { Button, Category, HomeHeader, House, Div, Right } from '@/components'
import { useHomeContext } from './fast/components/Fetcher'
import { QuickBox } from './components/QuickBox'
import NoQuickBox from './components/NoQuickBox'
import NoTimePiece from './components/NoTimePiece'
import TimePiece from './components/TimePiece'

export default function Home() {
  const { quickStart, totalSavedTime, activities } = useHomeContext()

  return (
    <HomeHeader>
      <div className="bg-[#F3F3F4]">
        <Div className="bg-primary_foundation_100 flex flex-col gap-20 rounded-t-0 pt-60">
          <h1 className="text-white text-24 mt-10">
            고먕님, <br /> 지금 시간 조각을 모아볼까요?
          </h1>
          <Button
            type="button"
            className="bg-accent_100 text-white flex justify-between px-20 py-18 rounded-main"
            rightIcon={<Right />}
          >
            시간 조각 모으러 가기
          </Button>
          <Div className="bg-white">
            {quickStart ? <QuickBox /> : <NoQuickBox />}
          </Div>
        </Div>

        <Div className="my-12 pb-50">
          <div>
            <p className="text-primary_foundation_60">오늘 모은 시간 조각</p>
            <h2 className="text-20">
              오늘은{' '}
              <span className="text-accent_100 font-bold">
                {totalSavedTime}분
              </span>
              의 시간조각을 모았어요!
            </h2>
          </div>

          {activities.length ? <TimePiece /> : <NoTimePiece />}
        </Div>

        <div className="flex justify-center gap-12 bg-white pt-10 pb-40">
          <Button
            leftIcon={<House />}
            className="rounded-8 w-133 h-44 bg-primary_foundation_100"
          >
            홈
          </Button>
          <Button
            leftIcon={<Category />}
            className="bg-transparent text-textColor px-0 rounded-8 w-133 h-44"
          >
            아카이빙
          </Button>
        </div>
      </div>
    </HomeHeader>
  )
}
