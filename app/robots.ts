import type {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/it/legal/', '/es/legal/', '/en/legal/'],
    },
    sitemap: 'https://www.zeeguros.com/sitemap.xml',
  }
}
