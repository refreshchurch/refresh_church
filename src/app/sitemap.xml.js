import { createClient } from '@/lib/supabase/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

export const dynamic = 'force-dynamic'

// Function to recursively get all routes from the app directory
async function getAllRoutes(dir, basePath = '') {
  const routes = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    const relativePath = join(basePath, entry.name)

    // Skip certain directories and files
    if (entry.name.startsWith('.') || 
        entry.name === 'api' || 
        entry.name === 'components' || 
        entry.name === 'lib' ||
        entry.name === 'layout.js' ||
        entry.name === 'loading.js' ||
        entry.name === 'error.js' ||
        entry.name === 'not-found.js') {
      continue
    }

    if (entry.isDirectory()) {
      // Recursively get routes from subdirectories
      const subRoutes = await getAllRoutes(fullPath, relativePath)
      routes.push(...subRoutes)
    } else if (entry.name === 'page.js' || entry.name === 'page.tsx') {
      // Convert file path to URL path
      const route = '/' + relativePath.replace(/\/page\.(js|tsx)$/, '')
      routes.push(route)
    }
  }

  return routes
}

// Function to determine priority and changefreq based on route
function getRouteMetadata(route) {
  // Default values
  let priority = '0.5'
  let changefreq = 'weekly'

  // Set higher priority for main pages
  if (route === '/') {
    priority = '1.0'
    changefreq = 'daily'
  } else if (['/blog', '/sermons', '/events'].includes(route)) {
    priority = '0.8'
    changefreq = 'daily'
  } else if (['/first-time-here', '/beliefs'].includes(route)) {
    priority = '0.9'
    changefreq = 'monthly'
  } else if (route.startsWith('/blog/')) {
    priority = '0.6'
    changefreq = 'monthly'
  } else if (route.includes('admin')) {
    // Skip admin routes
    return null
  }

  return { priority, changefreq }
}

export async function GET() {
  const supabase = createClient()
  
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

  // Get all routes from the app directory
  const appDir = join(process.cwd(), 'src/app')
  const routes = await getAllRoutes(appDir)

  // Start building the sitemap XML
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add discovered routes
  for (const route of routes) {
    const metadata = getRouteMetadata(route)
    if (metadata) {
      sitemapContent += `
  <url>
    <loc>https://refreshchurch.org${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority}</priority>
  </url>`
    }
  }

  // Add blog posts
  if (blogs) {
    for (const blog of blogs) {
      sitemapContent += `
  <url>
    <loc>https://refreshchurch.org/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.updated_at).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    }
  }

  // Add custom sitemap entries if they exist
  if (customSitemap?.content) {
    // Extract URLs from custom sitemap content
    const customUrls = customSitemap.content.match(/<url>[\s\S]*?<\/url>/g) || []
    for (const url of customUrls) {
      sitemapContent += `\n${url}`
    }
  }

  // Close the urlset
  sitemapContent += '\n</urlset>'

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 