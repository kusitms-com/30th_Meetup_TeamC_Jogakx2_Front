'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SplashLogo from '@/components/Icons/SplashLogo'
import SplashTop from '@/components/Icons/SplashTop'
import SplashBottom from '@/components/Icons/SplashBottom'
import { socialTypes } from './_components/Oauth/SocialTypeData'
import OauthBtn from './_components/Oauth/OauthBtn'

export default function Home() {
  const [isSplash, setIsSplash] = useState(true)
  const [logoColor, setlogoColor] = useState('white')
  const [splashBoxColor, setSplashBoxColor] = useState('#31313B')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false)
      setSplashBoxColor('#F3F3F4')
    }, 1000)

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
        className="relative w-full h-full bg-primary_foundation_100"
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
          animate={{ x: 0, y: -17, opacity: 1 }}
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
