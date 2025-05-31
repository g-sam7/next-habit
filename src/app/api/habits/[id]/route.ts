import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export default async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  await prisma.habit.delete({ where: { id } })
  return NextResponse.json({ id })
}