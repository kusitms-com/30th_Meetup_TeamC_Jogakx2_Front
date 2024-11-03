import { create } from 'zustand'

interface UserInfoType {
  name: string
  gender: string
  age: number | undefined
  profileIcon?: string
}

interface UserInfoState {
  userInfo: UserInfoType
}

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfoType) => void
  deleteUserInfo: () => void
}

const defaultState = { name: '', gender: '', age: undefined, profileIcon: '1' }

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: UserInfoType) => {
    set({ userInfo })
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState })
  },
}))

export default useUserInfo
