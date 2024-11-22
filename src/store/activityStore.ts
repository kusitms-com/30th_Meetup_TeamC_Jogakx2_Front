import { create } from 'zustand'
import { ActivityStore } from '@/types/activityTypes'

export const useActivityStore = create<ActivityStore>((set) => ({
  spareTime: '',
  activityType: [],
  keywords: [],
  address: '',

  setSpareTime: (time) => set(() => ({ spareTime: time })),
  setActivityType: (activityType) => set(() => ({ activityType })),
  setKeywords: (keywords) => set(() => ({ keywords })),
  setAddress: (address) => set(() => ({ address })),
  reset: () =>
    set(() => ({
      spareTime: '',
      activityType: [],
      keywords: [],
      address: '',
    })),
}))
