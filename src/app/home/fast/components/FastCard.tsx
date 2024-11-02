import Badge from '@/components/common/Badge'
import { Right } from '@/components'
import { IFast } from '../../type'

export default function FastCard({
  title,
  hour,
  minute,
  spareTime,
  meridiem,
  type,
}: IFast) {
  return (
    <button
      type="button"
      className="px-16 py-12 flex justify-between w-full items-center border border-primary_foundation_10"
    >
      <div className="flex flex-col items-start gap-12">
        <p>{title}</p>
        <div className="flex gap-8">
          <Badge>
            {meridiem} {hour}시 {minute}분
          </Badge>
          <Badge>{spareTime}분</Badge> <Badge>{type}</Badge>
        </div>
      </div>
      <Right color="#333333" />
    </button>
  )
}
