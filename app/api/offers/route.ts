import { NextResponse } from 'next/server'
import { sampleOffers } from '@/lib/data'

export async function GET() {
  try {
    return NextResponse.json(sampleOffers)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch offers' },
      { status: 500 }
    )
  }
}
