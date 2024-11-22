export interface ActivityStore {
  spareTime: string
  activityType: string[]
  keywords: string[]
  address: string
  setSpareTime: (time: string) => void
  setActivityType: (type: string[]) => void
  setKeywords: (keywords: string[]) => void
  setAddress: (location: string) => void
  reset: () => void
}
