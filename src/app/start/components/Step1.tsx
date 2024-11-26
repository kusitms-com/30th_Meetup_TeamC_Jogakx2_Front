'use client'

import { Input } from '@/components/common'
import useUserInfo from '@/store/useUserInfo'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { getNicknamePossible } from '../api/api'

interface Step1Props {
  setError: (error: boolean) => void
}

export default function Step1({ setError }: Step1Props) {
  const { userInfo, setUserInfo } = useUserInfo()
  const [username, setUsername] = useState(userInfo.nickname)
  const [errorMessage, setErrorMessage] = useState<string>()
  const inputTimeout = useRef<NodeJS.Timeout | null>(null)

  const validateName = (name: string) => {
    const regex = /^[가-힣a-zA-Z0-9]{0,6}$/
    return regex.test(name)
  }

  const checkNickname = async (nickname: string) => {
    try {
      const response = await getNicknamePossible(nickname)

      if (response.data === false) {
        setErrorMessage('이미 사용 중인 닉네임입니다.')
        setError(true)
      } else {
        setErrorMessage('')
        setError(false)
      }
    } catch (error) {
      setErrorMessage('닉네임 확인 중 오류가 발생했습니다.')
      setError(true)
    }
  }

  const handleChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setUsername(newName)

    if (!validateName(newName)) {
      setErrorMessage('닉네임은 한글/영문/숫자를 포함한 6자 이내만 가능해요.')
    } else {
      setError(false)
      setErrorMessage('')
      setUserInfo({ ...userInfo, nickname: newName })

      if (inputTimeout.current) {
        clearTimeout(inputTimeout.current)
      }

      inputTimeout.current = setTimeout(() => {
        if (newName.trim() !== '') {
          checkNickname(newName)
        }
      }, 500)
    }
  }

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (inputTimeout.current) {
        clearTimeout(inputTimeout.current)
      }
    }
  }, [])

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
    </div>
  )
}
