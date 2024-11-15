import { http } from '@/api'
import { UserInfo } from '@/store/useUserInfo'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const postOnboard = (data: UserInfo) => {
  return http.post({
    url: '/members/onboard',
    data,
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
