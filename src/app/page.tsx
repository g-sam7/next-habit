import Header from '@/containers/Header'
import HabitForm from '@/components/HabitForm'
import HabitList from '@/components/HabitList'

export default function Home() {
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
