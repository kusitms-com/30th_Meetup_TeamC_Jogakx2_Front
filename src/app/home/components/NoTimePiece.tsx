import { Div, IconClose } from '@/components'
import Modal from '@/components/common/Modal'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/util'
import ModalContent from './ModalContent'
import ModalContent2 from './ModalContent2'

export default function NoTimePiece() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const modalContents = [
    {
      id: 0,
      component: <ModalContent />,
    },
    {
      id: 1,
      component: <ModalContent2 />,
    },
  ]

  const handleNext = () => {
    if (currentSlide < modalContents.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  return (
    <Div className="h-185 bg-primary_foundation_10 flex flex-col justify-center items-start rounded-main relative mt-12">
      <span>
        아직 자투리 시간에
        <br /> 모은 시간 조각이 없어요!
      </span>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mt-8 underline text-primary_foundation_60 underline-offset-[3.5px]"
      >
        시간 조각이 뭔가요?
      </button>
      <Image
        src="images/home-img.svg"
        alt="home-img"
        width={155}
        height={155}
        className="absolute top-0 right-0"
      />

      <Modal
        bgClassName="backdrop-blur"
        className="bg-transparent"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <IconClose
          className="absolute top-7 right-0 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />

        <div className="relative w-full aspect-square flex items-center justify-center bg-white rounded-16">
          {modalContents.map(({ id, component }) => (
            <div
              key={id}
              className={cn(
                'absolute w-full h-full opacity-0',
                currentSlide === id && 'opacity-100',
              )}
            >
              {component}
            </div>
          ))}
        </div>

        <div className="absolute bottom-[-30px] left-8 right-8 flex justify-between items-center px-8">
          {currentSlide > 0 && (
            <button
              type="button"
              className="text-white font-semibold pr-10"
              onClick={handlePrevious}
            >
              이전
            </button>
          )}

          <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-4">
            {modalContents.map(({ id }) => (
              <div
                key={id}
                className={cn(
                  'h-2 w-24 rounded-full bg-[#8a8a8d] transition-all duration-500',
                  currentSlide === id && ' bg-white',
                )}
              />
            ))}
          </div>

          {currentSlide < modalContents.length - 1 && (
            <button
              type="button"
              className="text-white font-semibold ml-auto pl-10"
              onClick={handleNext}
            >
              다음
            </button>
          )}
        </div>
      </Modal>
    </Div>
  )
}
