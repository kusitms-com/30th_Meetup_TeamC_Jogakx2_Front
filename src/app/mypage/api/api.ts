import { http } from '@/api'
import { MyPageResponse, PatchMyPageRequest } from './types'

export const getMypage = () => {
  return http.get<MyPageResponse>({
    url: '/profile',
  })
}

export const patchAlarm = () => {
  return http.patch({
    url: '/members/email-notification',
  })
}

export const patchMyPage = (data: PatchMyPageRequest) => {
  return http.patch({
    url: '/member/profile',
    data,
  })
}
