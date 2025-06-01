import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    await prisma.habit.delete({ where: { id } })
    return NextResponse.json({ message: `Habit ${id} deleted.` })
  } catch (error) {
    console.error('Delete failed:', error)
    return NextResponse.json({ error: 'Delete failed.' }, { status: 500 })
  }
}
