import { create } from 'zustand'

interface QueryKeyState {
  keyForFresh: number
  refreshKey: () => void
}

export const useQuerykeyStore = create<QueryKeyState>((set) => ({
  keyForFresh: Date.now(),
  refreshKey: () =>
    set({
      keyForFresh: Date.now(),
    }),
}))
