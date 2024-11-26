import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { getMypage, patchAlarm, patchMyPage } from './api'
import { PatchMyPageRequest } from './types'

export const useGetMyPage = () =>
  useSuspenseQuery({
    queryKey: ['mypage'],
    queryFn: () => getMypage(),
    select: (data) => data.data,
  })

export const usePatchAlarm = () => {
  return useMutation({
    mutationKey: ['alarm'],
    mutationFn: () => patchAlarm(),
  })
}

export const usePatchMyPage = () => {
  return useMutation({
    mutationKey: ['mypage'],
    mutationFn: (data: PatchMyPageRequest) => patchMyPage(data),
  })
}
