'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import SplashLogo from '@/components/Icons/SplashLogo'
import SplashTop from '@/components/Icons/SplashTop'
import SplashBottom from '@/components/Icons/SplashBottom'

export default function Home() {
  const [isSplash, setIsSplash] = useState(true)
  const [logoColor, setlogoColor] = useState('white')
  const [splashBoxColor, setSplashBoxColor] = useState('#31313B')
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false)
      setSplashBoxColor('#F3F3F4')
    }, 1000)

    const logotimer = setTimeout(() => {
      setlogoColor('#1A1A25')
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(logotimer)
    }
  }, [])

  const handleSocialLogin = async (social: string) => {
    router.push(`https://cnergy.p-e.kr/v1/oauth/${social}`)
  }

  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      <motion.div
        className=" relative w-full h-full bg-primary_foundation_100"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          backgroundColor: isSplash ? '#1A1A25' : '#ffffff',
        }}
        transition={{ duration: 0.5 }}
      >
        <SplashLogo
          className="absolute left-[127px] top-[248px] z-50"
          firstPieceColor={logoColor}
        />

        <motion.div
          initial={{ x: 0, y: -200, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SplashTop
            elementColor={splashBoxColor}
            className="absolute right-0 top-[186px]"
          />
        </motion.div>

        <motion.div
          initial={{ x: 0, y: 553, opacity: 1 }}
          animate={{
            x: 0,
            y: 264,
            opacity: 1,
            backgroundColor: splashBoxColor,
          }}
          transition={{ duration: 0.5 }}
        >
          <SplashBottom
            elementColor={splashBoxColor}
            className="absolute left-0"
          />
        </motion.div>
      </motion.div>
      {!isSplash && (
        <>
          <p className="z-50 font-semibold absolute top-[388px]">
            여기에는 캐치프레이즈가 들어갑니다
          </p>

          <motion.div
            className="absolute bottom-80"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => handleSocialLogin('kakao')}
              type="button"
              className="bg-[#FFE819] w-[342px] h-[56px] flex justify-center items-center rounded-12 text-black font-semibold mb-10"
            >
              <img src="/images/kakao-icon.png" alt="Kakao" className="mr-8" />
              카카오로 시작하기
            </button>
            <button
              onClick={() => handleSocialLogin('naver')}
              type="button"
              className="bg-[#03C75A] w-[342px] h-[56px] flex justify-center items-center rounded-12 text-white font-semibold mb-10"
            >
              <img src="/images/naver-icon.png" alt="Naver" className="mr-8" />
              네이버로 시작하기
            </button>

            <button
              onClick={() => handleSocialLogin('google')}
              type="button"
              className="bg-white border w-[342px] h-[56px] flex justify-center items-center rounded-12 text-black font-semibold mb-10"
            >
              <img
                src="/images/google-icon.png"
                alt="Google"
                className="mr-8"
              />
              구글로 시작하기
            </button>
          </motion.div>
        </>
      )}
    </div>
  )
}
