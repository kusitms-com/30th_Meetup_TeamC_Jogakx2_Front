'use client'

import { useEffect } from 'react'
import useUserInfo from '@/store/useUserInfo'
import { useActivityStore } from '@/store/activityStore'

// import useFetch from '@/hooks/useFetch'
// import SuggestionWait from './SuggestionWait'
import Image from 'next/image'
import '../styles/choicesuggestion.css'

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { ChoiceSuggestionProps } from '../types/types'

const dummy = [
  {
    order: 1,
    title: '봉은사 산책 하며 자연 느끼기',
    placeName: '봉은사',
    mapx: '127.057664980575',
    mapy: '37.5154640760921',
    placeUrl: 'http://place.map.kakao.com/8373155',
    content: '도심 속 사찰에서 느끼는 여유로운 자연',
    keywordCategory: 'NATURE',
  },
  {
    order: 2,
    title: '코엑스 별마당 도서관에서 다양한 분야의 책 읽기',
    placeName: '코엑스 별마당 도서관',
    mapx: '127.06015941426635',
    mapy: '37.510192859355016',
    placeUrl: 'http://place.map.kakao.com/2104663194',
    content: '대형 서가가 상징적인 문화 공간에서의 독서',
    keywordCategory: 'CULTURE_ART',
  },
  {
    order: 3,
    title: '압구정로데오역 K현대미술관에서 전시 관람하기',
    placeName: 'K현대미술관',
    mapx: '127.03913323759338',
    mapy: '37.524349883168405',
    placeUrl: 'http://place.map.kakao.com/154429973',
    content: '다양한 기획전을 개최하는 곳에서 즐기는 문화생활',
    keywordCategory: 'CULTURE_ART',
  },
  {
    order: 4,
    title: '청담동 네이처포엠빌딩 앞 조각공원 산책하기',
    placeName: '청담동 조각공원',
    mapx: '',
    mapy: '',
    placeUrl: '',
    content: '도심 빌딩 숲 사이 녹지공간에서의 산책',
    keywordCategory: 'NATURE',
  },
  {
    order: 5,
    title: '도산공원에서 역사와 자연 즐기기',
    placeName: '도산공원',
    mapx: '127.03528760485077',
    mapy: '37.52455769460598',
    placeUrl: 'http://place.map.kakao.com/7832114',
    content: '안창호 기념관과 울창한 나무들이 어우러진 도심 속 쉼터',
    keywordCategory: 'NATURE',
  },
]

const getActiveType = (typeArr: string[]) => {
  if (typeArr.length >= 2) {
    return 'ONLINE_AND_OFFLINE'
  }
  if (typeArr.includes('온라인')) {
    return 'ONLINE'
  }
  if (typeArr.includes('오프라인')) {
    return 'OFFLINE'
  }
  return ''
}

export default function ChoiceSuggestion({
  setError,
  setText,
  setSeletedActivity,
  setActivityLink,
}: ChoiceSuggestionProps) {
  const { userInfo } = useUserInfo()
  const { nickname } = userInfo
  // const { spareTime, activityType, keywords, address } = useActivityStore()
  // const masterToken = process.env.NEXT_PUBLIC_MASTER_TOKEN
  // const postData = {
  //   spareTime: parseInt(spareTime, 10),
  //   activityType: getActiveType(activityType),
  //   keywords,
  //   ...(address && { address }),
  // }
  // const { data, error, loading, refetch } = useFetch<ActivityResponse>(
  //   `https://cnergy.p-e.kr/v1/recommendations`,
  //   {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       Authorization: `Bearer ${masterToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // )

  useEffect(() => {
    setError(false)
    setText('이 활동하기')

    return () => {
      setText('다음')
    }
  }, [])

  // if (loading) return <SuggestionWait nickname={nickname} keywords={keywords} />

  // if (error) return <div>err</div>

  const handleSlide = (swiper: SwiperClass) => {
    setSeletedActivity(dummy[swiper.activeIndex])

    // 링크 생성 로직 작성 후 setActivityLink에 넣어주기

    setActivityLink(dummy[swiper.activeIndex].placeUrl)
  }

  return (
    <div>
      <div>
        <section className="w-342 mx-auto mt-50 text-center">
          <h1 className="font-semibold text-20">
            조각조각이 {nickname} 님에게
            <br />딱 맞는 활동을 가져왔어요!
          </h1>
          <p className="text-14 text-primary_foundation-60 mt-8">
            아 중 원하는 활동을 하나 선택해 보세요.
          </p>
        </section>

        <section className="w-full mt-40">
          <Swiper
            onSwiper={handleSlide}
            onSlideChange={handleSlide}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            spaceBetween={8}
            slidesPerView={1.2}
            centeredSlides
          >
            {dummy.map((cardData) => (
              <SwiperSlide key={cardData.order}>
                <div className="bg-primary_foundation-100y_foundation-100 w-320 h-320 rounded-16 flex flex-col items-center">
                  <Image
                    src="/images/NATURE_result.png"
                    alt={cardData.title}
                    width={170}
                    height={170}
                    className="mt-10"
                  />
                  <div className="w-270 mx-auto">
                    <p className="text-16 text-primary_foundation-30">
                      {cardData.content}
                    </p>
                    <h3 className="font-semibold text-24 text-primary_foundation-5 w-260">
                      {cardData.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination relative flex justify-center mt-20 z-10" />
        </section>
      </div>
      <img
        src="/images/choiceSuggestion_bg.png"
        alt="suggest-bg"
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  )
}
