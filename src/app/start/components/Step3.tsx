import { Left } from '@/components'
import { cn } from '@/util'
import Image from 'next/image'
import { useProfileSelector } from '../hooks'

export default function Step3() {
  const { profiles, selectedProfileID, handleProfileSelect } =
    useProfileSelector()

  return (
    <div className="h-full px-20 w-full flex flex-col relative">
      <h1 className="title !mb-6">어떤 프로필로 함께 하시겠어요?</h1>
      <h2 className="text-primary_foundation_50 text-sm font-medium leading-snug">
        프로필은 나중에 바꿀 수 있어요
      </h2>

      <div className="relative w-full flex justify-center items-center mt-150">
        {profiles.map((id) => (
          <div
            key={id}
            className={cn(
              'absolute transition-opacity duration-300 opacity-0',
              selectedProfileID === id && 'opacity-100',
            )}
          >
            <div className="absolute inset-0 bg-accent-10 blur-[20px] -z-10" />
            <Image
              alt="image"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/image/profile/profile${id}.svg`}
              width={208}
              height={208}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-y-22 gap-x-10 w-full justify-items-stretch mt-170">
        {profiles.map((id) => (
          <button
            type="button"
            key={id}
            onClick={() => handleProfileSelect(id)}
            className={cn(
              'relative w-full aspect-square border rounded-full overflow-hidden p-20',
              selectedProfileID === id && 'border-accent-50 bg-accent-10',
            )}
            tabIndex={0}
          >
            {selectedProfileID === id && (
              <div className="absolute -top-18">
                <Left />
              </div>
            )}

            <Image
              alt="image"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/image/profile/profile${id}.svg`}
              layout="fill"
              objectFit="cover"
              className="p-5"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
