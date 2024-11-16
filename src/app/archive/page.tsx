'use client'

import { useState } from 'react'
import Calendar from './Calendar'

const data = [
  { date: '2024-11-01', count: 40 },
  { date: '2024-11-07', count: 40 },
  { date: '2024-11-09', count: 120 },
  { date: '2024-11-13', count: 40 },
  { date: '2024-11-17', count: 40 },
]

function HomePage() {
  const [activities, setActivities] =
    useState<{ date: string; count: number }[]>(data)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <Calendar
        activities={activities}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </main>
  )
}

export default HomePage
