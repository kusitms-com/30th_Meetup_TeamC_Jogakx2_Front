import { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

export default function useKakaoMap(callback: () => void) {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAO_KEY
  useEffect(() => {
    if (typeof window !== 'undefined' && window.kakao && window.kakao.maps) {
      callback()
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing,places`
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        callback()
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [callback])
}
