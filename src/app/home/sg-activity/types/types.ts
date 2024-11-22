import { Dispatch, SetStateAction } from 'react'
import { ActivityData } from '@/types/activityTypes'

export interface setErrorProps {
  error?: boolean
  setError: Dispatch<SetStateAction<boolean>>
}

export interface ChoiceSuggestionProps {
  setIsSuggestLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
  setText: Dispatch<SetStateAction<string>>
  setSeletedActivity: Dispatch<SetStateAction<ActivityData | undefined>>
  setActivityLink: Dispatch<SetStateAction<string>>
}

export interface ActivityResponse {
  success: boolean
  timestamp: string
  data: ActivityData[]
}
