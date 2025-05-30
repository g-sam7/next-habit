import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const habits = await prisma.habit.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(habits)
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

  const habit = await prisma.habit.create({
    data: { title, frequency, customInterval },
  })
  return NextResponse.json(habit, { status: 201 })
}
