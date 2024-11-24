'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SplashLogoNew from '@/components/Icons/SplashLogoNew'
import { socialTypes } from '@/components/Oauth/SocialTypeData'
import OauthBtn from '@/components/Oauth/OauthBtn'

export default function Home() {
  const [isSplash, setIsSplash] = useState(true)
  const [logoColor, setlogoColor] = useState('white')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false)
    }, 1200)

    const logotimer = setTimeout(() => {
      setlogoColor('#1A1A25')
    }, 1700)

    return () => {
      clearTimeout(timer)
      clearTimeout(logotimer)
    }
  }, [])

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <motion.div
        className="relative w-full h-full bg-primary_foundation-100"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          backgroundColor: isSplash ? '#1A1A25' : '#ffffff',
        }}
        transition={{ duration: 0.5 }}
      >
        <SplashLogoNew
          className="absolute left-[127px] top-[178px] z-50"
          pieceColor={logoColor}
        />

        {isSplash && (
          <Image
            src="/gif/splash_gif.gif"
            alt="splash_start"
            width={390}
            height={748}
          />
        )}
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
            {socialTypes &&
              socialTypes.map((socialData) => {
                return (
                  <OauthBtn
                    key={socialData.id}
                    type={socialData.type}
                    text={socialData.text}
                    style={socialData.style}
                  />
                )
              })}
          </motion.div>
        </>
      )}
    </div>
  )
}
