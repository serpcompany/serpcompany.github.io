# Creating a Shop Content Collection in Nuxt 3 - Complete Guide

## Overview
This guide walks through creating a content collection for "shop" posts in a Nuxt 3 project using Nuxt Content v3. We'll create a shop section with product listings and "best of" collection pages.

## Prerequisites
- Nuxt 3 project with @nuxt/content module installed
- Basic understanding of Vue 3 and Nuxt 3

## Step 1: Define the Shop Collection

First, we need to create a `content.config.ts` file in the project root (if it doesn't exist) to define our shop collection.

### Create `/nuxt-app/content.config.ts`:

```typescript
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    shop: defineCollection({
      // Define where shop content files are located
      source: 'shop/**/*.md',
      type: 'page',
      
      // Define the schema for shop items
      schema: z.object({
        title: z.string().describe('Product or collection name'),
        description: z.string().describe('Product description'),
        price: z.number().optional().describe('Product price'),
        category: z.string().describe('Product category'),
        tags: z.array(z.string()).default([]).describe('Product tags'),
        image: z.string().optional().describe('Product image URL'),
        featured: z.boolean().default(false).describe('Is this a featured item?'),
        rating: z.number().min(0).max(5).optional().describe('Product rating'),
        affiliate_link: z.string().optional().describe('Affiliate purchase link'),
        pros: z.array(z.string()).optional().describe('Product pros'),
        cons: z.array(z.string()).optional().describe('Product cons'),
        // For "best of" collection pages
        collection_type: z.enum(['product', 'best-of']).default('product'),
        products: z.array(z.string()).optional().describe('Product slugs for best-of pages')
      })
    })
  }
})
```

## Step 2: Create Content Directory Structure

Create the following directory structure:

```
/nuxt-app/content/
├── shop/
│   ├── products/
│   │   ├── osprey-daylite-pack.md
│   │   ├── patagonia-black-hole.md
│   │   └── north-face-borealis.md
│   └── best/
│       ├── hiking-backpacks.md
│       └── travel-bags.md
```

### Create directories:
```bash
mkdir -p nuxt-app/content/shop/products
mkdir -p nuxt-app/content/shop/best
```

## Step 3: Create Sample Content Files

### Example Product: `/nuxt-app/content/shop/products/osprey-daylite-pack.md`

```markdown
---
title: "REI Osprey Daylite Pack"
description: "Lightweight and versatile daypack perfect for day hikes and everyday use"
price: 65.00
category: "backpacks"
tags: ["hiking", "daypack", "lightweight", "osprey"]
image: "/images/shop/osprey-daylite.jpg"
featured: true
rating: 4.5
affiliate_link: "https://www.rei.com/product/..."
collection_type: "product"
pros:
  - "Extremely lightweight at 1 lb"
  - "Comfortable mesh shoulder straps"
  - "Multiple organization pockets"
  - "Hydration compatible"
cons:
  - "Limited capacity for multi-day trips"
  - "No rain cover included"
---

# REI Osprey Daylite Pack

The Osprey Daylite Pack is a versatile and lightweight daypack that's perfect for day hikes, travel, or everyday use.

## Key Features

- **Capacity**: 13 liters
- **Weight**: 1 lb (454g)
- **Dimensions**: 18" x 9" x 10"
- **Material**: 210D nylon

## Why We Love It

This pack strikes the perfect balance between functionality and weight...
```

### Example Collection Page: `/nuxt-app/content/shop/best/hiking-backpacks.md`

```markdown
---
title: "Best Backpacks for Hiking"
description: "Our curated selection of the best hiking backpacks for every adventure"
category: "guides"
tags: ["hiking", "backpacks", "gear-guide"]
image: "/images/shop/best-hiking-backpacks.jpg"
collection_type: "best-of"
products: 
  - "osprey-daylite-pack"
  - "patagonia-black-hole"
  - "north-face-borealis"
---

# Best Backpacks for Hiking in 2024

Finding the perfect hiking backpack can make or break your outdoor adventure. We've tested dozens of packs to bring you this curated selection.

## Our Top Picks

After extensive trail testing, these are our favorite hiking backpacks...
```

## Step 4: Create Page Routes

### Shop Index Page: `/nuxt-app/pages/shop/index.vue`

```vue
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Shop</h1>
    
    <!-- Featured Products Section -->
    <section v-if="featuredProducts.length" class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard 
          v-for="product in featuredProducts" 
          :key="product._id"
          :product="product"
        />
      </div>
    </section>

    <!-- All Products Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-6">All Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard 
          v-for="product in allProducts" 
          :key="product._id"
          :product="product"
        />
      </div>
    </section>

    <!-- Best Of Collections -->
    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-6">Gear Guides</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink 
          v-for="collection in bestOfCollections" 
          :key="collection._id"
          :to="`/shop/best/${collection._stem}`"
          class="block p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold mb-2">{{ collection.title }}</h3>
          <p class="text-gray-600">{{ collection.description }}</p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { queryCollection } from '#content'

// Fetch all shop items
const { data: shopItems } = await useAsyncData('shop', () => 
  queryCollection('shop').all()
)

// Filter products vs best-of collections
const allProducts = computed(() => 
  shopItems.value?.filter(item => item.collection_type === 'product') || []
)

const featuredProducts = computed(() => 
  allProducts.value.filter(product => product.featured)
)

const bestOfCollections = computed(() => 
  shopItems.value?.filter(item => item.collection_type === 'best-of') || []
)
</script>
```

### Collection Page: `/nuxt-app/pages/shop/best/[slug].vue`

```vue
<template>
  <div class="container mx-auto px-4 py-8">
    <article v-if="collection">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ collection.title }}</h1>
        <p class="text-xl text-gray-600">{{ collection.description }}</p>
      </header>

      <!-- Main Content -->
      <div class="prose max-w-none mb-12">
        <ContentRenderer :value="collection" />
      </div>

      <!-- Products in this Collection -->
      <section v-if="collectionProducts.length" class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Products in This Guide</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            v-for="product in collectionProducts" 
            :key="product._id"
            :product="product"
          />
        </div>
      </section>
    </article>

    <!-- 404 if collection not found -->
    <div v-else class="text-center py-16">
      <h1 class="text-2xl font-bold">Collection not found</h1>
      <NuxtLink to="/shop" class="text-blue-600 hover:underline mt-4 inline-block">
        Back to Shop
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryCollection } from '#content'

const route = useRoute()
const slug = route.params.slug as string

// Fetch the collection page
const { data: collection } = await useAsyncData(`collection-${slug}`, () => 
  queryCollection('shop')
    .where({ _stem: slug, collection_type: 'best-of' })
    .findOne()
)

// Fetch products mentioned in this collection
const { data: collectionProducts } = await useAsyncData(`collection-products-${slug}`, async () => {
  if (!collection.value?.products) return []
  
  // Fetch all products that are listed in this collection
  const products = await queryCollection('shop')
    .where({ 
      collection_type: 'product',
      _stem: { $in: collection.value.products }
    })
    .all()
  
  return products
})

// SEO
useHead({
  title: collection.value?.title,
  meta: [
    { name: 'description', content: collection.value?.description }
  ]
})
</script>
```

## Step 5: Create Reusable Components

### Product Card Component: `/nuxt-app/components/ProductCard.vue`

```vue
<template>
  <article class="border rounded-lg overflow-hidden hover:shadow-lg transition">
    <img 
      v-if="product.image" 
      :src="product.image" 
      :alt="product.title"
      class="w-full h-48 object-cover"
    >
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      
      <div class="flex items-center justify-between">
        <span v-if="product.price" class="text-2xl font-bold">
          ${{ product.price }}
        </span>
        <div v-if="product.rating" class="flex items-center">
          <span class="text-yellow-500">★</span>
          <span class="ml-1">{{ product.rating }}/5</span>
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <NuxtLink 
          :to="`/shop/products/${product._stem}`"
          class="flex-1 text-center py-2 border rounded hover:bg-gray-50"
        >
          View Details
        </NuxtLink>
        <a 
          v-if="product.affiliate_link"
          :href="product.affiliate_link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface ShopProduct {
  _id: string
  _stem: string
  title: string
  description: string
  price?: number
  image?: string
  rating?: number
  affiliate_link?: string
}

defineProps<{
  product: ShopProduct
}>()
</script>
```

## Step 6: Testing Your Implementation

1. **Start the development server:**
   ```bash
   cd nuxt-app
   npm run dev
   ```

2. **Visit the pages:**
   - Shop index: `http://localhost:3000/shop`
   - Collection page: `http://localhost:3000/shop/best/hiking-backpacks`

3. **Verify:**
   - Products are displaying correctly
   - Collections show their associated products
   - Navigation between pages works
   - Content renders properly

## Step 7: Additional Enhancements

### Add Filtering and Search
```vue
<!-- In shop/index.vue -->
<script setup>
// Add category filtering
const selectedCategory = ref('')
const categories = computed(() => 
  [...new Set(allProducts.value.map(p => p.category))]
)

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return allProducts.value
  return allProducts.value.filter(p => p.category === selectedCategory.value)
})
</script>
```

### Add Product Detail Pages
Create `/nuxt-app/pages/shop/products/[slug].vue` for individual product pages.

### SEO Optimization
Add proper meta tags, structured data, and Open Graph tags for better SEO.

## Troubleshooting

### Common Issues:

1. **Content not showing up:**
   - Ensure content files have proper frontmatter
   - Check that `content.config.ts` is in the correct location
   - Verify collection source path matches your content structure

2. **TypeScript errors:**
   - Run `npm run dev` to generate types
   - Import types from `#content`

3. **Routing issues:**
   - Ensure page files are in correct directories
   - Check that dynamic route parameters match

## Next Steps

- Add pagination for large product lists
- Implement search functionality
- Add product reviews/ratings system
- Create an admin interface for managing products
- Add shopping cart functionality (if needed)
- Implement product comparison features

This completes the setup for a shop content collection in Nuxt 3!