/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://thecalmpup.blog',
    NEXT_PUBLIC_SHOP_URL: process.env.NEXT_PUBLIC_SHOP_URL || 'https://thecalmpup.net',
  },
}

module.exports = nextConfig
