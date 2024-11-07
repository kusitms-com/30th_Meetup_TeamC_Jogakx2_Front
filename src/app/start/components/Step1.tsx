'use client'

import { Input } from '@/components/common'
import useUserInfo from '@/store/useUserInfo'
import Image from 'next/image'
import { useState } from 'react'

interface Step1Props {
  setError: (error: boolean) => void
}

export default function Step1({ setError }: Step1Props) {
  const { userInfo, setUserInfo } = useUserInfo()
  const [username, setUsername] = useState(userInfo.name)
  const [errorMessage, setErrorMessage] = useState<string>()

  const validateName = (name: string) => {
    const regex = /^[가-힣a-zA-Z0-9]{0,6}$/
    return regex.test(name)
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setUsername(newName)

    if (!validateName(newName)) {
      setErrorMessage('닉네임은 한글/영문/숫자를 포함한 6자 이내만 가능해요.')
    } else {
      setError(false)
      setErrorMessage('')
      setUserInfo({ ...userInfo, name: newName })
    }
  }
  return (
    <div className="px-20">
      <h1 className="title">
        안녕하세요, 조각조각이에요 :)
        <br />
        어떻게 불러드릴까요?
      </h1>

      <Input
        success="멋진 이름이에요!"
        label="6자 이내의 한글/영문/숫자를 입력해주세요."
        value={username}
        placeholder="닉네임을 적어주세요."
        error={errorMessage}
        onChange={handleChangeName}
      />

      <Image
        className="absolute right-0 bottom-0"
        src="/images/bg-start.png"
        alt="bg"
        width={292}
        height={291}
      />
    </div>
  )
}
