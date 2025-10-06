import { NextResponse } from 'next/server'
import { sampleMenuItems } from '@/lib/data'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    let items = sampleMenuItems
    
    if (category && category !== 'All') {
      items = items.filter(item => item.category === category)
    }
    
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch menu items' },
      { status: 500 }
    )
  }
}
