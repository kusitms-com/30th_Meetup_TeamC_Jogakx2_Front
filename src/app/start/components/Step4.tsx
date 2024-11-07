'use client'

import useUserInfo from '@/store/useUserInfo'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const boxes = [
  {
    id: 1,
    text: '문화 <br/>예술',
    width: '100px',
    fontSize: '18px',
    startX: '5%',
    startY: '-10%',
    endX: '30%',
    endY: '400%',
  },
  {
    id: 2,
    text: '자기 <br />개발',
    width: '70px',
    fontSize: '16px',
    startX: '15%',
    startY: '-15%',
    endX: '15%',
    endY: '250%',
  },
  {
    id: 3,
    text: '자연',
    width: '80px',
    fontSize: '16px',
    startX: '30%',
    startY: '-20%',
    endX: '40%',
    endY: '260%',
  },
  {
    id: 4,
    text: '휴식',
    width: '100px',
    fontSize: '18px',
    startX: '120%',
    startY: '-15%',
    endX: '70%',
    endY: '270%',
  },
  {
    id: 5,
    text: '소셜',
    width: '66px',
    fontSize: '14px',
    startX: '80%',
    startY: '-10%',
    endX: '55%',
    endY: '180%',
  },
  {
    id: 6,
    text: '건강',
    width: '52px',
    fontSize: '12px',
    startX: '110%',
    startY: '-5%',
    endX: '80%',
    endY: '100%',
  },
  {
    id: 7,
    text: '엔터테인먼트',
    width: '57px',
    fontSize: '10px',
    startX: '10%',
    startY: '-10%',
    endX: '10%',
    endY: '130%',
  },
]

const backgroundShapes = [
  {
    id: 1,
    width: '20px',
    startX: '80%',
    startY: '5%',
    endX: '10%',
    endY: '270%',
  },
  {
    id: 2,
    width: '15px',
    startX: '10%',
    startY: '3%',
    endX: '20%',
    endY: '250%',
  },
  {
    id: 3,
    width: '10px',
    startX: '60%',
    startY: '10%',
    endX: '60%',
    endY: '275%',
  },
  {
    id: 4,
    width: '25px',
    startX: '90%',
    startY: '0%',
    endX: '30%',
    endY: '270%',
  },
  {
    id: 5,
    width: '30px',
    startX: '40%',
    startY: '6%',
    endX: '40%',
    endY: '185%',
  },
  {
    id: 6,
    width: '12px',
    startX: '70%',
    startY: '1%',
    endX: '70%',
    endY: '140%',
  },
  {
    id: 7,
    width: '30px',
    startX: '75%',
    startY: '1%',
    endX: '75%',
    endY: '220%',
  },
]

export default function Step4() {
  const { userInfo } = useUserInfo()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true)
    }, 200)
  }, [])

  return (
    <div className="relative">
      <div className="absolute -z-1 w-screen h-screen bg-gradient-to-b from-white via-[#fffbfb] to-[#ffa89c]" />
      <div className="flex flex-col items-center mt-34">
        <h2 className="text-primary_foundation_60 relative">
          환영해요, {userInfo.name}님!
        </h2>
        <h1 className="relative title !mt-0">
          조각조각이 고망님의 흩어진 <br />
          <span className="text-accent_100">시간 조각</span>들을 찾아줄게요.
        </h1>

        <div className="w-full h-full -mt-20">
          {backgroundShapes.map((shape, index) => (
            <motion.div
              key={shape.id}
              className="absolute bg-accent_100 rounded"
              initial={{ left: shape.startX, top: shape.startY, opacity: 0 }}
              animate={
                isAnimating && {
                  left: shape.endX,
                  top: shape.endY,
                  opacity: 0.3,
                }
              }
              transition={{
                duration: 2.5,
                delay: index * 0.3,
              }}
              style={{
                width: shape.width,
                height: shape.width,
              }}
            />
          ))}

          {boxes.map((box, index) => (
            <motion.div
              key={box.id}
              className="absolute text-center text-white font-semibold bg-accent_100 rounded"
              initial={{ left: box.startX, top: box.startY, opacity: 0 }}
              animate={
                isAnimating && { left: box.endX, top: box.endY, opacity: 1 }
              }
              transition={{
                duration: 1.5,
                delay: index * 0.2,
              }}
              style={{
                width: box.width,
                height: box.width,
                fontSize: box.fontSize,
                lineHeight: '140%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: box.text }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
