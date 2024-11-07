'use client'

import {
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
  Profile7,
  SelectProfile,
} from '@/components'
import useUserInfo from '@/store/useUserInfo'
import { cn } from '@/util'
import { useState } from 'react'

const profiles = [
  { id: '1', Component: Profile1 },
  { id: '2', Component: Profile2 },
  { id: '3', Component: Profile3 },
  { id: '4', Component: Profile4 },
  { id: '5', Component: Profile5 },
  { id: '6', Component: Profile6 },
  { id: '7', Component: Profile7 },
]

export default function Step3() {
  const { userInfo, setUserInfo } = useUserInfo()
  const [selectedProfile, setSelectedProfile] = useState(userInfo.profileIcon)

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile)
    setUserInfo({ ...userInfo, profileIcon: profile })
  }

  return (
    <div className="h-full px-20 w-full flex flex-col relative">
      <h1 className="title !mb-6">어떤 프로필로 함께 하시겠어요?</h1>
      <h2 className="text-primary_foundation_50 text-sm font-medium leading-snug">
        프로필은 나중에 바꿀 수 있어요
      </h2>

      <div className="relative w-full flex justify-center items-center mt-150">
        {profiles.map(({ id, Component }) => (
          <div
            key={id}
            className={cn(
              'absolute transition-opacity duration-300 opacity-0 ',
              selectedProfile === id && 'opacity-100',
            )}
          >
            <Component active width={180} height={180} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-y-22 gap-x-4 w-full justify-items-stretch mt-170">
        {profiles.map(({ id, Component }) => (
          <button
            type="button"
            key={id}
            onClick={() => handleProfileSelect(id)}
            className="relative flex justify-center"
            tabIndex={0}
          >
            {selectedProfile === id && (
              <div className="absolute -top-18">
                <SelectProfile />
              </div>
            )}
            <Component active={selectedProfile === id} />
          </button>
        ))}
      </div>
    </div>
  )
}
