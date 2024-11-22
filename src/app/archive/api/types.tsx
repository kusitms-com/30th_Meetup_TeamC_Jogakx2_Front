export interface CalendarResponse {
  summary: {
    registrationDate: string
    totalSavedTime: number
    monthlyActivityCount: number
  }
  monthlyActivities: Activity[]
}

export interface Activity {
  category: Category
  title: string
  savedTime: number
  activityCreatedAt: string
}

export enum Category {
  SELF_DEVELOPMENT = '자기개발',
  HEALTH = '건강',
  NATURE = '자연',
  CULTURE_ART = '문화/예술',
  ENTERTAINMENT = '엔터테인먼트',
  RELAXATION = '휴식',
  SOCIAL = '소셜',
}

export const categoryLabels: Record<string, string> = {
  SELF_DEVELOPMENT: '자기개발',
  HEALTH: '건강',
  NATURE: '자연',
  CULTURE_ART: '문화/예술',
  ENTERTAINMENT: '엔터테인먼트',
  RELAXATION: '휴식',
  SOCIAL: '소셜',
}
