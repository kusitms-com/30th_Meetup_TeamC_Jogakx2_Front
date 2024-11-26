'use client'

import { Input } from '@/components/common'
import useUserInfo from '@/store/useUserInfo'
import { useNicknameValidator } from '../hooks'

interface Step1Props {
  setError: (error: boolean) => void
}

export default function Step1({ setError }: Step1Props) {
  const { userInfo, setUserInfo } = useUserInfo()
  const { nickname, errorMessage, handleNicknameChange } = useNicknameValidator(
    {
      initialNickname: userInfo.nickname,
      setError,
    },
  )
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    handleNicknameChange(newName)
    setUserInfo({ ...userInfo, nickname: newName })
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
        value={nickname}
        placeholder="닉네임을 적어주세요."
        error={errorMessage}
        onChange={handleChangeName}
      />
    </div>
  )
}
