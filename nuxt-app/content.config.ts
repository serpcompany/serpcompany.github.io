import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    shop: defineCollection({
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
      })
    })
  }
})
