import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  await prisma.habit.delete({ where: { id } })
  return NextResponse.json({ id })
}
