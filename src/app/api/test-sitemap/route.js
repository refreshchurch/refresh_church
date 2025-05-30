import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    // Get custom sitemap entries from Supabase
    const { data: customSitemap } = await supabase
      .from('site_maps')
      .select('content')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single()

    // Get all published blog posts
    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug, updated_at')
      .order('updated_at', { ascending: false })

    // Define known routes (this would be dynamically generated in the actual sitemap)
    const knownRoutes = [
      '/',
      '/blog',
      '/sermons',
      '/events',
      '/first-time-here',
      '/beliefs',
      '/refresh-youth',
      '/womens-ministry',
      '/stories',
      '/privacy-policy'
    ]

    // Create a test response object
    const testData = {
      discoveredRoutes: knownRoutes,
      blogPosts: blogs || [],
      customSitemapEntries: customSitemap?.content ? 'Present' : 'None',
      routeCount: knownRoutes.length,
      blogCount: blogs?.length || 0,
      sampleRoute: knownRoutes[0] ? {
        route: knownRoutes[0],
        metadata: {
          priority: '1.0',
          changefreq: 'daily'
        }
      } : null,
      status: 'success'
    }

    return new Response(JSON.stringify(testData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({
      status: 'error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
} 