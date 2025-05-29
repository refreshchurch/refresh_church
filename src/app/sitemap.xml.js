import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createClient()
  const { data } = await supabase
    .from('site_maps')
    .select('content')
    .order('updated_at', { ascending: false })
    .limit(1)
    .single()

  const sitemapContent = data?.content || `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://refreshchurch.org</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 