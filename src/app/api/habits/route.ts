import { NextResponse } from 'next/server'

// Mock data for placeholder response
const mockHabits = [
  {
    id: "1",
    title: "Morning Exercise",
    frequency: "daily",
    customInterval: null,
    createdAt: new Date().toISOString()
  },
  {
    id: "2", 
    title: "Read for 30 minutes",
    frequency: "daily",
    customInterval: null,
    createdAt: new Date().toISOString()
  }
]

export async function GET() {
  // TODO: Replace with actual database query
  console.log('Fetching habits from placeholder data')
  
  return NextResponse.json(mockHabits)
}

export async function POST(request: Request) {
  const { title, frequency, customInterval } = await request.json()

  // Basic validation
  if (!title || !frequency) {
    return NextResponse.json(
      { error: 'Title and frequency are required' },
      { status: 400 }
    )
  }

  // TODO: Replace with actual database creation logic
  const newHabit = {
    id: Date.now().toString(), // Simple ID generation for placeholder
    title,
    frequency,
    customInterval,
    createdAt: new Date().toISOString()
  }
  
  console.log('Would create habit:', newHabit)
  
  return NextResponse.json(newHabit, { status: 201 })
}
