'use client'

import { useState } from 'react'
import { useHabitStore } from '@/store/useHabitStore'
import { TrashIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function HabitList() {
  const { habits, deleteHabit, loading } = useHabitStore()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function handleDelete(id: string) {
    setDeletingId(id)
    try {
      await deleteHabit(id)
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <ArrowPathIcon className="
          animate-spin
          h-8 w-8
          text-orange-500
        " />
      </div>
    )
  }

  if (habits.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          No habits yet. Add one above!
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {habits.map(({ id, title, frequency, customInterval }) => (
        <li
          key={id}
          className="
            flex items-center justify-between
            bg-white dark:bg-gray-800
            p-4 rounded
            shadow dark:shadow-gray-700
          "
        >
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {frequency === 'custom'
                ? `Every ${customInterval} days`
                : frequency.charAt(0).toUpperCase() + frequency.slice(1)}
            </p>
          </div>
          <button
            onClick={() => handleDelete(id)}
            disabled={deletingId === id}
            aria-label="Delete habit"
            className="
              flex items-center justify-center
              h-8 w-8
              text-red-500 hover:text-red-600
              dark:text-red-400 dark:hover:text-red-500
            "
          >
            {deletingId === id ? (
              <ArrowPathIcon className="
                animate-spin
                h-8 w-8
                text-orange-500
              " />
            ) : (
              <TrashIcon className="h-5 w-5" />
            )}
          </button>
        </li>
      ))}
    </ul>
  )
}
