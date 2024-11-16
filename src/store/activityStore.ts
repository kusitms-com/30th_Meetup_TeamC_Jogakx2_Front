import { create } from 'zustand'
import { ActivityStore } from '@/types/activityType'

export const useActivityStore = create<ActivityStore>((set) => ({
  spareTime: null,
  activityType: null,
  keywords: [],
  location: null,

  setSpareTime: (time) => set(() => ({ spareTime: time })),
  setActivityType: (type) => set(() => ({ activityType: type })),
  setKeywords: (keywords) => set(() => ({ keywords })),
  setLocation: (location) => set(() => ({ location })),
  reset: () =>
    set(() => ({
      spareTime: null,
      activityType: null,
      keywords: [],
      location: null,
    })),
}))
