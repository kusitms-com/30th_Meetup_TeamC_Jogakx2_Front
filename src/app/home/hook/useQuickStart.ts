import { useRouter } from 'next/navigation'
import { QuickStart } from '../api/type'

export const useQuickStart = () => {
  const { push } = useRouter()

  const setQuickStart = ({
    id,
    name,
    hour,
    minute,
    spareTime,
    meridiem,
    type,
  }: QuickStart) => {
    localStorage.setItem(
      'quickstart',
      JSON.stringify({
        quickstart: {
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

  const goWithQuick = (quickstart: QuickStart) => {
    setQuickStart(quickstart)
    push('/home/sg-activity')
  }

  return { setQuickStart, goWithQuick }
}
