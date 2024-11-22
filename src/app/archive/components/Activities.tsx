import { format, parseISO } from 'date-fns'
import { Button, If, Right } from '@/components'
import { useRouter } from 'next/navigation'
import { useCalendarContext } from '../api/fetcher'
import { categoryLabels } from '../api/types'

export default function Activities() {
  const { push } = useRouter()
  const { monthlyActivities } = useCalendarContext()

  const groupedActivities =
    monthlyActivities?.reduce(
      (acc, activity) => {
        const dateKey = format(
          parseISO(activity.activityCreatedAt),
          'yyyy-MM-dd',
        )
        if (!acc[dateKey]) {
          acc[dateKey] = []
        }
        acc[dateKey].push(activity)
        return acc
      },
      {} as Record<string, typeof monthlyActivities>,
    ) ?? {}

  const sortedDates = Object.keys(groupedActivities)

  return (
    <>
      <If condition={!monthlyActivities}>
        <div className="bg-primary_foundation-5 flex items-center justify-center p-24">
          <div className="mt-35 mb-20 flex flex-col items-center gap-8">
            <h2 className="text-18">아직 모은 시간 조각이 없어요!</h2>
            <Button
              onClick={() => push('/')}
              className="bg-accent-100 px-20"
              rightIcon={<Right />}
            >
              시간 조각 바로 모으러가기
            </Button>
          </div>
        </div>
      </If>

      <If condition={!!monthlyActivities}>
        <div className="p-16 bg-primary_foundation-5">
          {sortedDates?.map((date) => (
            <div key={date} className="mb-20">
              <h3 className="text-16 font-[500] mb-8 flex items-center">
                {format(parseISO(date), 'MM월 dd일')}
                <span className="ml-8 text-primary_foundation-60">
                  {format(parseISO(date), 'eee')}
                </span>
              </h3>

              <div className="flex flex-col gap-8 bg-white p-12 relative rounded-12">
                {groupedActivities[date].map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="text-12 w-fit px-10 py-2 rounded-12 bg-primary_foundation-10">
                        {categoryLabels[activity.category]}의 조각
                      </span>
                      <span className="mt-8">{activity.title}</span>
                    </div>
                    <span className="text-16 font-[500] text-white bg-black absolute top-0 right-0 p-8 rounded-tr-12 rounded-bl-12">
                      +{activity.savedTime}분
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </If>
    </>
  )
}
