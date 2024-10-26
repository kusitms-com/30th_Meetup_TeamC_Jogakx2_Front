import { OauthBtnData } from './type'

export const socialTypes: OauthBtnData[] = [
  {
    id: 1,
    type: 'kakao',
    text: '카카오',
    auth_uri: 'https://cnergy.p-e.kr/v1/oauth/kakao',
  },
  {
    id: 2,
    type: 'naver',
    text: '네이버',
    auth_uri: 'https://cnergy.p-e.kr/v1/oauth/naver',
  },
  {
    id: 3,
    type: 'google',
    text: '구글',
    auth_uri: 'https://cnergy.p-e.kr/v1/oauth/google',
  },
]
