import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    shop: defineCollection({
      source: 'shop/best/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string().optional(),
        publishDate: z.date().optional(),
        image: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string())
      })
    }),
    about: defineCollection({
      source: 'about.md',
      type: 'page'
    }),
  }
})
