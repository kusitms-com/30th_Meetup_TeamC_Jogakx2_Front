import { http } from '@/api'
import { QuickStartRequest, QuickStartResponse } from './type'

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
