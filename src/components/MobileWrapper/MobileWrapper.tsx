import { ReactNode } from 'react'
import SplashLogoNew from '../Icons/SplashLogoNew'

export default function MobileWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center h-[100vh]">
      <aside className="hidden min-w-380 mr-[5%] min-[800px]:block">
        <div className="flex flex-col h-full justify-center items-center">
          <SplashLogoNew className="my-auto" />
        </div>
      </aside>
      <div className="relative flex flex-col min-w-390 h-844 border-1 overflow-y-auto scrollbar-hide overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}
