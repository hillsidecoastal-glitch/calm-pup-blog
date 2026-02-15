import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecalmpup.blog';
    const manifestPath = path.join(process.cwd(), 'generated-manifest.json');
    
    let urls: Array<{ url: string; lastModified: string; category: string }> = [];
    
    if (fs.existsSync(manifestPath)) {
      const manifestData = fs.readFileSync(manifestPath, 'utf8');
      urls = JSON.parse(manifestData);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${[...new Set(urls.map(u => u.category))].map(category => `  <url>
    <loc>${baseUrl}/${category}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
${urls.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600',
      },
    });
  } catch (error) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecalmpup.blog';
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  }
}
