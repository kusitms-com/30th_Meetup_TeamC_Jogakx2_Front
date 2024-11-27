'use client'

import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { format, parseISO } from 'date-fns'
// import { ko } from 'date-fns/locale'
// import Cookies from 'js-cookie'
import { IconLeft } from '@/components'
// import { KeywordMonthDataResponse, MonthActivity } from './types/type'
// import { transKeyword } from '../components/Treemap/Treemap'

export default function KeywordDetailPage() {
  //   const searchParams = useSearchParams()
  const router = useRouter()
  //   const [accessToken, setAccessToken] = useState('')
  //   const [year, setYear] = useState(0)
  //   const [month, setMonth] = useState(0)
  //   const [keyword, setKeyword] = useState('')

  //   const [keywordData, setKeywordData] = useState<KeywordMonthDataResponse>()
  //   const [sortedDates, setSortedDates] = useState<string[]>()
  //   const [activitiesByDate, setActivitiesByDate] =
  //     useState<Record<string, MonthActivity[] | undefined>>()
  //   const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  //   useEffect(() => {
  //     const token = Cookies.get('accessToken')
  //     if (token) {
  //       setAccessToken(token)
  //     }

  //     const queryYear = searchParams.get('year')
  //     const queryMonth = searchParams.get('month')
  //     const quertKeyword = searchParams.get('keyword')
  //     if (queryYear && queryMonth && quertKeyword) {
  //       const transYear = parseInt(queryYear, 10)
  //       const transMonth = parseInt(queryMonth, 10)

  //       setYear(transYear)
  //       setMonth(transMonth)
  //       setKeyword(quertKeyword)

  //       getMonthData(transYear, transMonth, quertKeyword)
  //     }
  //   }, [])

  //   const getMonthData = async (
  //     reqyear: number,
  //     reqmonth: number,
  //     reqkeyword: string,
  //   ) => {
  //     try {
  //       console.log('dddd', accessToken)
  //       const response = await fetch(
  //         `https://cnergy.p-e.kr/v1/activities?year=${reqyear}&month=${reqmonth}&keywordCategory=${reqkeyword}`,
  //         {
  //           method: 'GET',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         },
  //       )

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`)
  //       }

  //       const { data } = await response.json()
  //       console.log('받은 데이터', data)
  //       setKeywordData(data)
  //     } catch (error) {
  //       console.error('Error sending POST request:', error)
  //     }
  //   }

  //   useEffect(() => {
  //     const monthlyActivities = keywordData?.activities

  //     const filteredActivities = selectedDate
  //       ? monthlyActivities?.filter(
  //           (activity) =>
  //             format(parseISO(activity.dateOfActivity), 'yyyy-MM-dd') ===
  //             format(selectedDate, 'yyyy-MM-dd'),
  //         )
  //       : monthlyActivities

  //     const activitiesByDate =
  //       filteredActivities?.reduce(
  //         (acc, activity) => {
  //           const dateKey = format(
  //             parseISO(activity.dateOfActivity),
  //             'yyyy-MM-dd',
  //           )
  //           if (!acc[dateKey]) {
  //             acc[dateKey] = []
  //           }
  //           acc[dateKey].push(activity)
  //           return acc
  //         },
  //         {} as Record<string, typeof monthlyActivities>,
  //       ) ?? {}

  //     const sortedDates = Object.keys(activitiesByDate)
  //     setActivitiesByDate(activitiesByDate)
  //     setSortedDates(sortedDates)
  //   }, [keywordData])

  const onBack = () => {
    router.back()
  }

  return (
    <div>
      <header className="relative font-semibold flex justify-center items-center py-4 min-h-52">
        <IconLeft className="absolute left-20" onClick={onBack} />
        <span>조각 별 상세정보</span>
      </header>
      {/* <section></section>
      <section className="p-16 bg-primary_foundation-5">
        {sortedDates?.map((date) => (
          <div key={date} className="mb-20">
            <h3 className="text-16 font-[500] mb-8 flex items-center">
              {format(parseISO(date), 'MM월 dd일')}
              <span className="ml-8 text-primary_foundation-60 text-12">
                {format(parseISO(date), 'E', { locale: ko })}
              </span>
            </h3>

            <div className="flex flex-col gap-8 relative rounded-12">
              {activitiesByDate &&
                activitiesByDate[date]?.map((activity) => (
                  <div key={activity.title} className="flex flex-col gap-8">
                    <div className="flex flex-col relative w-full rounded-12 p-12 bg-white">
                      <span className="text-12 w-fit px-10 py-2 rounded-12 bg-primary_foundation-10">
                        {transKeyword(keyword)}의 조각
                      </span>
                      <span className="mt-8 text-14">{activity.title}</span>
                      <span className="text-14 font-[500] text-white bg-black absolute top-0 right-0 p-8 rounded-tr-12 rounded-bl-12 w-56 text-center whitespace-nowrap">
                        +{activity.savedTime}분
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section> */}
    </div>
  )
}
