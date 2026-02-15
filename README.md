# The Calm Pup Blog

Professional anxious puppy training blog with 12 expert articles.

## Quick Deploy

1. Upload to GitHub
2. Import to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: https://thecalmpup.blog
   - `NEXT_PUBLIC_SHOP_URL`: https://thecalmpup.net
4. Deploy!

## Local Development

```bash
npm install
npm run build
npm run dev
```

## How It Works

- Articles stored in `data/articles.json`
- Build script generates pages from articles
- Sitemap auto-generated at `/api/sitemap`
