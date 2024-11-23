import { http } from '@/api'
import { UserInfo } from '@/store/useUserInfo'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const postOnboard = (data: UserInfo) => {
  return http.post({
    url: '/members/onboard',
    data,
  })
}

export const getNicknamePossible = (nickname: string) => {
  return http.get({
    url: `/members/check-nickname?nickname=${nickname}`,
  })
}

export const usePostOnboard = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: (data: UserInfo) => postOnboard(data),
    onSuccess: () => {
      router.push('/home')
    },
    onError: (error) => {
      alert(error.message)
    },
  })
}

export const useGetNickname = (nickname: string) => {
  useSuspenseQuery({
    queryKey: ['nickname', nickname],
    queryFn: () => getNicknamePossible(nickname),
    select: (data) => data,
  })
}
