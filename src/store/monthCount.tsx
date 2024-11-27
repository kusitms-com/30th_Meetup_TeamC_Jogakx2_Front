import { create } from 'zustand'

interface MonthCountState {
  monthCount: number
  setMonthCount: (newCount: number) => void
}

export const useMonthTotalCount = create<MonthCountState>((set) => ({
  monthCount: 0,
  setMonthCount: (newCount) =>
    set({
      monthCount: newCount,
    }),
}))
