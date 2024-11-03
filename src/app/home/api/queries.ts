import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { getQuickList, postQuickStart } from './api'
import { QuickStartRequest } from './type'

export const useGetQuickList = () =>
  useSuspenseQuery({
    queryKey: ['quick-list'],
    queryFn: () => getQuickList(),
    select: (data) => data.data,
  })

export const usePostQuickStart = () => {
  return useMutation({
    mutationKey: ['quick-start'],
    mutationFn: (data: QuickStartRequest) => postQuickStart(data),
    onMutate: () => {},
    onSuccess: () => {},
    onError: () => {},
  })
}
