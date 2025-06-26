import { NextResponse, NextRequest } from 'next/server'

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const resolvedParams = await context.params;
  const { id } = resolvedParams;
  
  // TODO: Replace with actual database deletion logic
  console.log(`Would delete habit with id: ${id}`)
  
  return NextResponse.json({ id, deleted: true })
}
