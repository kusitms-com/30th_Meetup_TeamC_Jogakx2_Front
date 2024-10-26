export interface OauthBtnData {
  id: number
  type: string
  text: string
  auth_uri: string
}

export type OauthBtnProps = Omit<OauthBtnData, 'id'>
