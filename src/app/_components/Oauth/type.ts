export interface OauthBtnData {
  id: number
  type: string
  text: string
  style: string
}

export type OauthBtnProps = Omit<OauthBtnData, 'id'>
