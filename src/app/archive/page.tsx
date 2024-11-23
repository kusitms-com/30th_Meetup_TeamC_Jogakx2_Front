'use client'

import { useState, useTransition } from 'react'
import { HomeHeader, If, TabList } from '@/components'
import { subMonths, addMonths, getYear, getMonth } from 'date-fns'
import { AsyncBoundaryWithQuery } from '@/react-utils'
import ArchiveTotal from './components/ArchiveTotal'
import { CalendarFetcher } from './api/fetcher'
import OverviewHeader from './components/OverviewHeader'
import CalendarView from './components/CalendarView'

const tabs = [
  { label: '활동 키워드', value: 'keywords' },
  { label: '활동 캘린더', value: 'calendar' },
]

export default function ArchivePage() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [currentDate, setCurrentDate] = useState(new Date())

  const [, startTransition] = useTransition()

  const goToPreviousMonth = () => {
    startTransition(() => {
      setCurrentDate((prev) => subMonths(prev, 1))
    })
  }

  const goToNextMonth = () => {
    startTransition(() => {
      setCurrentDate((prev) => addMonths(prev, 1))
    })
  }

  return (
    <HomeHeader title="아카이빙">
      <main className="flex flex-col w-full">
        <div className="px-24 bg-[linear-gradient(180deg,_rgba(255,255,255),_rgba(255,248,246,0.8)_38%,_rgba(255,220,215,0.8)_98%)] py-10 mt-15">
          <TabList
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <AsyncBoundaryWithQuery>
            <ArchiveTotal
              year={getYear(currentDate)}
              month={getMonth(currentDate) + 1}
            />
          </AsyncBoundaryWithQuery>
        </div>
        <div className="absolute top-250 w-full bg-white rounded-t-20 py-16">
          <div className="flex flex-col w-full mb-20">
            <OverviewHeader
              currentDate={currentDate}
              goToPreviousMonth={goToPreviousMonth}
              goToNextMonth={goToNextMonth}
            />
            <If condition={activeTab === 'calendar'}>
              <div>
                <AsyncBoundaryWithQuery>
                  <CalendarFetcher
                    year={getYear(currentDate)}
                    month={getMonth(currentDate) + 1}
                  >
                    <CalendarView currentDate={currentDate} />
                  </CalendarFetcher>
                </AsyncBoundaryWithQuery>
              </div>
            </If>
          </div>
        </div>
      </main>
    </HomeHeader>
  )
}
