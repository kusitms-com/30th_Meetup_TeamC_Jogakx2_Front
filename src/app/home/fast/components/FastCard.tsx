import { Badge, Pencil, Right } from '@/components'
import { useRouter } from 'next/navigation'
import { ActiveTypeMap } from '@/types'
import { QuickStart } from '../../api/type'
import { useQuickStart } from '../../hook/useQuickStart'

export default function FastCard(quickStart: QuickStart) {
  const { push } = useRouter()
  const { setQuickStart, goWithQuick } = useQuickStart()

  const { name, hour, minute, spareTime, meridiem, type } = quickStart

  const handleClickEdit = () => {
    setQuickStart(quickStart)
    push('fast/add')
  }
  return (
    <div className="px-16 py-12 flex justify-between w-full items-center border border-primary_foundation_10">
      <div className="flex flex-col items-start gap-12">
        <div className="flex gap-10 items-center">
          <p>{name}</p>
          <Pencil onClick={handleClickEdit} />
        </div>

        <div className="flex gap-8">
          <Badge>
            {meridiem} {hour}시 {minute}분
          </Badge>
          <Badge>{spareTime}분</Badge> <Badge>{ActiveTypeMap[type]}</Badge>
        </div>
      </div>
      <Right color="#333333" onClick={() => goWithQuick(quickStart)} />
    </div>
  )
}
