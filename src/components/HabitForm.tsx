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
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-gray-700"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        New Habit
      </h2>

      <input
        type="text"
        placeholder="e.g. Drink Water"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          bg-white dark:bg-gray-700
          border border-gray-300 dark:border-gray-600
          rounded px-3 py-2
          text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400
        "
      />

      <div className="flex items-center space-x-4 text-gray-800 dark:text-gray-200">
        <label className="flex items-center">
          <input
            type="radio"
            name="frequency"
            value="daily"
            checked={frequency === 'daily'}
            onChange={() => setFrequency('daily')}
            className="mr-1"
          />
          <span>Daily</span>
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="frequency"
            value="weekly"
            checked={frequency === 'weekly'}
            onChange={() => setFrequency('weekly')}
            className="mr-1"
          />
          <span>Weekly</span>
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
            className="
              ml-2 w-16
              bg-white dark:bg-gray-700
              border border-gray-300 dark:border-gray-600
              rounded px-2 py-1
              text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400
              disabled:opacity-50
            "
          />
          <span className="ml-1">days</span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="
            bg-orange-500 dark:bg-orange-600
            text-white
            px-4 py-2 rounded
            hover:bg-orange-600 dark:hover:bg-orange-700
            focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300
          "
        >
          Add Habit
        </button>
      </div>
    </form>
  )
}
