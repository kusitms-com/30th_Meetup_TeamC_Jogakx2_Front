import { Clock, Right, Div, Badge } from '@/components'
import { useRouter } from 'next/navigation'
import { ActiveTypeMap } from '@/types'
import { useHomeContext } from '../fast/components/Fetcher'
import { useQuickStart } from '../hook/useQuickStart'

export function QuickBox() {
  const { push } = useRouter()
  const { name, hour, meridiem, minute, type, spareTime } =
    useHomeContext().quickStart

  const { setQuickStart } = useQuickStart()

  return (
    <>
      <div className="flex justify-between mb-20">
        <div className="flex gap-8 items-center">
          <Clock />
          <h2 className="font-semibold text-18">가장 가까운 자투리 시간</h2>
        </div>
        <button
          type="button"
          onClick={() => push('/home/fast')}
          className="underline text-primary_foundation-60 text-14"
        >
          더보기
        </button>
      </div>

      <Div className="flex justify-between items-center bg-white px-16 py-12 border-[1.5px] border-primary_foundation-10">
        <div className="flex flex-col gap-8">
          <p className="text-16 font-medium">{name}</p>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-primary_foundation-10 text-textColor">
              {spareTime}분
            </Badge>
            <Badge className="bg-primary_foundation-10 text-textColor">
              {meridiem}
              {hour}시{minute}분
            </Badge>
            <Badge className="bg-primary_foundation-10 text-textColor">
              {ActiveTypeMap[type]}
            </Badge>
          </div>
        </div>

        <Right
          color="#1A1A25"
          width={20}
          onClick={() => push('/home/sg-activity')}
        />
      </Div>
    </>
  )
}
