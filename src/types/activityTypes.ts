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

// response 데이터
export interface ActivityData {
  order: number
  title: string
  content: string
  keywordCategory: string
  placeName?: string
  mapx?: string
  mapy?: string
  placeUrl?: string
}
