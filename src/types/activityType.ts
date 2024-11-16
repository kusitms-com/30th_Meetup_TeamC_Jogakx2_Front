export interface ActivityStore {
  spareTime: string | null
  activityType: 'ONLINE' | 'OFFLINE' | 'ONLINE_AND_OFFLINE' | null
  keywords: string[]
  location: string | null
  setSpareTime: (time: string) => void
  setActivityType: (type: 'ONLINE' | 'OFFLINE' | 'ONLINE_AND_OFFLINE') => void
  setKeywords: (keywords: string[]) => void
  setLocation: (location: string) => void
  reset: () => void
}
