'use client'

import useUserInfo from '@/store/useUserInfo'
import Image from 'next/image'

export default function Step4() {
  const { userInfo } = useUserInfo()

  if (!userInfo.nickname) {
    return <div>loading...</div>
  }

  return (
    <div className="relative h-full">
      <div className="absolute w-screen h-screen bg-gradient-to-b from-white via-[#fffbfb] to-[#ffa89c]" />
      <div className="absolute flex flex-col items-center mt-40 w-full h-330 white-gradient z-10">
        <h2 className="text-primary_foundation_60 relative">
          환영해요, {userInfo.nickname}님!
        </h2>
        <h1 className="relative title !mt-0">
          조각조각이 고망님의 흩어진 <br />
          <span className="text-accent_100">시간 조각</span>들을 찾아줄게요.
        </h1>
      </div>
      <Image
        alt="bg"
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/home-img.svg`}
        layout="fill"
        objectFit="over"
        className="absolute bottom-0 z-1 px-20"
      />
    </div>
  )
}
