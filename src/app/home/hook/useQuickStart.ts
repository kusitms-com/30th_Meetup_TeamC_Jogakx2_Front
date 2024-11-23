import { useRouter } from 'next/navigation'
import { QuickStart } from '../api/type'

export const useQuickStart = () => {
  const { push } = useRouter()

  const setQuickStartLocal = ({
    id,
    name,
    hour,
    minute,
    spareTime,
    meridiem,
    type,
  }: QuickStart) => {
    localStorage.setItem(
      'quickStart',
      JSON.stringify({
        quickStart: {
          id,
          name,
          hour,
          minute,
          spareTime,
          meridiem,
          type,
        },
      }),
    )
  }

  const goToActivity = (data: QuickStart) => {
    setQuickStartLocal(data)
    push('/home/sg-activity')
  }

  return { setQuickStartLocal, goToActivity }
}
