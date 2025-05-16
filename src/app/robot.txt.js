import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic' // <-- important for Vercel dynamic route handling

export async function GET() {
  const supabase = createClient()
  const { data } = await supabase
    .from('robots_config')
    .select('robots_txt')
    .single()

  const robotsContent = data?.robots_txt || 'User-agent: *\nDisallow:'

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
