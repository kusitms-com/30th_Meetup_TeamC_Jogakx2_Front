import { http } from '@/api'
import { HomeResponse, QuickStartRequest, QuickStartResponse } from './type'

export const getHomeData = () => {
  return http.get<HomeResponse>({
    url: '/home',
  })
}

export const getQuickList = () => {
  return http.get<QuickStartResponse>({
    url: '/quick-starts',
  })
}

export const postQuickStart = (data: QuickStartRequest) => {
  return http.post({
    url: '/quick-starts',
    data,
  })
}

export const patchQuickStart = (data: QuickStartRequest, id: number) => {
  return http.post({
    url: `/quick-starts/${id}`,
    data,
  })
}
