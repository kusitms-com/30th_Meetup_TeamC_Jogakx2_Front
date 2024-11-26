export interface MyPageResponse {
  email: string
  isEmailNotificationEnabled: boolean
}

export interface PatchMyPageRequest {
  nickname: string
  profileImage: string
}
