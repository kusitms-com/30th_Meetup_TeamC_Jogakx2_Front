export interface MonthActivity {
  title: string
  savedTime: number
  dateOfActivity: string // ISO 8601 형식의 문자열
}

export interface MonthKeyword {
  category: string
  image: string
}

export interface KeywordMonthDataResponse {
  totalSavedTimeByKeywordInMonth: number
  totalActivityCountByKeywordInMonth: number
  activities: MonthActivity[]
  keyword: MonthKeyword
}
