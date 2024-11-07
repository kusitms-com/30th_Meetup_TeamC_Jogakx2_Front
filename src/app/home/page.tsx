'use client'

import { Button, Category, HomeHeader, House, Right } from '@/components'
import Div from '@/components/common/Div'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()

  return (
    <HomeHeader>
      <div className="bg-[#F3F3F4]">
        <Div className="bg-primary_foundation_100 flex flex-col gap-20 rounded-t-0 pt-60">
          <h1 className="text-white text-24 mt-10">
            고먕님, <br /> 지금 시간 조각을 모아볼까요?
          </h1>
          <button
            type="button"
            className="bg-accent_100 text-white flex justify-between items-center px-20 py-18 rounded-main"
          >
            시간 조각 모으러 가기
            <Right />
          </button>
          <Div className="bg-white">
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
          </Div>
        </Div>

        <Div className="my-12 pb-50">
          <div>
            <p className="text-primary_foundation_60">오늘 모은 시간 조각</p>
            <h2 className="text-20">
              오늘은 <span className="text-accent_100 font-bold">0분</span>의
              시간조각을 모았어요!
            </h2>
          </div>
          <Div className="h-185 bg-primary_foundation_10 flex flex-col justify-center rounded-main relative mt-12">
            <span>
              아직 자투리 시간에
              <br /> 모은 시간 조각이 없어요!
            </span>
            <span className="mt-8 underline text-primary_foundation_60">
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
        </Div>

        <div className="flex justify-center gap-12 bg-white pt-10 pb-40">
          <Button
            leftIcon={<House />}
            className="rounded-8 w-133 h-44 bg-primary_foundation_100"
          >
            홈
          </Button>
          <Button
            leftIcon={<Category />}
            className="bg-transparent text-textColor px-0 rounded-8 w-133 h-44"
          >
            아카이빙
          </Button>
        </div>
      </div>
    </HomeHeader>
  )
}
