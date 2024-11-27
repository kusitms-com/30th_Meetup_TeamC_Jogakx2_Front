import Image from 'next/image'

export default function ModalContent2() {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full flex justify-center items-center h-170 red-gradient-2 relative">
        <Image alt="bg" src="/images/bg-modal.svg" layout="fill" />
      </div>
      <div className="flex-grow rounded-b-16 bg-primary_foundation-100 flex flex-col justify-center items-center text-white gap-4">
        <p className="text-20">시간조각에는,</p>
        <p className="text-14 text-primary_foundation-20 text-center weight-[400]">
          휴식, 건강, 엔터테인먼트,
          <br /> 문화/예술, 소셜, 자기개발 총 6가지가 있어요.
        </p>
      </div>
    </div>
  )
}
