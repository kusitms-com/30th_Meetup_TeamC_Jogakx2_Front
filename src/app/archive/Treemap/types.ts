import { KeywordsPerSummary, KeywordsTotal } from '../api/types'

export interface TreemapItem {
  keyword: {
    category: string
    image: string
  }
  activityCount: number
}

export interface KeywordsDataForTreemap {
  monthlySavedTimeAndActivityCount: KeywordsTotal
  activitiesByKeywordSummary: KeywordsPerSummary[]
}

export interface ItemType {
  x: number
  y: number
  width: number
  height: number
  item: KeywordsPerSummary
}
