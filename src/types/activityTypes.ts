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

export interface ActivityResponse {
  data: ActivityResponseData
}

export interface ActivityResponseData {
  offlineRecommendations: ActivityData[]
  onlineRecommendations: ActivityData[]
}

export interface ActivityData {
  order: number
  title: string
  content: string
  keyword: KeywordType
  url?: string
  placeUrl?: string
  placeName?: string
  mapx?: string
  mapy?: string
}

export interface KeywordType {
  category: string
  image: string
}

export interface SeletedActivityDone {
  type: string
  spareTime: number
  keyword: {
    category: string
    image: string
  }
  title: string
  content: string
  location?: string
}

export interface SelectedActivityResponse {
  id: number
  title: string
  keyword: KeywordType
}
