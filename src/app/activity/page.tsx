'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components'
import useUserInfo from '@/store/useUserInfo'
import Image from 'next/image'
import { PayloadType } from './types/type'
import { ActivityData } from '@/types/activityTypes'

export default function ActivityPage() {
  const router = useRouter()
  const { userInfo } = useUserInfo()
  const { nickname } = userInfo
  const [isTimeUp, setIsTimeUp] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<ActivityData>()
  const [elapsedTime, setElapsedTime] = useState<number>(0) // 경과 시간

  // 타이머 ID를 useRef로 관리
  const intervalId = useRef<number | null>(null)
  const timeoutId = useRef<number | null>(null)

  useEffect(() => {
    const payload = localStorage.getItem('selectedActivity')
    if (!payload) {
      console.log('선택된 활동 데이터 없음')
      setIsTimeUp(true)
      return
    }

    const selectedActivityData: PayloadType = JSON.parse(payload)
    const { selectedActivity, spareTime } = selectedActivityData
    const spareTimeMs = parseInt(spareTime) * 60 * 1000
    let startTime = localStorage.getItem('startTime')
    const now = Date.now()

    if (!startTime) {
      // 새로운 타이머 시작
      startTime = now.toString()
      localStorage.setItem('startTime', startTime)
    }

    const startTimeValue = parseInt(startTime, 10)
    const elapsed = now - startTimeValue
    const remainingTimeMs = spareTimeMs - elapsed

    const updateRemainingTime = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTimeValue
      const remainingTimeMs = spareTimeMs - elapsed

      if (remainingTimeMs <= 0) {
        console.log('남은 시간: 0초')
        setIsTimeUp(true)
        setElapsedTime(Math.ceil(elapsed / 60000))
        if (intervalId.current !== null) clearInterval(intervalId.current)
      } else {
        const remainingSeconds = Math.ceil(remainingTimeMs / 1000)
        console.log(`남은 시간: ${remainingSeconds}초`)
      }
    }

    if (elapsed >= spareTimeMs) {
      // 시간이 이미 지난 경우
      setIsTimeUp(true)
      setElapsedTime(Math.ceil(elapsed / 60000))
    } else {
      timeoutId.current = window.setTimeout(
        () => setIsTimeUp(true),
        remainingTimeMs,
      )
      updateRemainingTime()
      intervalId.current = window.setInterval(updateRemainingTime, 1000)
    }

    setSelectedActivity(selectedActivity)

    return () => {
      if (intervalId.current !== null) clearInterval(intervalId.current)
      if (timeoutId.current !== null) clearTimeout(timeoutId.current)
    }
  }, [router])

  const handleFinishActivity = () => {
    if (!isTimeUp) {
      const confirmFinish = window.confirm(
        '활동을 종료하시겠습니까? 지금까지의 시간이 누적되어 저장됩니다.',
      )
      if (!confirmFinish) return

      // 경과 시간 계산
      const startTime = localStorage.getItem('startTime')
      const now = Date.now()
      if (startTime) {
        const elapsedMs = now - parseInt(startTime, 10)
        const elapsedMinutes = Math.round(elapsedMs / 60000)
        setElapsedTime(elapsedMinutes)
      }
    }

    // 활동 종료 처리
    localStorage.removeItem('startTime')
    setIsTimeUp(true)

    // 타이머 정리
    if (intervalId.current !== null) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current)
      timeoutId.current = null
    }
  }

  return (
    <>
      {isTimeUp ? (
        <div className="relative w-full h-screen">
          <header className="relative font-semibold flex justify-center items-center py-4 min-h-52 mt-10">
            <span>활동 종료</span>
          </header>
          <article>
            <h3 className="font-semibold text-24 mt-70 mx-20">
              {nickname || '사용자'}님 오늘도
              <br />
              {elapsedTime}분의 시간 조각을 모았어요!
            </h3>

            <Image
              src={`/images/${'NATURE'}_result.png`}
              alt={'NATURE'}
              width={256}
              height={256}
              className="mx-auto mt-40"
            />

            <div className="absolute bottom-125 w-full z-10">
              <div className="w-351 h-104 bg-white flex justify-between mx-auto px-20 rounded-12">
                <div className="w-160 h-70 my-auto">
                  <p className="text-12 text-primary_foundation-50">
                    휴식에는 역시 명상이 최고!
                  </p>
                  <p className="font-medium text-16 text-primary_foundation-100 mt-5">
                    마음의 편안을 가져다주는 명상 음악 20분 듣기
                  </p>
                </div>

                <p className="font-semibold text-24 text-accent_100 my-auto">
                  +{'20'}분
                </p>
              </div>
            </div>

            <div className="absolute bottom-50 w-full py-4 flex flex-col items-center">
              <Button
                className="w-[90%] mx-auto font-semibold text-16 text-white bg-accent_100 z-10"
                onClick={() => router.push('/home')}
              >
                홈 화면으로 돌아가기
              </Button>
            </div>
            <Image
              src="/images/bg-activity_fine.png"
              alt="bg-activity_fine"
              width={390}
              height={844}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
            />
          </article>
        </div>
      ) : (
        <article className="w-full h-screen bg-primary_foundation_100 pt-100">
          <div className="w-267 mx-auto text-center">
            <p className="font-medium text-14 text-primary_foundation-40">
              지금 {nickname}님은
            </p>
            <h3 className="w-260 font-medium text-20 text-white text-center mt-8">
              {selectedActivity && selectedActivity.title}를 하고 있어요.
            </h3>
          </div>
          <Image
            src={`/gif/${'NATURE'}_ing.gif`}
            alt="NATURE"
            width={390}
            height={390}
            unoptimized
            priority
            className="mt-60"
          />

          <div className="absolute bottom-50 w-full py-4 flex flex-col items-center">
            <Button
              className="w-[90%] mx-auto font-semibold text-16 text-accent_100 bg-accent_100 bg-opacity-20"
              onClick={handleFinishActivity}
            >
              활동 종료하기
            </Button>
          </div>
        </article>
      )}
    </>
  )
}
