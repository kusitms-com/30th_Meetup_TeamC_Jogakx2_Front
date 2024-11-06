import { Clock, Right } from '@/components'
import { useRouter } from 'next/navigation'
import Div from '@/components/common/Div'
import Badge from '@/components/common/Badge'
import { useHomeContext } from '../fast/components/Fetcher'
import { ActiveTypeMap } from '@/types'

export function QuickBox() {
  const { push } = useRouter()
  const { name, hour, meridiem, minute, type, spareTime } =
    useHomeContext().quickStart

  const quickType = ActiveTypeMap[type]

  return (
    <Div>
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

      <Div className="flex justify-between items-center bg-accent-5 px-16 py-12 border-[1.5px] border-accent-20">
        <div className="flex flex-col gap-8">
          <p className="text-16 font-medium">{name}</p>
          <div className="flex gap-4 whitespace-nowrap">
            <Badge>{spareTime}분</Badge>
            <Badge>
              {meridiem}
              {hour}시{minute}분
            </Badge>
            <Badge>{quickType}</Badge>
          </div>
        </div>
        {/* TODO: 추천경로 */}
        <Right color="#FF4F38" width={20} onClick={() => push('/home/fast')} />
      </Div>
    </Div>
  )
}
