import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('robots_config')
    .select('robots_txt')
    .single()

  const robotsContent = data?.robots_txt || 'User-agent: *\nDisallow:'

  return new NextResponse(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
