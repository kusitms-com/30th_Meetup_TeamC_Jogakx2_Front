import { cn } from '@/util'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../common'
import { Category, House } from '../Icons'

export default function FooterButtons({ className }: { className?: string }) {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'w-full flex justify-center gap-12 bg-white pt-15 pb-40',
        className,
      )}
    >
      <Button
        leftIcon={<House color={pathname === '/home' ? 'white' : '#484851'} />}
        className={cn(
          'rounded-8 w-133 h-44',
          pathname === '/home'
            ? 'bg-primary_foundation_100 text-white'
            : 'bg-transparent text-textColor',
        )}
        onClick={() => {
          push('/home')
        }}
      >
        홈
      </Button>
      <Button
        leftIcon={
          <Category color={pathname === '/archive' ? 'white' : '#484851'} />
        }
        className={cn(
          'rounded-8 w-137 h-44',
          pathname === '/archive'
            ? 'bg-primary_foundation_100 text-white'
            : 'bg-transparent text-textColor',
        )}
        onClick={() => {
          push('/archive')
        }}
      >
        아카이빙
      </Button>
    </div>
  )
}
