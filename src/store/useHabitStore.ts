'use client'

import { create } from 'zustand'

export type Frequency = 'daily' | 'weekly' | 'custom'

export interface Habit {
  id: string
  title: string
  frequency: Frequency
  customInterval?: number
}

interface HabitState {
  habits: Habit[]
  loading: boolean
  fetchHabits: () => Promise<void>
  addHabit: (
    title: string,
    frequency: Frequency,
    customInterval?: number
  ) => Promise<void>
  deleteHabit: (id: string) => Promise<void>
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: [],
  loading: true,

  fetchHabits: async () => {
    set({ loading: true })
    try {
      const res = await fetch('/api/habits')
      if (!res.ok) throw new Error('Failed to fetch habits')
      const data: Habit[] = await res.json()
      set({ habits: data, loading: false })
    } catch (error) {
      console.error('Failed to fetch habits:', error)
      set({ loading: false })
    }
  },

  addHabit: async (title, frequency, customInterval) => {
    try {
      const res = await fetch('/api/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, frequency, customInterval }),
      })
      if (!res.ok) throw new Error('Failed to add habit')
      const newHabit: Habit = await res.json()
      set((s) => ({ habits: [newHabit, ...s.habits] }))
    } catch (error) {
      console.error('Failed to add habit:', error)
    }
  },

  deleteHabit: async (id) => {
    try {
      const res = await fetch(`/api/habits/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete habit')
      set((s) => ({ habits: s.habits.filter((h) => h.id !== id) }))
    } catch (error) {
      console.error('Failed to delete habit:', error)
    }
  },
}))