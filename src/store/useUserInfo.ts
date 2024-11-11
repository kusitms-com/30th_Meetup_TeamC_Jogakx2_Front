import { create } from 'zustand'

export interface UserInfo {
  nickname: string
  birthYear: number
  gender: GenderType
  profileImage: string
}

export type GenderType = 'FEMALE' | 'MALE' | 'NONE'

interface UserInfoState {
  userInfo: UserInfo
}

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfo) => void
  deleteUserInfo: () => void
}

const defaultState: UserInfo = {
  nickname: '',
  gender: 'FEMALE',
  birthYear: 0,
  profileImage: '1',
}

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo })
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState })
  },
}))

export default useUserInfo
