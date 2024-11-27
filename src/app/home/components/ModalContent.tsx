import { Logo } from '@/components'

export default function ModalContent() {
  return (
    <div className="flex flex-col h-full bg-white rounded-16">
      <div className="w-full flex justify-center items-center py-5">
        <Logo width={120} height={160} />
      </div>
      <div className="flex-grow rounded-b-16 bg-primary_foundation-100 flex flex-col justify-center items-center text-white gap-4">
        <p className="text-20">시간조각이란?</p>
        <p className="text-14 text-primary_foundation-20 text-center weight-[400]">
          조각조각에서는{' '}
          <span className="underline font-bold underline-offset-2">
            자투리 시간
          </span>
          을
          <br />
          ‘시간 조각&apos;이라고 불러요.
        </p>
      </div>
    </div>
  )
}
