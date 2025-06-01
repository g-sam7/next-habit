import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const resolvedParams = await context.params;
  const { id } = resolvedParams;
  await prisma.habit.delete({ where: { id } })
  return NextResponse.json({ id })
}
