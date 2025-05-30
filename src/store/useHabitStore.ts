'use client'

import { create } from 'zustand'

export type Frequency = 'daily' | 'weekly' | 'custom'

export interface Habit {
  id: string
  title: string
  frequency: Frequency
  // optional custom interval (e.g. every 3 days)
  customInterval?: number
}

interface HabitState {
  habits: Habit[]
  addHabit: (title: string, frequency: Frequency, customInterval?: number) => void
  deleteHabit: (id: string) => void
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: [],
  addHabit: (title, frequency, customInterval) => {
    const id = crypto.randomUUID()
    set((s) => ({
      habits: [
        ...s.habits,
        { id, title: title.trim(), frequency, customInterval },
      ],
    }))
  },
  deleteHabit: (id) =>
    set((s) => ({ habits: s.habits.filter((h) => h.id !== id) })),
}))
