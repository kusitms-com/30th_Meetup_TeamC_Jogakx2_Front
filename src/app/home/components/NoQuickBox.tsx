import { Button } from '@/components'
import { useRouter } from 'next/navigation'

export default function NoQuickBox() {
  const { push } = useRouter()

  return (
    <>
      <h2 className="font-semibold mb-8">
        아직 빠른 시작이 등록되지 않았어요.
      </h2>
      <p className="text-primary_foundation_60 mb-20 text-14">
        나만의 반복되는 자투리 시간을 저장하고
        <br />
        모을 시간 조각을 빠르게 추천받아보세요.
      </p>
      <Button
        onClick={() => push('/home/fast/add')}
        className="w-full bg-primary_foundation_5 font-semibold text-black"
      >
        빠른 시작 등록하기
      </Button>
    </>
  )
}
