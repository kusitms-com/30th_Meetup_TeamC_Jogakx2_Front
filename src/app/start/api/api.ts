import { http } from '@/api'
import { UserInfo } from '@/store/useUserInfo'
import { useMutation } from '@tanstack/react-query'

export const postOnboard = (data: UserInfo) => {
  return http.post({
    url: '/members/onboard',
    data,
  })
}

export const usePostOnboard = () => {
  return useMutation({
    mutationFn: (data: UserInfo) => postOnboard(data),
    onSuccess: () => {},
    onError: () => {},
  })
}
