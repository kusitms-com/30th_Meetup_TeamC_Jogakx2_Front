'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SendData } from './type'

export default function LoginCheck() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const code = searchParams.get('code')
  const scope = searchParams.get('scope')
  const state = searchParams.get('state')

  const sendUserHomeOrStart = (userState: string) => {
    if (userState === 'GUEST') router.push('/start')
    if (userState === 'MEMBER') router.push('/home')
  }

  const getUserData = async (socialType: string, sendDataArr: SendData[]) => {
    let url: string = `https://cnergy.p-e.kr/v1/oauth/login/${socialType}?`
    for (let i = 0; i < sendDataArr.length; i += 1) {
      if (i === 0) {
        url += `${sendDataArr[i].name}=${sendDataArr[i].value}`
      }

      if (i !== 0) {
        url += `&${sendDataArr[i].name}=${sendDataArr[i].value}`
      }
    }

    try {
      const res = await fetch(url, {
        method: 'GET',
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      // console.log('reponse Data', data)

      // 토근 설정
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)

      // role에 따라 페이지 이동 차이
      sendUserHomeOrStart(data.data.role)
    } catch (error) {
      console.log('Error fetching user data', error)
    }
  }

  useEffect(() => {
    const sendDataArr: SendData[] = []

    if (code) {
      if (state) {
        sendDataArr.push({ name: 'code', value: code })
        sendDataArr.push({ name: 'state', value: code })
        getUserData('naver', sendDataArr)
        return
      }
      if (scope) {
        sendDataArr.push({ name: 'code', value: code })
        getUserData('google', sendDataArr)
        return
      }
      sendDataArr.push({ name: 'code', value: code })
      getUserData('kakao', sendDataArr)
    }
  }, [])

  return <div>로그인 정보를 확인중입니다...</div>
}

// 카카오
// http://localhost:3000/auth/callback?
// code=ZZnujfZHgky0SJzoqbsnPu3y2TKkcfDvDbYNMleQV7tf_vIeY5YOYQAAAAQKKiUQAAABksnID2r7Ewsnpgvovw

// 만들어지는 url : https://cnergy.p-e.kr/v1/oauth/kakao?code=7wnKYOCgbr5DjoVxkYN_Pv-V02_ELWEZ4WCS1teNUrqx_R0C5_ZscAAAAAQKKw0eAAABksn8dLxPBWDH3LuH7A

// 구글
// http://localhost:3000/auth/callback?
// code=4%2F0AVG7fiTjjq1uNzs9UKtrmM3_BGeROe5RR0vGz3zYjrC1uw_qaSiOT3h1_FRVY-efhY_8Dw&
// scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent

// 만들어지는 url : https://cnergy.p-e.kr/v1/oauth/google?code=4/0AVG7fiSX5k6hZg5rq1Y0mmuDqWkq2BsO3KP4JI_5eUg53128M219Nk58taZ30Yq2Yk-Elw

// 네이버
// http://localhost:3000/auth/callback?
// code=3IgulvPnQhcdllTQZ2&
// state=7d0uu0g1bct5s0n3em5pitb457

// 만들어지는 url :  https://cnergy.p-e.kr/oauth/login/naver?code=3IgulvPnQhcdllTQZ2&state=3IgulvPnQhcdllTQZ2
