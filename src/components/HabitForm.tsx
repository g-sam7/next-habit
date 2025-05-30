'use client'

import { FormEvent, useState } from 'react'
import { useHabitStore, Frequency } from '@/store/useHabitStore'

export default function HabitForm() {
  const addHabit = useHabitStore((s) => s.addHabit)
  const [title, setTitle] = useState('')
  const [frequency, setFrequency] = useState<Frequency>('daily')
  const [customInterval, setCustomInterval] = useState(1)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title) return
    addHabit(title, frequency, frequency === 'custom' ? customInterval : undefined)
    setTitle('')
    setFrequency('daily')
    setCustomInterval(1)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold">New Habit</h2>
      <input
        type="text"
        placeholder="e.g. Drink Water"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
      />

      <div className="flex items-center space-x-4">
        <label>
          <input
            type="radio"
            name="frequency"
            value="daily"
            checked={frequency === 'daily'}
            onChange={() => setFrequency('daily')}
            className="mr-1"
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            name="frequency"
            value="weekly"
            checked={frequency === 'weekly'}
            onChange={() => setFrequency('weekly')}
            className="mr-1"
          />
          Weekly
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="frequency"
            value="custom"
            checked={frequency === 'custom'}
            onChange={() => setFrequency('custom')}
            className="mr-1"
          />
          <span>Every</span>
          <input
            type="number"
            min={1}
            value={customInterval}
            onChange={(e) => setCustomInterval(Number(e.target.value))}
            disabled={frequency !== 'custom'}
            className="ml-2 w-16 border rounded px-2 py-1"
          />
          <span className="ml-1">days</span>
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add Habit
        </button>
      </div>
    </form>
  )
}
