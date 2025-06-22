import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    shop: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'shop/best/*.md',
        schema: z.object({
          title: z.string(),
          slug: z.string(),
          description: z.string().optional(),
          publishDate: z.date().optional(),
          image: z.string().optional(),
          category: z.string().optional(),
          tags: z.array(z.string())
        }),
      })
    ),
    about: defineCollection({
      source: 'about.md',
      type: 'page'
    }),
  }
})