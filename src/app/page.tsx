'use client'

import { useEffect } from 'react'
import Header from '@/containers/Header'
import HabitForm from '@/components/HabitForm'
import HabitList from '@/components/HabitList'
import { useHabitStore } from '@/store/useHabitStore'

export default function Home() {
  const fetchHabits = useHabitStore((s) => s.fetchHabits)

  useEffect(() => {
    fetchHabits().catch(console.error)
  }, [fetchHabits])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto space-y-8 p-8">
        <HabitForm />
        <HabitList />
      </main>
    </div>
  )
}
