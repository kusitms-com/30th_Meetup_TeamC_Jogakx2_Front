import Div from '@/components/common/Div'
import Image from 'next/image'

export default function NoTimePiece() {
  return (
    <Div className="h-185 bg-primary_foundation_10 flex flex-col justify-center rounded-main relative mt-12">
      <span>
        아직 자투리 시간에
        <br /> 모은 시간 조각이 없어요!
      </span>
      <span className="mt-8 underline text-primary_foundation_60 underline-offset-[3.5px]">
        시간 조각이 뭔가요?
      </span>
      <Image
        src="images/home-img.svg"
        alt="home-img"
        width={155}
        height={155}
        className="absolute top-0 right-0"
      />
    </Div>
  )
}
