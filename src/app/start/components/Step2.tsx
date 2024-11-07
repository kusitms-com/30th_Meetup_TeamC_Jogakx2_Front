'use client'

import { Input } from '@/components/common'
import CheckboxWithLabel from '@/components/common/CheckBox'
import useUserInfo from '@/store/useUserInfo'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

interface Step2Props {
  setError: (error: boolean) => void
}

export default function Step2({ setError }: Step2Props) {
  const [errorMessage, setErrorMessage] = useState<string>()
  const { userInfo, setUserInfo } = useUserInfo()
  const { name, age, gender } = userInfo

  const [userAge, setUserAge] = useState<string>(age ? String(age) : '')

  const handleGenderChange = (data: string) => {
    setUserInfo({ ...userInfo, gender: data })

    if (!errorMessage) {
      setError(false)
    }
  }
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || value === '') {
      setUserAge(value)

      const regex = /^[0-9]{4}$/

      if (regex.test(value)) {
        setUserInfo({ ...userInfo, age: value ? Number(value) : undefined })
        setErrorMessage('')
        if (gender) {
          setError(false)
        }
      } else {
        setError(true)
        setErrorMessage('4자리 숫자로 입력해주세요.')
      }
    }
  }

  return (
    <div className="px-20">
      <h1 className="title">
        {name} 님의 나이와 성별을 <br />
        알려주세요.
      </h1>

      <h2 className="subtitle">출생년도</h2>
      <Input
        value={userAge}
        placeholder="출생년도를 적어주세요. (예시: 2001)."
        onChange={handleAgeChange}
        error={errorMessage}
      />

      <h2 className="subtitle">성별</h2>
      <div className="flex justify-between mt-10 gap-20">
        <CheckboxWithLabel
          id="1"
          isChecked={gender === 'female'}
          label="여성"
          onChange={() => handleGenderChange('female')}
        />

        <CheckboxWithLabel
          id="2"
          isChecked={gender === 'male'}
          label="남성"
          onChange={() => handleGenderChange('male')}
        />
        <CheckboxWithLabel
          id="3"
          isChecked={gender === 'no'}
          label="미선택"
          onChange={() => handleGenderChange('no')}
        />
      </div>

      <Image
        className="absolute right-0 bottom-0"
        src="/images/bg-start2.png"
        alt="bg"
        width={292}
        height={291}
      />
    </div>
  )
}
