'use client'

import { useHabitStore } from '@/store/useHabitStore'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function HabitList() {
  const { habits, deleteHabit } = useHabitStore()

  if (habits.length === 0) {
    return <p className="text-gray-500">No habits yet—add one above!</p>
  }

  return (
    <ul className="space-y-3">
      {habits.map(({ id, title, frequency, customInterval }) => (
        <li
          key={id}
          className="flex items-center justify-between bg-white p-4 rounded shadow"
        >
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-600">
              {frequency === 'custom'
                ? `Every ${customInterval} days`
                : frequency.charAt(0).toUpperCase() + frequency.slice(1)}
            </p>
          </div>
          <button
            onClick={() => deleteHabit(id)}
            className="text-red-500 hover:text-red-600"
            aria-label="Delete habit"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  )
}
