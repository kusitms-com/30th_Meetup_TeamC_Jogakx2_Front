import { transKeyword } from '@/app/archive/components/Treemap/Treemap'
import TimeCard from './TimeCard'
import { useHomeContext } from '../fast/components/Fetcher'

export default function TimePiece() {
  const { activities } = useHomeContext()

  return (
    <div className="grid grid-cols-2 gap-12 mt-12">
      {activities.map(({ id, savedTime, title, keyword }) => (
        <TimeCard
          key={id}
          time={savedTime}
          title={title}
          category={transKeyword(keyword.category)}
        />
      ))}
    </div>
  )
}
