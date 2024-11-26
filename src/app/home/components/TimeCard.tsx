import Badge from '@/components/common/Badge'
import Div from '@/components/common/Div'
import Cup from '@/components/Icons/Cup'

interface TimeCardProps {
  time: number
  category: string
  title: string
}

export default function TimeCard({ time, category, title }: TimeCardProps) {
  return (
    <Div className="relative bg-white px-12">
      <div className="">
        <Cup className="absolute left-0 top-0" />
        <div className="bg-black text-white flex items-center justify-center rounded-bl-12 rounded-tr-12 absolute top-0 right-0 w-59 h-38 whitespace-nowrap text-14">
          +{time}분
        </div>
      </div>
      <div className="flex flex-col mt-80 gap-5">
        <Badge className="!text-11">{category}의 조각</Badge>
        <p>{title}</p>
      </div>
    </Div>
  )
}
